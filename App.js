
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
// import HomeScreen from './src/screens/HomeScreen';
// import CoinDetailedScreen from './src/screens/CoinDetailedScreen';
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from 'recoil';
import Navigation from "./src/navigation";
import WatchlistProvider from "./src/Contexts/WatchlistContext";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ConfirmEmailScreen from "./src/screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import NewPasswordScreen from "./src/screens/NewPasswordScreen";
import EditProfile from "./src/screens/EditProfile";
import axios from "axios";
import { getMarketData } from "./src/services/requests";

export default function App() {
 
  return (
    <NavigationContainer theme={{colors: {
      background: "#121212",
    },
    }} >
        <RecoilRoot>
          <WatchlistProvider>
             <View style={styles.container}>
               {/* <CoinDetailedScreen /> */}
               {/* <HomeScreen/> */}
               <Navigation />
               {/* <SignInScreen/> */}
               {/* <SignUpScreen/> */}
               {/* <ConfirmEmailScreen/> */}
               {/* <ForgotPasswordScreen/> */}
               {/* <NewPasswordScreen/> */}
               {/* <EditProfile/> */}
               <StatusBar style="light" />
             </View>
          </WatchlistProvider>
        </RecoilRoot>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop:50,    
  },
  
});