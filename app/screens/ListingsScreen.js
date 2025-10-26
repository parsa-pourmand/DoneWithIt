import {FlatList, Text } from 'react-native'
import Screen from './Screen'
import CardComponent from '../components/CardComponent'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import colors from '../config/colors'
import routes from '../navigation/routes'
import listingsApi from '../api/listings'
import { useEffect } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'


export default function ListingsScreen({navigation}) {

    const listings = useApi(listingsApi.getListings)

    
    useEffect(() => {listings.request()}, [])
    
    return (
        <>
        <ActivityIndicator visible={listings.loading}/>
        <Screen style={{backgroundColor:colors.light}}>
            {listings.error && <>
                <Text>Couldn't retrieve listings.</Text>
                <ButtonComponent title="Retry" onPress={listings.request} color='primary'/>
            </>}
            
            <FlatList 
                data={listings.data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <CardComponent imageUrl={item.images[0].url} title={item.title} subTitle={item.price} onPress={()=>navigation.navigate(routes.LISTING_DETAILS, item)} thumbnailUrl = {item.images[0].thumbnailUrl}/>}
                ItemSeparatorComponent={ListItemSeparator}
            />
            
        </Screen>
        </>
    )
}