import useStreamCollection from "./useStreamCollection"

//get the collection "restaurants"
const useGetAllRestaurants = () => {
	return useStreamCollection('restaurants')
}

export default useGetAllRestaurants