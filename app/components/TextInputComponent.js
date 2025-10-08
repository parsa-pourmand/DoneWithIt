import { View, Text, StyleSheet, TextInput, Platform } from 'react-native'
import Icon from './Icon'
import colors from '../config/colors'
import defaultStyle from '../config/style';

export default function TextInputComponent({icon, width='100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width: width}]}>
      {icon && <Icon name={icon} iconColor={colors.medium} backgroundColor={colors.light}/>}
      <TextInput style={defaultStyle.text} {...otherProps}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10,
        marginVertical:10,
        borderRadius:25,
        backgroundColor:defaultStyle.colors.light
    },
})