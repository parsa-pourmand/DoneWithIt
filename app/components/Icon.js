import { View, Text, StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Icon({name, size=40, backgroundColor="#000", iconColor="#fff", style}) {
  return (
    <View style={[{height:size, width:size, borderRadius:size/2, backgroundColor, justifyContent:'center', alignItems:'center'}, style]}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size*0.5}/>
    </View>
  )
}