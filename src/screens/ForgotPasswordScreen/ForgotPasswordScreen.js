import React, {useState} from "react";
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Logo from '../../../assets/trada.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const ForgotPasswordScreen = () => {    
    const [username, setUsername] = useState('');

    const onSendPressed = () => {
        console.warn("onSendPressed");
    };

    const onSignInPress = () => {
        console.warn("onSignInPress");
    };

    const onResendPress = () => {
        console.warn("onResendPress");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            {/* <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" /> */}
            <Text style={styles.title}>
                Reset your password
            </Text>

            <CustomInput 
                placeholder="Username"
                value={username}
                setValue={setUsername}                     
            />           

            <CustomButton text="Send" onPress={onSendPressed} />      

            <CustomButton 
                text="Resend code"
                onPress={onResendPress}
                type="SECONDARY"                     
            />

            <CustomButton 
                text="Back to Sign in"
                onPress={onSignInPress}
                type="TERTIARY"                     
            />

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
    logo: {
        width: '100%',
        maxWidth: 300,
        maxHeight: 150,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color: '#fff',
    },
});

export default ForgotPasswordScreen;

