import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};


function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}

      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center} />

        {/*NOT WOKRING
        to go back to the marker in the center when clicking the icon-button
        <Button>KNAPPEN SKA SYNAS OCH KLICKAR DU PÅ DEN KMR DU TILL CENTER MARKER
          onClick={() => {
            map.panTo(center)
          }
        }</Button>
        */}

        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)