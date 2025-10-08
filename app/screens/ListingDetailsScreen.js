import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import colors from '../config/colors'
import ListItem from '../components/lists/ListItem'

export default function ListingDetailsScreen() {
  return (
    <View style = {styles.container}>
    
        <Image source = {require("../assets/jacket.jpg")}  style ={styles.image}/>

        <View style={styles.details}>
            <Text style={styles.info}>Red Jacket For Sale!</Text>
            <Text style={styles.price}>$100</Text>

            <View style={styles.listItem}>
                <ListItem image={require('../assets/mosh.jpg')} title="Mosh Hamedani" subTitle="5 Listings"/>
            </View>
            
        </View>
    </View>
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
        marginVertical:20
    }
   
    
})