import { createContext, useContext } from 'react'

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = () => {

    return (
        <div>
            
        </div>
    )
}

export {
	AuthContextProvider as default,
	useAuthContext,
}