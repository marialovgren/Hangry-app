import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useQuery } from 'react-query'
import SearchBar from './SearchBar'
import mapAPI from '../services/mapAPI'

const containerStyle = {
  	width: '100vw',
  	height: '100vh'
}

const center = {
  	lat: 55.6050,
  	lng: 13.0038
}

const libraries = ['places'] 

const Map = () => {
	const { data } = useQuery(['places'], mapAPI.getLatAndLong)

  	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
		libraries, 
	})

  	const [map, setMap] = useState(/** @type google.maps.Map */ (null))
	

	/*const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map)
	}, [])
	*/

	const handelOnSubmit = async (address) => {
		if (!address) {
			return
		}
		const newCoords = await data 
		console.log("newCoords", newCoords)
	}

  	const onUnmount = React.useCallback(function callback(map) {
    	setMap(null)
  	}, [])

  return isLoaded ? (
	<GoogleMap
		mapContainerStyle={containerStyle}
		center={center}
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
			position={center}
		/>
		
		<SearchBar onSubmit={handelOnSubmit }/>
		<></>

	</GoogleMap>
) 
	: <></>
}

export default React.memo(Map)