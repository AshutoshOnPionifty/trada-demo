import React from "react";
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";


const OrderHistory = () => {
  const navigation = useNavigation();
    return (
        <Pressable>
        {/* <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop: 40}}>Order Book</Text> */}

        <View style={styles.orderList}>
        
            {/* 1 list */}
         <Pressable>
         <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >40505.75</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>41020.22</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>20</Text>
          </View>          
         </View>
         </Pressable>

            {/* 2 list */}
            <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >250.45</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>350</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>200</Text>
          </View>
            </View>

            {/* 3 list */}
            <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >4270.07</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>4464.9</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>250</Text>
          </View>
         </View>

         {/* 4 list */}
         <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >405.75</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>410.22</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>50</Text>
          </View>
         </View>

         {/* 5 list */}
         <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >00045.75</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>00080.42</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>2000</Text>
          </View>
         </View>

         {/* 6 list */}
         <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png?1640133422'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >557.86</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>540.00</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>150</Text>
          </View>
         </View>   

          {/* 7 list */}
         <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/44/thumb/xrp-symbol-white-128.png?1605778731'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >557.86</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>540.00</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>150</Text>
          </View>
         </View> 

         {/* 8 list */}
         <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >557.86</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>540.00</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>150</Text>
          </View>
         </View>

         {/* 9 list */}
         <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >557.86</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>540.00</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>150</Text>
          </View>
         </View>

         {/* 10 list */}
         <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >557.86</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>540.00</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>150</Text>
          </View>
         </View>

         {/* 11 list */}
         <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >557.86</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>540.00</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>150</Text>
          </View>
         </View>

         {/* 12 list */}
         <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >557.86</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>540.00</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>150</Text>
          </View>
         </View>
         
         {/* 13 list */}
         <View style={styles.orderListContainer}>
          <Image source={{uri: 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png?1640133422'}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
          <View style={{marginLeft: 30}}>
            <Text style={styles.title} >Buy</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text} >557.86</Text>              
            </View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Sell</Text>        
            <Text style={styles.text}>540.00</Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.title}>Qty</Text>        
            <Text style={styles.text}>150</Text>
          </View>
         </View>
         
          <StatusBar style="light"/>
          
        </View>
        </Pressable>
        
    );
};

const styles= StyleSheet.create ({
    orderList: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 50,        
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        marginRight: 5
    },
    orderListContainer : {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'grey',
        padding: 15,        
    },
});


export default OrderHistory;