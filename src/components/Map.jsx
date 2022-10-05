/** React **/
import React, { useCallback, useState, useRef, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { useSearchParams } from 'react-router-dom'

/** API-service **/
import mapAPI from '../services/mapAPI'

/** Hooks **/
import useGetAllRestaurants from '../hooks/useGetAllRestaurants'

/** Components **/
import Sidebar from './Sidebar'

const libraries = ['places'] 

const containerStyle = {
	width: '100vw',
	height: '100vh'
}

const Map = () => {

  	const { isLoaded } = useLoadScript({
		/* id: 'google-map-script', */ // behövs denns????
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
		libraries, 
	})

  	const [map, setMap] = useState(/** @type google.maps.Map */ (null))
	const [userPosition, setUserPosition] = useState({lat: 55.6050, lng: 13.0038})
	const { data: restaurants } = useGetAllRestaurants()  
	const { selectedRestaurant, setSelectedRestaurant } = useState(null)
	const [searchParams, setSeachParams] = useSearchParams()

	//const [ userLocation, setUserLocation ] = useState("")
	/* const [city, setCity] = useState(null)
	const [queryCity, setQueryCity] = useState({
        city,
    }) */
	
	/** Moves map to the restaurant that user clicked on **/
	const handleRestaurantItemClick = (place) => {
		setSelectedRestaurant(place)
		map.panTo(place.coords)
	}

	/** Handles what will happen when user have submitted searchform **/
	const handleOnSubmit = async (address) => {
		if (!address) {
			return
		}
		
		// get the coordinates for the place that user searched for
		const coordinates = await mapAPI.getLatAndLong(address) 
		map.panTo(coordinates) // moves map view to the chosen place
		console.log("coordinates to the place you searched for", coordinates)
		setUserPosition(coordinates) // sets userPosition to same value as the coordinates from searchfield

		setSeachParams({city: await mapAPI.getSearchedCity(coordinates)})		
	}

	useEffect(() => {

		const getUserPosition = async () => {
			if (searchParams.get('city')) {
				setUserPosition(await mapAPI.getLatAndLong(searchParams.get('city')))
			} else if('geolocation' in navigator) {
				navigator.geolocation.getCurrentPosition((position) => {
					setUserPosition({ lat: position.coords.latitude, lng: position.coords.longitude })
				})
			}
		}
		getUserPosition()
		
    }, [searchParams]) 


	//const mapRef = useRef()

	/* const onMapLoad = useCallback((map) => {
		mapRef.current = map
	}, []) */

	/* const panToLocation = useCallback(({ lat, lng }) => {
		setUserLocation({ lat, lng })
		mapRef.current.panTo({ lat, lng })
		mapRef.current.setZoom(15)
		console.log("latitud:", lat + "longitud:", lng)
	}, []) */

	/* const onUnmount = React.useCallback(function callback(map) {
		setMap(null)
	}, []) */

	return isLoaded ? (
		<>
			<div className="mapBox">
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={userPosition}
					zoom={15}
					onLoad={map => setMap(map)}
					/* onUnmount={onUnmount} */
					options={{
						mapTypeId: 'roadmap', //set default page to show Roadmap. It does already but this is our setting
						mapTypeControl:false, //removes Sattelite and Terrain Option Buttons
					}}
				>
					{ /* Child components, such as markers, info windows, etc. */ }

					<Marker 
						position={userPosition}
						// onClick={handleUserMarkerOnClick}
					/>

					{restaurants && restaurants.map((place, index) => (
						<Marker 
							key={index}
							position={place.coordinates}
						/>
					))}

					{/* {userLocation && (
						<Marker 
							position={{ lat: userLocation.lat, lng: userLocation.lng }} />
						)} */}
					<></>

				</GoogleMap>
			</div>

			<Sidebar onSubmit={handleOnSubmit} /* myLocation={panToLocation} */ /* city={city} setCity={setCity}  */restaurants={restaurants} />

		</>
	) 
		: <></>
}

export default React.memo(Map)