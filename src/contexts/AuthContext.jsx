import { createContext, useContext } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { auth, storage, db } from '../firebase'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}


const AuthContextProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(null)
	const [ loading, setLoading ] = useState(true)

	const signup = async (email, password, name, photo) => {
		await createUserWithEmailAndPassword(auth, email, password)

		await setDisplayNameAndPhoto(name, photo)

		await reloadUser()

		const docRef = doc(db, 'users', auth.currentUser.uid)
		await setDoc(docRef, {
			name,
			email,
			photoURL: auth.currentUser.photoURL,
			admin,
		})
	}

	const contextValues = {
		currentUser,
		signup,

	}
    return (
		<AuthContext.Provider value={contextValues}>
			{
				children}
		</AuthContext.Provider>
    )
}

export {
	AuthContextProvider as default,
	useAuthContext,
}