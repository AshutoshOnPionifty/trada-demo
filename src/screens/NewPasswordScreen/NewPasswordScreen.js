import React, {useState} from "react";
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Logo from '../../../assets/trada.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const NewPasswordScreen = () => {    
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onSubmitPressed = () => {
        console.warn("onSubmitPressed");
    };

    const onSignInPress = () => {
        console.warn("onSignInPress");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            {/* <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" /> */}
            <Text style={styles.title}>
                Reset your password
            </Text>

            <CustomInput 
                placeholder="Code"
                value={code}
                setValue={setCode}
            />  

            <CustomInput 
                placeholder="Enter your new password"
                value={newPassword}
                setValue={setNewPassword}
            />         

            <CustomButton text="Submit" onPress={onSubmitPressed} /> 
                        
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

export default NewPasswordScreen;

