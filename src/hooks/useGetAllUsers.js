import useStreamCollection from "./useStreamCollection"

const useGetAllUsers = () => {
	return useStreamCollection('users')
}

export default useGetAllUsers