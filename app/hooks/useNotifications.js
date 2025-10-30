import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { useEffect } from 'react';
import expoPushTokens from '../api/expoPushTokens';
import { Alert, Platform } from 'react-native';

export default function useNotifications (notificationListener) {
    const registerForPushNotifications = async () => {
    try {
      if (!Device.isDevice) {
        Alert.alert('Must use physical device for push notifications');
        return;
      }

      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert('Failed to get push notification permissions');
        return;
      }

      const tokenData = await Notifications.getExpoPushTokenAsync();
      expoPushTokens.register(tokenData)

      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    } catch (error) {
      console.log('Notification registration error:', error);
    }
  };

  useEffect(() => {
    registerForPushNotifications();
    if(notificationListener){
        Notifications.addNotificationReceivedListener(notificationListener)
    } 
  }, []);
}

