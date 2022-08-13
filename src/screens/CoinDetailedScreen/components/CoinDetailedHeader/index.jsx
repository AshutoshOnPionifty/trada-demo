import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { useWatchlist } from '../../../../Contexts/WatchlistContext';

const CoinDetailedHeader = (props) => {
    const { coinId, image, symbol, marketCapRank } = props;
    const navigation = useNavigation();
    const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } = useWatchlist();

       const checkIfCoinIsWatchlisted = () => 
       watchlistCoinIds.some((coinIdValue) => coinIdValue === coinId);            
       
       const handleWatchlistCoin = () => {
        if (checkIfCoinIsWatchlisted()) {
          return removeWatchlistCoinId(coinId)
        }
        return storeWatchlistCoinId(coinId)
       };

    return (
        <View style={styles.headerContainer}>            
            <Ionicons name="chevron-back-sharp" size={30} color="white" onPress={() => navigation.goBack() } />
            <View style={styles.tickerContainer} >
              <Image source={{ uri: image }} style={{ width: 25, height: 25 }}/>
              <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
              <View style={styles.rankContainer}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>#{marketCapRank}</Text>
              </View>
            </View>
            {/* <EvilIcons name="user" size={30} color="white" /> */}
            <FontAwesome 
              name={checkIfCoinIsWatchlisted() ? "star" : "star-o" } 
              size={25} 
              color={checkIfCoinIsWatchlisted() ? "#FFBF00" : "white" } 
              onPress={handleWatchlistCoin}
            />                                

            {/* buy and sell button */}
            <View style={{ position: 'absolute', backgroundColor: "#262626" ,flexDirection: 'row', marginTop: '300%', width: '100%', padding: 10, borderRadius: 10,}}>
              <View style={{  flexDirection: 'row', width: '100%', justifyContent: "space-around", }}>
                <View style={{ width: '30%', }}>
                 <Button
                   title="Buy"
                   
                 />   
                </View>                              
                <View style={{ width: '30%' }}>
                 <Button
                   title="Sell"
                   color="#ED5555"

                 />
                 </View>                 
              </View>
            </View>

            <View style={{position:'absolute', marginTop: '190%', }}>
            <Image style={{ width: 350, height: 250 }} source={require("../../../../../assets/chart.png")} />
            </View>

        </View>
        
    );
};

export default CoinDetailedHeader;