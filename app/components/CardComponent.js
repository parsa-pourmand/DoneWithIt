import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

export default function CardComponent(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
    <View style = {styles.card}>
      <Image source ={props.image} style={styles.image} resizeMode='cover'/>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
        {props.subTitle && <Text style={styles.subtitle} numberOfLines={2}>{props.subTitle}</Text>}
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card:{
        width:"90%",
        backgroundColor:"#fff",
        borderRadius:30,
        overflow:"hidden",
        alignSelf:"center",
        marginVertical:10
    },
    image:{
        width:"100%",
        height:200,

    },
    textContainer:{
        padding:15
    },
    title:{
        fontWeight: "600",
        marginBottom: 5,
        fontSize:16
    },
    subtitle:{
        color:"#7cb387ff",
    }
})