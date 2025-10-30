import * as Location from 'expo-location'
import { useEffect, useState } from 'react';
import logger from '../utility/logger';

const useLocation = () => {
    const [location, setLocation] = useState()
    
    const get_location = async () => {
        try{
            const {granted} = await Location.requestForegroundPermissionsAsync()

            if (!granted) return

            const {coords: {latitude, longitude}} = await Location.getLastKnownPositionAsync()
            setLocation({latitude, longitude})
        }catch(error){
            logger.log(error)
        }
    }
    
    useEffect(() => {get_location()}, [])

    return location
}

export default useLocation