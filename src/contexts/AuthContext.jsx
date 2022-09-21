import { createContext, useContext, useState } from 'react'
import { auth, db } from '../firebase'
import { signInWithEmailAndPassword, signOut, } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(null)
	// const [ loading, setLoading ] = useState(true)

	const login = async (email, password) => {

		// Skapa user collection
		const docRef = doc(db, 'admin', auth.currentUser.uid)

		await setDoc(docRef, {
			email,
			photoURL: auth.currentUser.photoURL,
		})
		await signInWithEmailAndPassword(auth, email, password)
	}

	const logout = () => {
		return signOut(auth)
	}

	const contextValues = {
		currentUser,
		login,
		logout,
	}
	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	)
}

export {
	AuthContextProvider as default,
	useAuthContext,
}