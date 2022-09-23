import { createContext, useContext, useState } from 'react'
import { auth, storage, db } from '../firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import BeatLoader from "react-spinners/BeatLoader"
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(null)
	const [ loading, setLoading ] = useState(false)

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

	const [showTipsForm, setShowTipsForm] = useState(false)

	const [ opacityBg, setOpacityBg] = useState(false)

	const contextValues = {
		currentUser,
		login,
		logout,
		showTipsForm,
		setShowTipsForm,
		loading,
		setLoading,
		setOpacityBg,
		opacityBg,
	}
    return (
		<AuthContext.Provider value={contextValues}>
			{loading ? (
				<div id="initial-loader">
					<BeatLoader color={"#888"} size={50} />
				</div>
			) : (
				children
			)}
		</AuthContext.Provider>
    )
}

export {
	AuthContextProvider as default,
	useAuthContext,
}