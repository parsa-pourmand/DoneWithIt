import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

const tab = createBottomTabNavigator()

const MainNav = () => (
    <tab.Navigator screenOptions={{headerShown:false}}>
        <tab.Screen name="Feed" component={FeedNavigator} options={{tabBarIcon: ({color,size})=> <MaterialCommunityIcons name="home" size={size} color={color}/>}}/>
        <tab.Screen name="ListingEdit" component={ListingEditScreen} options={ ({navigation}) => ({ tabBarButton:()=> <NewListingButton onPress={()=> navigation.navigate("ListingEdit")}/>})}/>
        <tab.Screen name="Accounts" component={AccountNavigator} options={{tabBarIcon: ({color,size})=> <MaterialCommunityIcons name="account" size={size} color={color}/>}}/>
    </tab.Navigator>
)

export default MainNav