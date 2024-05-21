import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../constants/AppStyle'
import FastImage from 'react-native-fast-image'
import { COLOR, ICON } from '../../../constants/Theme'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../../context/UserContext'

const UpdateAccount = () => {

    const navigation = useNavigation();
    const [newUserData, setNewUserData] = useState({});
    const { userData, fetchUserData } = useContext(UserContext);

    const handleInputChange = (key, value) => {
        setNewUserData({ ...newUserData, [key]: value });
    };

    const handleSave = async () => {
        try {
            // Kiểm tra xem newUserData có chứa các trường phone và address hay không
            const updatedUserData = {
                ...newUserData,
            };

            // Gọi API để cập nhật thông tin người dùng với các giá trị mới từ updatedUserData
            const response = await fetch('http://10.0.2.2:3000/api/updateProfile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUserData)
            });
            if (!response.ok) {
                throw new Error('Failed to update user data');
            }
            Alert.alert('Thông báo', 'Cập nhật thông tin người dùng thành công');
            fetchUserData();
            navigation.navigate('Account')
        } catch (error) {
            console.error(error);
            Alert.alert('Lỗi', 'Đã xảy ra lỗi khi cập nhật thông tin người dùng');
        }
    };
    
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
                        placeholder={userData.user.name}
                        value={newUserData.name || userData?.name}
                        onChangeText={value => handleInputChange('name', value)}
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
                        placeholder={userData.user.phone.toString()}
                        value={newUserData.phone || userData?.phone}
                        onChangeText={value => handleInputChange('phone', value)}
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
                        placeholder={userData.user.email.toString()}
                        editable={false}
                        selectTextOnFocus={false}
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
                        placeholder={userData?.user?.address ? userData.user.address.toString() : 'Nhập vào địa chỉ'}
                        value={newUserData.address || userData?.address}
                        onChangeText={value => handleInputChange('address', value)}
                    />
                </View>
            </View>


        </SafeAreaView>
    )
}

export default UpdateAccount

const styles = StyleSheet.create({})