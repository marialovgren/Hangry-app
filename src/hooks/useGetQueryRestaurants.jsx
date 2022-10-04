import useStreamCollection from "./useStreamCollection"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'

const useGetQueryRestaurants = () => {

    const collectionRef = collection(db, 'restaurants')

    const queryRef = query(collectionRef)

    const restaurantQuery = useFirestoreQueryData(queryRef, {
        idField: 'id',
    })

    return restaurantQuery
}

export default useGetQueryRestaurants


