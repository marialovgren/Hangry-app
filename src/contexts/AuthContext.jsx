import { createContext, useContext, useState, useEffect } from 'react'
import { auth, storage, db } from '../firebase'
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import BeatLoader from "react-spinners/BeatLoader"
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(null)
	const [userEmail, setUserEmail] = useState(null);
	const [ loading, setLoading ] = useState(false)

	const signup = async (email, password) => {
		await createUserWithEmailAndPassword(auth, email, password);

		await reloadUser();

		const docRef = doc(db, "users", auth.currentUser.uid);

		await setDoc(docRef, {
			email,
			admin: false,
		});
	};

	const login = (email, password) => {

		return signInWithEmailAndPassword(auth, email, password)
	}

	const logout = () => {
		return signOut(auth)
	}

	const [showTipsForm, setShowTipsForm] = useState(false)

	const reloadUser = async () => {
		await auth.currentUser.reload()
		setCurrentUser(auth.currentUser)
		setUserEmail(auth.currentUser.email)
		return true
	}

	const contextValues = {
		currentUser,
		login,
		logout,
		showTipsForm,
		setShowTipsForm,
		loading,
		setLoading,
		signup
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