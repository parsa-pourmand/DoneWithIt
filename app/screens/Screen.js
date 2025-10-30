import {  StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
        flex:1
    }
})