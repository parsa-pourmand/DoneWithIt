import { View, Text, ImageBackground, Image, StyleSheet, Alert } from 'react-native'
import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
    <ImageBackground style={styles.background} source={require("../assets/background.jpeg")} blurRadius={10}>
        <View style={styles.logoContainer}>
            <Image source={require("../assets/logo.png")} style={styles.logo}/>
            <Text style={styles.tagline}>Sell What You Don't Need!</Text>
        </View>
        
        <View style={styles.register}>
            <ButtonComponent title={"Register"} onPress={()=>Alert.alert('Pressed')} color ={"primary"}/>
        </View>
        <View style={styles.login}> 
            <ButtonComponent title={"Login"} onPress={()=>Alert.alert('Pressed')} color={"secondary"}/>
        </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:'center',
    },
    logoContainer:{
        position:'absolute',
        top:90,
        alignItems:'center',
    },
    logo:{
        width:100,
        height:130,
        paddingVertical:20
    },
    login:{
        width:"100%",
        bottom:20,
        padding:10
    },
    register:{
        width:"100%",
        bottom:40,
        padding:10

    },
    tagline:{
        fontSize:25,
        fontWeight:600
    }

})