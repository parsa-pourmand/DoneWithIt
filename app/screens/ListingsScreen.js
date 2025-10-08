import {FlatList } from 'react-native'
import Screen from './Screen'
import CardComponent from '../components/CardComponent'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import colors from '../config/colors'

const listings = [
    {
        id:1,
        image:require('../assets/jacket.jpg'),
        title:"Red jacket for sale",
        subTitle:"$100"
    },
    {
        id:2,
        image:require("../assets/couch.jpg"),
        title:"Couch in great condition",
        subTitle:"$1000"
    }
]
export default function ListingsScreen() {
  return (
        <Screen style={{backgroundColor:colors.light}}>
            <FlatList 
                data={listings}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <CardComponent image={item.image} title={item.title} subTitle={item.subTitle}/>}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
  )
}