import { View, StyleSheet, FlatList } from 'react-native'
import Screen from './Screen'
import colors from '../config/colors'
import ListItem from '../components/lists/ListItem'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/lists/ListItemSeparator'

const items = [
    {
        id:1,
        title:"My Listing",
        icon: <Icon name="format-list-bulleted" iconColor={colors.white} backgroundColor={colors.primary}/>
    },
    {
        id:2,
        title:"My Messages",
        icon: <Icon name="email" iconColor={colors.white} backgroundColor={colors.secondary}/>
    },
]

export default function MyAccountScreen() {
  return (
        <Screen style={styles.screen}>
            <View style={styles.profileContainer}>
                <ListItem image={require("../assets/mosh.jpg")} title="Mosh Hamedani" subTitle="programmingwithmosh@gmail.com"/>
            </View>

            <View style={styles.listContainer}>
                <FlatList
                    data={items}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={({item}) =><ListItem title={item.title} IconComponent={item.icon}/>}
                    ItemSeparatorComponent={ListItemSeparator} 
                />
            </View>

            <View style={styles.logout}>
                <ListItem title="Log Out" IconComponent={<Icon name="logout" iconColor={colors.white} backgroundColor="#ffe66d"/>}/>
            </View>

            
        </Screen>
  )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.light
    },
    profileContainer:{
        width:"100%",
        marginVertical:20,
        padding:5,
        backgroundColor:colors.white
    },
    listContainer:{
        backgroundColor:colors.white,
        width:"100%",
        marginVertical:15,
    },
    logout:{
        backgroundColor:colors.white,
        width:"100%",
        height:70
    }
})