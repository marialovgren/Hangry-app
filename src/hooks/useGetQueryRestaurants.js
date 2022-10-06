import { 
        collection, 
        query, 
        where, 
        orderBy } from "firebase/firestore";
import { db } from '../firebase'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'

const useGetQueryRestaurants = (querys) => {

    console.log("querys" , querys)
   
    //get rererence of the collection from data base (Firestore)
    const collectionRef = collection(db, 'restaurants')

    const queryKey = ['restaurants', querys]

    //initializes queryRef
    let queryRef

        //if user didnt filter on neither type nor offer (no offer options boxes yet in form..)
        // if (querys.type === 'no-filter' && querys.offer === 'no-filter') {
			//Gets all wuerys in choosen city
			if (querys) {
				//if user didnt filter on neither type nor offer
				//if (querys.type === 'no-filter' && querys.offer === 'no-filter') {
					 //User searched for/used position of City only. Show all restauarnts in choosen city
					 console.log('querys.nameOrder',querys.nameOrder)
					 queryRef = query(collectionRef, where('restaurantCity', '==', querys.city), orderBy('restaurantName', querys.nameOrder))
				//}
			}
    

    const restaurantQuery = useFirestoreQueryData(queryKey, queryRef, {
        idField: 'id',
    })

    return restaurantQuery
}

export default useGetQueryRestaurants


