import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import CardComponent from './app/components/CardComponent';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyAccountScreen from './app/screens/MyAccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/screens/Screen';
import TextInputComponent from './app/components/TextInputComponent';
import PickerComponent from './app/components/PickerComponent';
import { useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import MainNav from './app/navigation/MainNav';
import OfflineNotice from './app/components/OfflineNotice';

export default function App() {
  const categories = [
    {label:"Furniture", value:1},
    {label:"Clothing", value:2},
    {label:"Cameras", value:3},
  ]

  const [category, setCategory] = useState()


  
  return (
    
    <GestureHandlerRootView>
      <OfflineNotice/>
      <NavigationContainer theme={navigationTheme}>
      
        <MainNav/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}