import { createContext, useContext, useState, useEffect } from 'react'
import { auth, storage, db } from '../firebase'
import { 
			signInWithEmailAndPassword, 
			signOut, 
			createUserWithEmailAndPassword,
			onAuthStateChanged,
			updateProfile,
} from 'firebase/auth'
import BeatLoader from "react-spinners/BeatLoader"
import { doc, setDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState(null)
	const [ userEmail, setUserEmail ] = useState(null)
	const [ userPhotoUrl, setUserPhotoUrl ] = useState(null)
	const [ loading, setLoading ] = useState(true)

	const signup = async (email, password, photo) => {
		await createUserWithEmailAndPassword(auth, email, password)

		await setDisplayNameAndPhoto(photo)

		await reloadUser()

		const docRef = doc(db, "users", auth.currentUser.uid)

		await setDoc(docRef, {
			email,
			photoURL: auth.currentUser.photoURL,
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
	const [showRestaurantForm, setShowRestaurantForm] = useState(false)

	const reloadUser = async () => {
		await auth.currentUser.reload()
		setCurrentUser(auth.currentUser)
		setUserEmail(auth.currentUser.email)
		setUserPhotoUrl(auth.currentUser.photoURL)
		// setUserName(auth.currentUser.displayName)
		return true
	}

	const setDisplayNameAndPhoto = async (photo) => {
		let photoURL = auth.currentUser.photoURL

		if (photo) {
			const fileRef = ref(storage, `photos/${auth.currentUser.email}/${photo.name}`)

			const uploadResult = await uploadBytes(fileRef, photo)

			photoURL = await getDownloadURL(uploadResult.ref)

			console.log("Photo uploaded successfully, download url is:", photoURL)
		}

		return updateProfile(auth.currentUser, {
			photoURL,
		})
	}

	useEffect(() => {
		// listen for auth-state changes
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
			setUserEmail(user?.email)
			setUserPhotoUrl(user?.photoURL)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	const contextValues = {
		currentUser,
		login,
		logout,
		showTipsForm,
		setShowTipsForm,
		showRestaurantForm,
		setShowRestaurantForm,
		loading,
		setLoading,
		signup,
		userEmail,
		userPhotoUrl,
		setDisplayNameAndPhoto,
		reloadUser,
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