import React from "react"

const GetMyLocation = ({ myLocation }) => {
	return (
		<button
			className="locateme-position"
			onClick={() => {
				navigator.geolocation.getCurrentPosition((position) => {
					myLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					})
				})
			}}
		>
			Find current position
		</button>
	)
}

export default GetMyLocation