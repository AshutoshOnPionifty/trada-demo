import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ( {onPress, text, type = "PRIMARY", bgColor, fgColor} ) => {
    return (
        <Pressable 
            onPress={onPress}
            style={[
                styles.container, 
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {},
            ]}>
            <Text 
              style={[
                styles.text, 
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {},
                ]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {        
        width: '100%',
        pading: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
        height: 35
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },
    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2,
    },
    container_TERTIARY: {
        
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 6
    },
    text_SECONDARY: {
        color: '#3B71F3',
    },
    text_TERTIARY: {
        color: 'gray'
    },
});

export default CustomButton;