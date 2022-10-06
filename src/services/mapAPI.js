import axios from 'axios'

axios.defaults.baseURL = 'https://maps.googleapis.com/maps/api'

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

//GET coordinates from an address
const getLatAndLong = async (address) => {//paramter is address {string} 
    //GET data about address from GeoCode API
    const results = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleMapsApiKey}`)
    //GET coordinates from first result in array from the gGeoCode API
    const coordinates = results.data?.results[0]?.geometry?.location
    //const coordinates = results.data.results[0].geometry.location // BEHÖVER VI ? ELLER KAN VI ANVÄNDA DENNA ISTÄLLET?
    //returns object with coordinate values
    return coordinates
}

// Get towns name adress
const getSearchedCity = async (coords) => {
	const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${googleMapsApiKey}`)

	const cityInfoArr = res.data.results[0].address_components.filter((component) => {
		return component.types.includes('locality') || component.types.includes('postal_town')
	})

	return cityInfoArr[0].long_name
}


const exports = {
    getLatAndLong, 
    getSearchedCity,
}
export default exports