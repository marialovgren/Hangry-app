import React from "react"
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


const GetMyLocation = ({ myLocation }) => {
	return (
		<Button
			type="submit" size="sm" variant="light"
			className="locateme-position border"
			onClick={() => {
				navigator.geolocation.getCurrentPosition((position) => {
					myLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					})
				})
			}}
		>
        	<FontAwesomeIcon icon={faLocationArrow} />
		</Button>
		
	)
}

export default GetMyLocation