import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../constants/AppStyle'
import FastImage from 'react-native-fast-image'
import { COLOR, ICON } from '../../constants/Theme'
import { useNavigation } from '@react-navigation/native'
import AppButton from '../../components/AppButton'
import axios from 'axios';

const Registration = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = () => {
        if (isValidInput()) {
            axios.post('http://10.0.2.2:3000/users/register', { name, email, password }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('User registered successfully!');
                        setName(response.data.name);
                    } else {
                        throw new Error('Failed to register user');
                    }
                })
                .catch(error => {
                    console.error('Error registering user:', error);
                    alert('Failed to register user. Please try again later.');
                });
        } else {
            alert('Please fill in all fields');
        }
    };

    const isValidInput = () => {
        return name.trim() !== '' && email.trim() !== '' && password.trim() !== '';
    };

    return (
        <SafeAreaView style={appStyle.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <FastImage resizeMode="stretch" source={ICON.Back} style={appStyle.icon} />
            </TouchableOpacity>
            <View style={{ marginTop: windowHeight * 0.06, marginBottom: windowHeight * 0.04 }}>
                <Text style={appStyle.text24}>Sign Up</Text>
                <Text style={[appStyle.text16, { color: COLOR.lightText, marginTop: 27 }]}>Creat an account here</Text>
            </View>

            {/* INPUT NAME */}
            <View style={[styles.viewRow]}>
                <View style={styles.rowbetween}>
                    <FastImage tintColor={COLOR.primary} resizeMode="stretch" source={ICON.Account} style={[appStyle.icon, { width: 26 }]} />
                    <Text style={{ fontSize: 35, color: COLOR.lightText, fontWeight: '200' }}>|</Text>
                </View>
                <TextInput
                    style={{ marginLeft: 25 }}
                    placeholder="Create an account here"
                    placeholderTextColor='#C1C7D0'
                    fontSize={16}
                    value={name}
                    onChangeText={text => setName(text)}
                >
                </TextInput>
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
                    onChangeText={text => setEmail(text)}
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
                    onChangeText={text => setPassword(text)}
                >
                </TextInput>
                <TouchableOpacity>
                    <FastImage tintColor={COLOR.primary} resizeMode="stretch" source={ICON.Eye} style={[appStyle.icon, { width: 26 }]} />
                </TouchableOpacity>
            </View>

            {/* FORGOT PASSWORD */}
            <Text style={[appStyle.text16, { color: COLOR.primary, fontWeight: '400', marginTop: 20 }]}>
                By signing up you agree with our Terms of Use

            </Text>


            {/* BUTTON SIGN IN */}
            <View style={styles.next}>
                <AppButton
                    icon={ICON.Next}
                    width={70}
                    height={70}
                    borderRadius={35}
                    onPress={() => {
                        if (isValidInput()) {
                            registerUser();
                            navigation.navigate('Authorization')
                        } else {
                            alert('Please fill in all fields');
                        }
                    }}
                />
            </View>

            {/* SIGN UP */}
            <View style={styles.form3}>
                <Text style={styles.title3}>Already a member</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.title4}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Registration

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
        marginTop: 80
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
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center'
    }
})