import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useState } from 'react'
import SearchBar from './SearchBar'

const containerStyle = {
  	width: '100vw',
  	height: '100vh'
}

const center = {
  	lat: -3.745,
  	lng: -38.523
}

const libraries = ['places']

function Map() {
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
	<Marker position={center} />
	<SearchBar />
	<></>

    </GoogleMap>
) 
	: <></>
}

export default React.memo(Map)