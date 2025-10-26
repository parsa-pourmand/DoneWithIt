
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

function ActivityIndicator({visible = false}) {
    if(!visible) return null

  return (
    <View style = {styles.container}>
    <LottieView
        autoPlay
        loop
        source={require('../assets/animations/TrailLoading.json')}
        style={{ width: 150, height: 150 }}
    />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    height:"100%",
    width:"100%",
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    zIndex:1,
    opacity:0.8
  }
})

export default ActivityIndicator;