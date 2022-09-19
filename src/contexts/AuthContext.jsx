import { createContext, useContext } from 'react'

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = () => {

    return (
        <AuthContext.Provider>
            
        </AuthContext.Provider>
    )
}

export {
	AuthContextProvider as default,
	useAuthContext,
}