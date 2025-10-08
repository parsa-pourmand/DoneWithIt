import {SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'

export default function Screen(props) {
  return (
    <SafeAreaView style={[styles.screen, props.style]}>
      <View style={[{flex:1}, props.style]}>
        {props.children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen:{
        padding: Constants.statusBarHeight,
        flex:1
    }
})