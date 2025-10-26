import { useContext } from "react";
import AuthContext from "./context";
import authStorage from './storage'
import { jwtDecode } from 'jwt-decode'

export default useAuth = () => {
    const {user, setUser} = useContext(AuthContext)
    

    const logOut = () => {
        setUser(null)
        authStorage.removeToken()
    }

    const logIn = (jwtToken) => {
        const user = jwtDecode(jwtToken)
        setUser(user)
        authStorage.storeToken(jwtToken)
    }

    return {user, logOut, logIn}
}