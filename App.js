import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import MainNav from './app/navigation/MainNav';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage'
import * as SplashScreen from 'expo-splash-screen';
import { navigationRef } from './app/navigation/rootNavigation';
import * as Notifications from 'expo-notifications';
SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,      
    shouldPlaySound: true,     
    shouldSetBadge: false,  
  }),
});

export default function App() {

  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreToken = async () => {
      const user = await authStorage.getUser();
      if (user) setUser(user);
      setIsReady(true);
      SplashScreen.hideAsync();
  };
  useEffect(() => {
    restoreToken();
  }, []);

  if(!isReady){
    return null
  }

  return (
    <AuthContext.Provider value = {{user, setUser}}>
      <GestureHandlerRootView>
        <OfflineNotice/>
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      
          {user ? <MainNav/> : <AuthNavigator/>}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}