import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const HelpScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.text}>FAQ  goes here</Text>
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

export default HelpScreen;