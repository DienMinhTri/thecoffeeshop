import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { appStyle, windowHeight, windowWidth } from '../../constants/AppStyle'
import FastImage from 'react-native-fast-image'
import { COLOR, ICON } from '../../constants/Theme'
import AppButton from '../../components/AppButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { loginSuccess } from '../../redux/authSlice'

const Authorization = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:3000/users/login', {
                email: email,
                password: password
            });

            console.log('Server response:', response.data);

            if (response.data && response.data.token) {
                // Lưu trữ token vào AsyncStorage
                await AsyncStorage.setItem('userToken', response.data.token);
                dispatch(loginSuccess(response.data.userDetails));
                Alert.alert('Login successful');

                const storedToken = await AsyncStorage.getItem('userToken');
                console.log('Stored token:', storedToken);
            } else {
                Alert.alert('Login failed', 'Token not found in server response');
            }
        } catch (error) {
            console.log('Login error:', error);
            if (error.response && error.response.data) {
                Alert.alert('Login failed', error.response.data.message);
            } else {
                Alert.alert('Login failed', 'An error occurred during login.');
            }
        }
    };

    const handleSignUp = () => {
        navigation.navigate('Registration');
    };

    const handleForgot = () => {
        navigation.navigate('ForgotPassword');
    };

    return (
        <SafeAreaView style={appStyle.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <FastImage resizeMode="stretch" source={ICON.Back} style={appStyle.icon} />
            </TouchableOpacity>
            <View style={{ marginTop: windowHeight * 0.06, marginBottom: windowHeight * 0.04 }}>
                <Text style={appStyle.text24}>Sign in</Text>
                <Text style={[appStyle.text16, { color: COLOR.lightText, marginTop: 27 }]}>Welcome back</Text>
            </View>

            {/* INPUT EMAIL */}
            <View style={[styles.viewRow]}>
                <View style={styles.rowbetween}>
                    <FastImage tintColor={COLOR.primary} resizeMode="stretch" source={ICON.Mail} style={[appStyle.icon, { width: 26 }]} />
                    <Text style={{ fontSize: 35, color: COLOR.lightText, fontWeight: '200' }}>|</Text>
                </View>
                <TextInput
                    style={{ marginLeft: 25 }}
                    placeholder="Email address"
                    placeholderTextColor='#C1C7D0'
                    fontSize={16}
                    value={email}
                    onChangeText={setEmail}
                >
                </TextInput>
            </View>

            {/* INPUT PASSWORD */}
            <View style={[styles.viewRow]}>
                <View style={styles.rowbetween}>
                    <FastImage tintColor={COLOR.primary} resizeMode="stretch" source={ICON.Lock} style={[appStyle.icon, { height: 26 }]} />
                    <Text style={{ fontSize: 35, color: COLOR.lightText, fontWeight: '200' }}>|</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor='#C1C7D0'
                    placeholder="Password"
                    fontSize={16}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                >
                </TextInput>
                <TouchableOpacity>
                    <FastImage tintColor={COLOR.primary} resizeMode="stretch" source={ICON.Eye} style={[appStyle.icon, { width: 26 }]} />
                </TouchableOpacity>
            </View>

            {/* FORGOT PASSWORD */}
            <TouchableOpacity
                onPress={() => handleForgot()}
                style={{ width: windowWidth * 0.32, alignSelf: 'center', borderBottomWidth: 1, borderColor: COLOR.primary, marginTop: 30 }}>
                <Text style={[appStyle.text16Bold, { color: COLOR.primary }]}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* BUTTON SIGN IN */}
            <View style={styles.next}>
                <AppButton
                    icon={ICON.Next}
                    width={70}
                    height={70}
                    borderRadius={35}
                    onPress={handleLogin}
                />
            </View>

            {/* SIGN UP */}
            <View style={styles.form3}>
                <Text style={styles.title3}>New member?</Text>
                <TouchableOpacity onPress={() => handleSignUp()}>
                    <Text style={styles.title4}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default Authorization

const styles = StyleSheet.create({
    title4: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 27.25,
        color: '#324A59',
        marginLeft: 4
    },
    title3: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 27.25,
        color: '#AAAAAA'
    },
    form3: {
        flexDirection: 'row',
        marginTop: 110,
        padding: 14
    },
    next: {
        marginLeft: 250,
        marginTop: 110
    },
    input: {
        marginLeft: 25,
        color: COLOR.text,
        width: windowWidth * 0.65
    },
    rowbetween: {
        alignItems: 'center',
        flexDirection: 'row',
        width: 40,
        justifyContent: 'space-between'
    },
    viewRow: {
        width: windowWidth * 0.9,
        height: 50,
        marginTop: 20,
        borderColor: COLOR.grayText,
        borderBottomWidth: 0.7,
        flexDirection: 'row',
        alignItems: 'center'
    }
})
