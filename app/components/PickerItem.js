import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from './Icon'

export default function PickerItem(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
  
      <Text style={styles.text}>{props.label}</Text>

    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    text:{
        padding:20,
    }
})