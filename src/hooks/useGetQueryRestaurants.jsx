import useStreamCollection from "./useStreamCollection"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'

const useGetQueryRestaurants = (queryCity) => {

    const collectionRef = collection(db, 'restaurants')

    const queryKey = ['restaurants', queryCity]

    let queryRef 

    if (queryCity.city) {
        queryRef = query(collectionRef, where('city', '==', queryCity.city))
    }

    const restaurantQuery = useFirestoreQueryData(queryKey, queryRef, {
        idField: 'id',
    })

    return restaurantQuery
}

export default useGetQueryRestaurants


