import React, {useState} from "react";
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Logo from '../../../assets/trada.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        console.warn("onRegisterPressed");
    };

    const onSignInPress = () => {
        console.warn("onSignInPress");
    };

    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");
    };

    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            {/* <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" /> */}
            <Text style={styles.title}>
                Create an account
            </Text>

            <CustomInput 
                placeholder="Username"
                value={username}
                setValue={setUsername}                     
            />

            <CustomInput 
                placeholder="Email"
                value={email}
                setValue={setEmail}                     
            />

            <CustomInput 
                placeholder="Password"
                value={password}
                setValue={setPassword}  
                secureTextEntry 
            />

            <CustomInput 
                placeholder="Repeat Password"
                value={passwordRepeat}
                setValue={setPasswordRepeat}  
                secureTextEntry 
            />

            <CustomButton text="Register" onPress={onRegisterPressed} />

            <Text style={styles.text}>
                By registering, you confirm that you accept our{' '} 
                <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use
                </Text> and {' '} 
                <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy
                </Text>
            </Text>

           <SocialSignInButtons/>

            <CustomButton 
                text="Have an account? Sign in"
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

export default SignUpScreen;

