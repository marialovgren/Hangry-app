import axios from 'axios'

axios.defaults.baseURL = 'https://maps.googleapis.com/maps/api'
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY


//GET coordinates from an address

const getLatAndLong = async (address) => {//paramter is address {string} 

    //GET data about address from GeoCode API
    const results = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleMapsApiKey}`)
    
    //GET coordinates from first result in array from the gGeoCode API
    const coordinates = results.data?.results[0]?.geometry?.location

    //returns object with coordinate values
    return coordinates
}



//GET details

const getDetails = async (place) => {

    //GET details about a place from Javascript API
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place}&key=${googleMapsApiKey}`)
    
    //const details = 

    //return details;
}


//GET Places

const getPlaces = async () => {

    //GET from Places API
    const res = await axios.get(`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places&callback=initMap`)

    //const places = 

    //return places;
}




const exports = {
    getLatAndLong, 
    getDetails,
    getPlaces
}

export default exports