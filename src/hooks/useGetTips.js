import useStreamDocument from "./useStreamDocument"

const useGetTips = (id) => {
	return useStreamDocument('tips', id)
}

export default useGetTips