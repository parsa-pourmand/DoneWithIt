import { View, Image,StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ViewImageScreen() {
  return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color="white" />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} color="white" />
            </View>
            <Image resizeMode='contain' style = {styles.image} source={require('../assets/image.png')}/>
        </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
    },
    container:{
        backgroundColor:'black',
        flex:1
    },
    closeIcon:{
        position:'absolute',
        top:40,
        left:30,
    },
    deleteIcon:{
        position:'absolute',
        top:40,
        right:30,
    }
})