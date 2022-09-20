import Image from 'react-bootstrap/Image'
import map from '../assets/images/map.png'
import SearchBar from '../components/SearchBar'

const HomePage = () => {

	return (
		<>
			<div className="image-bg">
				<Image src={map} fluid />
			</div> {/* placeholder for real map */}

			<SearchBar />
		</>
	)
}

export default HomePage
