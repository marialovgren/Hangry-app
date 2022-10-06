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

        if (querys) {
            //if user didnt filter on neither type nor offer
            //if (querys.type === 'no-filter' && querys.offer === 'no-filter') {
                //User searched for/used position of City only. Show all restauarnts in choosen city
                
                console.log('querys.nameOrder',querys.nameOrder)
                queryRef = query(collectionRef, where('restaurantCity', '==', querys.city), orderBy('restaurantName', querys.nameOrder))
        }
	


    const restaurantQuery = useFirestoreQueryData(queryKey, queryRef, {
        idField: 'id',
    })

    return restaurantQuery
}

export default useGetQueryRestaurants




                //DETTA ÄR DEN ENDA SOM BUGGIGT SORTERAR PÅ SAKER (FÖRUTOM ASC/DESC)
/*  			if (querys) {
                console.log('querys.nameOrder',querys.nameOrder, "Querys is " + querys, "Query.city is " + querys.city, "Query.offer is " + querys.offer)

                queryRef = query(collectionRef, where('restaurantCity', '==', querys.city), 
                where('restaurantOffer', '==', querys.offer || 'restaurantOffer' == 'no-filter'), 
                where('restaurantType', '==', querys.type || 'restaurantOffer' == 'no-filter'), 
                orderBy('restaurantName', querys.nameOrder) ) 
             } */