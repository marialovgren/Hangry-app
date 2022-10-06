import { 
        collection, 
        query, 
        where, 
        orderBy } from "firebase/firestore";
import { db } from '../firebase'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'

const useGetQueryRestaurants = (querys) => {

    
    console.log("nameOrder" , querys.nameOrder)
    //get rererence of the collection from data base (Firestore)
    const collectionRef = collection(db, 'restaurants')

    const queryKey = ['restaurants', querys]
    console.log("****querys" , querys)

    let queryRef 

    //if user didnt filter on neither type nor offer
    if (querys.type === 'no-filter') {
        //User searched for/used position of City only. Show all restauarnts in choosen city
        queryRef = query(collectionRef, where('restaurantCity', '==', querys.city), orderBy('restaurantName', querys.nameOrder))
    } else {
        queryRef = query(collectionRef, where('restaurantType', '==', querys.type), where('restaurantCity', '==', querys.city), orderBy('restaurantName', querys.nameOrder))
    }
  
    const restaurantQuery = useFirestoreQueryData(queryKey, queryRef, {
        idField: 'id',
    })

    return restaurantQuery
}

export default useGetQueryRestaurants


