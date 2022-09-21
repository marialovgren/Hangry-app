import Image from 'react-bootstrap/Image'
import map from '../assets/images/map.png'
import SearchBar from '../components/SearchBar'
import Map from '../components/Map'

const HomePage = () => {

	return (
		<> 
		{/*
			<div className="image-bg">
				<Image src={map} fluid />
			</div> {/* placeholder for real map */} {/*
		*/}

			<SearchBar />
			<Map />
		</>
	)
}

export default HomePage
