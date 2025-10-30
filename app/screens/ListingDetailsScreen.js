import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native'
import colors from '../config/colors'
import ListItem from '../components/lists/ListItem'
import { Image } from 'expo-image'
import ContactSellerForm from '../components/forms/ContactSellerForm'

export default function ListingDetailsScreen({route}) {

    const item = route.params
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={{ flex: 1 }}>
    <View style = {styles.container}>
        
        <Image source = {{uri:item.images[0].url}}  placeholder={{uri: item.images[0].thumbnailUrl}} transition={300} style ={styles.image}/>

        <View style={styles.details}>
            <Text style={styles.info}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>

            <View style={styles.listItem}>
                <ListItem image={require('../assets/mosh.jpg')} title="Mosh Hamedani" subTitle="5 Listings"/>
            </View>
            
        </View>
        <ContactSellerForm listing={item}/>
    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:"white"
    },
    image:{
       width:"100%",
       height:300
    },
    details:{
        padding:15
    },
    info:{
        marginBottom:10,
        fontSize:25,
        fontWeight:"bold"
    },
    price:{
        marginBottom:20,
        fontSize:20,
        color:colors.secondary,
        fontWeight:500
    },
    listItem:{
        marginVertical:7
    },
    messageContainer:{
        padding:15,
        marginVertical:15,
    }
   
    
})