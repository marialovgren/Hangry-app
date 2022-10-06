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

/* // Get Citys name & adress
const getSearchedCity = async (lat, lng) => {
	const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleMapsApiKey}`)

    const address = res.data.results[0].address_components

    return address.find(i => i.types[0] === 'postal_town').long_name

} */


// Get Citys name & adress
const getSearchedCity = async (coordinates) => {
	const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${googleMapsApiKey}`)

	const cityInfoArr = res.data.results[0].address_components.filter((component) => {
		return component.types.includes('locality') || component.types.includes('postal_town')
	})

	return cityInfoArr[0].long_name
}

// Get directions
const getDirections = (origin, destination) => {
	return `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`
}

const exports = {
    getLatAndLong, 
    getSearchedCity,
	getDirections,
}

export default exports