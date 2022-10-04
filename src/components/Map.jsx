import React, { useCallback, useState, useRef } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { useQuery } from 'react-query' 
import mapAPI from '../services/mapAPI'
import useGetAllRestaurants from '../hooks/useGetAllRestaurants'
import useGetQueryRestaurants from '../hooks/useGetQueryRestaurants'
import Sidebar from './Sidebar'

const containerStyle = {
  	width: '100vw',
  	height: '100vh'
}

/* const center = {
  	lat: 55.6050,
  	lng: 13.0038
} */

const libraries = ['places'] 

const Map = () => {
	/* const { data } = useQuery(['places'], mapAPI.getLatAndLong) */ // används inte än... 

  	const { isLoaded } = useLoadScript({
		id: 'google-map-script',
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
		libraries, 
	})

  	const [map, setMap] = useState(/** @type google.maps.Map */ (null))
	const [open, setOpen] = useState(false)
	const [userPosition, setUserPosition] = useState({lat: 55.6050, lng: 13.0038})
	const [ userLocation, setUserLocation ] = useState("")
	const { data: restaurants } = useGetAllRestaurants("restaurants")  
 	/* const { data: restaurants } = useGetQueryRestaurants()  */
	const { selected, setSelected } = useState("")
	const [city, setCity] = useState('')

	/*const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map)
	}, [])
	*/

	const handleOnSubmit = async (address) => {
		if (!address) {
			return
		}

		/* setCity(await mapAPI.getLatAndLong(address)) */
		setCity(await mapAPI.getSearchedTown(address))
		
		// get the coordinates for the place that user searched for
		const coordinates = await mapAPI.getLatAndLong(address) 
		console.log("coordinates to the place you searched for", coordinates)
		setUserPosition(coordinates) // sets userPosition to same value as the coordinates from searchfield

		map.panTo(coordinates) // moves map view to the chosen place
	}

	const mapRef = useRef()

	const onMapLoad = useCallback((map) => {
		mapRef.current = map
	}, [])
	
	const panToLocation = useCallback(({ lat, lng }) => {
		setUserLocation({ lat, lng })
		mapRef.current.panTo({ lat, lng })
		mapRef.current.setZoom(15)
		console.log("latitud:", lat + "longitud:", lng)
	}, [])

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null)
	}, [])

	const resetCity = () => {
		setCity(null)
		setOpen(false)
	}

  return isLoaded ? (
	<>
		<div className="mapBox">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={userPosition}
				zoom={15}
				onLoad={onMapLoad}
				onUnmount={onUnmount}
				options={{
					mapTypeId: 'roadmap', //set default page to show Roadmap. It does already but this is our setting
					mapTypeControl:false, //removes Sattelite and Terrain Option Buttons
				}}
			>
				{ /* Child components, such as markers, info windows, etc. */ }

				<Marker 
					position={userPosition}
				/>

				{/* {restaurants.map((marker) => (
					<Marker 
						key={marker.id}
						position={{ lat: marker.lat, lng: marker.lng }}
						animation={2}
						onClick={() => {
							setSelected(marker)
						}}
					/>
				))} */}

				{userLocation && (
					<Marker 
						position={{ lat: userLocation.lat, lng: userLocation.lng }} />
					)}
				<></>

			</GoogleMap>
		</div>

		<div className="searchBoxWrapper p-2">
			<Sidebar onSubmit={handleOnSubmit} setOpen={setOpen} myLocation={panToLocation} city={city} setCity={setCity} restaurants={restaurants} resetCity={resetCity} /> 
		</div>
	</>
) 
	: <></>
}

export default React.memo(Map)