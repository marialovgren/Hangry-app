import useStreamCollection from "./useStreamCollection"

const useGetAllUsers = () => {
	return useStreamCollection('admin')
}

export default useGetAllUsers