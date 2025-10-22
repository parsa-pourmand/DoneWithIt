import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import * as Progress from 'react-native-progress'
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

function UploadScreen({visible = false, progress = 0, onDone}) {
  return (
    <Modal visible={visible} >
        <View style={styles.container}>
            {progress<1 ? <Progress.Bar progress={progress} color={colors.primary} width={200}/> : 
                <LottieView autoPlay onAnimationFinish={onDone} loop={false} source={require('../assets/animations/done.json')} style={styles.animation}/>
            }
            
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    animation:{
        width:150
    },
    container: {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
});

export default UploadScreen;