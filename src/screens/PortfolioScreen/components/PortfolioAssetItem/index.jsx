import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';


const PortfolioAssetsItem = ({assetItem}) => {
    const {
        currentPrice,
        image,
        name,
        priceBought,
        priceChangePercentage,
        quantityBought,
        ticker,
    } = assetItem;
    return (
        <View style={styles.coinContainer}>
            <Image source={{uri: ""}} style={{height: 30, width: 30}}/>
            <View>
                <Text style={styles.title}>Bitcoin</Text>
                <Text style={styles.ticker}>BTC</Text>
            </View>
            <View style={{ marginLeft: 'auto' }}>
                <Text style={styles.title}>$4000</Text>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign 
                        name={'caretup'} 
                        size={12}
                        color={'#16c784'}
                        style={{alignSelf: 'center', marginRight: 5  }} 
                    />
                    <Text style={{color: '#16c784', fontWeight: '600'}}>
                        1.2%
                    </Text>
                </View>
            </View>
            <View style={styles.quantityContainer}>
                <Text style={styles.title}>$80000</Text>
                <Text style={styles.ticker}>2 BTC</Text>
            </View>
        </View>
    )
};

export default PortfolioAssetsItem;