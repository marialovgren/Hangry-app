import { createContext, useContext, useState } from 'react'
import { auth, storage, db } from '../firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(null)
	// const [ loading, setLoading ] = useState(true)

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
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