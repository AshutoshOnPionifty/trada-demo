import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const TransactionsScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.text}>Transactions Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {        
        marginTop: 40,
        textAlign: 'center',
    },
    text: {
        color: '#fff'
    }
});

export default TransactionsScreen;