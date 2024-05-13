import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../constants/AppStyle'
import FastImage from 'react-native-fast-image'
import { COLOR, ICON } from '../../../constants/Theme'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdateAccount = () => {

    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');


    const handleSave = async () => {
        try {
            await AsyncStorage.setItem('name', name);
            await AsyncStorage.setItem('phoneNumber', phoneNumber);
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('address', address);
            navigation.navigate('Account');
        } catch (error) {
            console.log('Error saving data: ', error);
        }
    }
    return (
        <SafeAreaView style={appStyle.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FastImage source={ICON.Back} style={appStyle.icon} resizeMode='stretch' />
                </TouchableOpacity>
                <Text style={[appStyle.text22]}>Chỉnh sửa</Text>
                <TouchableOpacity onPress={handleSave}>
                    <FastImage tintColor={COLOR.primary} source={ICON.Save} style={appStyle.icon} resizeMode='stretch' />
                </TouchableOpacity>
            </View>

            {/* TÊN */}
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View style={appStyle.circle}>
                    <FastImage source={ICON.AccountFocus} style={appStyle.iconMedium} resizeMode='stretch' />
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={[appStyle.text14, { color: COLOR.grayText }]}>Tên</Text>
                    <TextInput
                        style={[appStyle.text18, { width: windowWidth * 0.7 }]}
                        placeholder='Nhập tên'
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
            </View>

            {/* SỐ ĐIỆN THOẠI */}
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View style={appStyle.circle}>
                    <FastImage source={ICON.Phone} style={appStyle.iconMedium} resizeMode='stretch' />
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={[appStyle.text14, { color: COLOR.grayText }]}>Số điện thoại</Text>
                    <TextInput
                        style={[appStyle.text18, { width: windowWidth * 0.7 }]}
                        placeholder='Nhập số điện thoại'
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                </View>
            </View>


            {/* EMAIL */}
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View style={appStyle.circle}>
                    <FastImage source={ICON.Mail} style={appStyle.iconMedium} resizeMode='stretch' />
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={[appStyle.text14, { color: COLOR.grayText }]}>Email</Text>
                    <TextInput
                        style={[appStyle.text18, { width: windowWidth * 0.7 }]}
                        placeholder='Nhập email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
            </View>


            {/* ĐỊA CHỈ */}
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View style={appStyle.circle}>
                    <FastImage source={ICON.Location} style={appStyle.iconMedium} resizeMode='stretch' />
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={[appStyle.text14, { color: COLOR.grayText }]}>Địa chỉ</Text>
                    <TextInput
                        style={[appStyle.text18, { width: windowWidth * 0.7 }]}
                        placeholder='Nhập địa chỉ'
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                </View>
            </View>


        </SafeAreaView>
    )
}

export default UpdateAccount

const styles = StyleSheet.create({})