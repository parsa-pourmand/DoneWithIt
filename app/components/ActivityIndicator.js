
import LottieView from 'lottie-react-native';

function ActivityIndicator({visible = false}) {
    if(!visible) return null

  return (
    <LottieView
        autoPlay
        loop
        source={require('../assets/animations/Trail loading.json')}
    />
  );
}


export default ActivityIndicator;