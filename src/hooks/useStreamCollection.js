import { useEffect, useState } from 'react'
import {
	collection,
	onSnapshot,
	query
} from 'firebase/firestore'
import { db } from '../firebase'

const useStreamCollection = (col, ...queryConstraints) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const colRef = collection(db, col)
		const queryRef = query(colRef, ...queryConstraints)

		const unsubscribe = onSnapshot(queryRef, (snapshot) => {
			const docs = snapshot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data(),
				}
			})

			setData(docs)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	return {
		data,
		loading,
	}
}

export default useStreamCollection