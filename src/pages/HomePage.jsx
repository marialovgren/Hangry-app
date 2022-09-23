import { useEffect } from 'react'
import Map from '../components/Map'
import { useAuthContext } from "../contexts/AuthContext"

const HomePage = () => {
	const { opacityBg, setOpacityBg } = useAuthContext()


	return (
		<div className="map-bg">
			<Map />
		</div> 	
	)
}

export default HomePage
