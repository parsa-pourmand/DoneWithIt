import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from './Icon'

export default function CategoryPickerItem(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
    
          <View style={styles.container}>
    
            <Icon name={props.icon} backgroundColor={props.iconBackground} size={70}/>
            <Text style={styles.text}>{props.label}</Text>
    
          </View> 
    
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
      alignItems:'center',
      paddingVertical:15,
      paddingHorizontal:30,
      aspectRatio:1,
    },
    text:{
        marginTop:5,
        padding:5,
        textAlign:"center"
    }
})