import useStreamCollection from "./useStreamCollection"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase'

const useGetQueryRestaurants = () => {

    const collectionRef = collection(db, 'restaurants')

    const queryRef = query(collectionRef, where('restaurantCity', '==', true))

    const querySnapshot = await getDocs(queryRef)
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data())
    })



	return useStreamCollection('restaurants')
}

export default useGetQueryRestaurants