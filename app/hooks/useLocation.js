import * as Location from 'expo-location'
import { useEffect, useState } from 'react';

export default useLocation = () => {
    const [location, setLocation] = useState()
    
    const get_location = async () => {
        try{
            const {granted} = await Location.requestForegroundPermissionsAsync()

            if (!granted) return

            const {coords: {latitude, longitude}} = await Location.getLastKnownPositionAsync()
            setLocation({latitude, longitude})
        }catch(error){
            console.log(error)
        }
    }
    
    useEffect(() => {get_location()}, [])

    return location
}