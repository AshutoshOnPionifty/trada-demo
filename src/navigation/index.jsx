import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
import CoinDetailedScreen from '../screens/CoinDetailedScreen';
import BottomTabNavigator from './BottomTabNavigator';
import AddNewAssetScreen from '../screens/AddNewAssetScreen';
import OrderHistory from '../screens/OrderHistory';
import EditProfile from '../screens/EditProfile';
import TransactionsScreen from '../screens/TransactionsScreen';
import BankDetails from '../screens/BankDetails';
import HelpScreen from '../screens/HelpScreen';
import AboutUs from '../screens/AboutUs';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Root" >
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}} />

            <Stack.Screen name="CoinDetailedScreen" component={CoinDetailedScreen} options={{headerShown: false}} />
            
            <Stack.Screen name="AddNewAssetScreen" component={AddNewAssetScreen} options={{
                title: "Add New Asset",
                // headerStyle: {
                //     backgroundcolor: '#121212'
                // },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            
            <Stack.Screen name="OrderHistory" component={OrderHistory} options={{
                title: "Order History",
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />

            <Stack.Screen name="EditProfile" component={EditProfile} options={{
                title: "Edit Profile",
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />

            <Stack.Screen name="TransactionsScreen" component={TransactionsScreen} options={{
                title: "Transactions Screen",
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />

            <Stack.Screen name="BankDetails" component={BankDetails} options={{
                title: "Bank Details",
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            
            <Stack.Screen name="HelpScreen" component={HelpScreen} options={{
                title: "Help Screen",
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />

            <Stack.Screen name="AboutUs" component={AboutUs} options={{
                title: "About Us",
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />

        </Stack.Navigator>
    )
}

export default Navigation;

// code to hide header => screenOptions={{headerShown: false}}