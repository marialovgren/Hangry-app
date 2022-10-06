/** React **/
import React, { useCallback, useState, useRef, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoBox } from '@react-google-maps/api'
import { useQuery } from 'react-query' 
import { useSearchParams } from 'react-router-dom'
/** API-service **/
import mapAPI from '../services/mapAPI'
/** Hooks **/
import useGetQueryRestaurants from '../hooks/useGetQueryRestaurants'
/** Components **/
import Sidebar from './Sidebar'
import FoodInfoBox from './FoodInfoBox'

const containerStyle = {
  	width: '100vw',
  	height: '100vh'
}

const libraries = ['places'] 


const Map = () => {
	const { isLoaded } = useLoadScript({
		/* id: 'google-map-script', */ // behövs denns????
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
		libraries, 
	})
	const [map, setMap] = useState(/** @type google.maps.Map */ (null))
	const [userPosition, setUserPosition] = useState({lat: 55.6050, lng: 13.0038}) // Kartan visas inte utan koordinaterna
	const { selectedRestaurant, setSelectedRestaurant } = useState(null)
	const [searchParams, setSeachParams] = useSearchParams()
	const [currentSelectedRestaurant, setCurrentSelectedRestaurant] = useState(null)
	const [ querys, setQuerys ] = useState()

	const {data: restaurants} = useGetQueryRestaurants(querys)

	const handleChangeRestaurants = (newQuerys) => {
		setQuerys(newQuerys)
	}

	const handleUserMarkerOnClick = () => {
		map.panTo(userPosition)
	}

	/** Moves map to the restaurant that user clicked on **/
	const handleRestaurantItemClick = (city) => {
		setSelectedRestaurant(city)
		map.panTo(city.coords)
	}

	const handleCloseInfoBox = () => {
		setCurrentSelectedRestaurant(null)
	}

	
	 /** Handles what will happen when user have submitted searchform **/
	 const handleMapOnSubmit = async (address) => {
        if (!address) {
            return
        }
        // get the coordinates for the place that user searched for
        const coordinates = await mapAPI.getLatAndLong(address) 
        map.panTo(coordinates) // moves map view to the chosen place
        console.log("coordinates to the place you searched for", coordinates)
        setUserPosition(coordinates) // sets userPosition to same value as the coordinates from searchfield

		//Geocodes coordinates to an address
        setSeachParams({city: await mapAPI.getSearchedCity(coordinates)}
		)    
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
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

  return isLoaded ? (
	<>
		<div className="mapBox">
			<GoogleMap
                mapContainerStyle={containerStyle}
                center={userPosition}
                zoom={15}
                onLoad={map => setMap(map)}
                onUnmount={onUnmount}
                options={{
                    mapTypeId: 'roadmap', //set default page to show Roadmap. It does already but this is our setting
                    mapTypeControl:false, //removes Sattelite and Terrain Option Buttons
                }}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <Marker 
                    position={userPosition}
                    onClick={handleUserMarkerOnClick}
                />

			{restaurants && restaurants.map((restaurant, index) => (
				<Marker 
					key={index}
					position={restaurant.coordinates}
					onClick={() => {
						handleRestaurantItemClick(restaurant)
					}}
				/>
			))}

			{currentSelectedRestaurant && (
				<InfoBox
				options={{ 
					closeBoxURL: '', 
					enableEventPropagation: true 
				}}
				position={{
					lat: currentSelectedRestaurant.coords.lat,
					lng: currentSelectedRestaurant.coords.lng 
				}}
			>
				<FoodInfoBox 
					userPosition={userPosition}
					restaurant={currentSelectedRestaurant}
					onClose={handleCloseInfoBox}
				/>
			</InfoBox>
			)}
			<></>

			</GoogleMap>
		</div>

		<Sidebar handleMapOnSubmit={handleMapOnSubmit} userPosition={userPosition} restaurants={restaurants} onRestaurantItemClick={handleRestaurantItemClick} handleChangeRestaurants={handleChangeRestaurants} />

	</>
) 
	: <></>

}
export default React.memo(Map)