import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../constants/AppStyle'
import FastImage from 'react-native-fast-image'
import { COLOR, ICON } from '../../../constants/Theme'
import { useNavigation } from '@react-navigation/native'
import Reward from './Reward'

const Account = () => {
  const navigation = useNavigation();

  const handleUpdate = () => {
    navigation.navigate('UpdateAccount');
  };
  return (
    <SafeAreaView style={appStyle.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Text style={[appStyle.text22, { marginEnd: windowWidth * 0.34 }]}>Hồ sơ</Text>
        <TouchableOpacity onPress={() => handleUpdate()}>
          <FastImage source={ICON.Edit} style={appStyle.icon} resizeMode='stretch' />
        </TouchableOpacity>
      </View>

      {/* TÊN */}
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <View style={appStyle.circle}>
          <FastImage source={ICON.AccountFocus} style={appStyle.iconMedium} resizeMode='stretch' />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={[appStyle.text14, { color: COLOR.grayText }]}>Tên</Text>
          <Text style={[appStyle.text20, { color: COLOR.primary }]}>Trí</Text>
        </View>
      </View>

      {/* SỐ ĐIỆN THOẠI */}
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <View style={appStyle.circle}>
          <FastImage source={ICON.Phone} style={appStyle.iconMedium} resizeMode='stretch' />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={[appStyle.text14, { color: COLOR.grayText }]}>Số điện thoại</Text>
          <Text style={[appStyle.text20, { color: COLOR.primary }]}>0935147321</Text>
        </View>
      </View>

      {/* EMAIL */}
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <View style={appStyle.circle}>
          <FastImage source={ICON.Mail} style={appStyle.iconMedium} resizeMode='stretch' />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={[appStyle.text14, { color: COLOR.grayText }]}>Email</Text>
          <Text style={[appStyle.text20, { color: COLOR.primary }]}>acc@gmail.com</Text>
        </View>
      </View>

      {/* ĐỊA CHỈ */}
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <View style={appStyle.circle}>
          <FastImage source={ICON.Location} style={appStyle.iconMedium} resizeMode='stretch' />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={[appStyle.text14, { color: COLOR.grayText }]}>Địa chỉ</Text>
          <Text style={[appStyle.text20, { color: COLOR.primary }]}>Quận 12, TP.HCM</Text>
        </View>
      </View>

      {/* ĐIỂM TÍCH LŨY */}
      <TouchableOpacity onPress={ () => navigation.navigate('Reward')} style={{ flexDirection: 'row', marginTop: 30 }}>
        <View style={appStyle.circle}>
          <FastImage tintColor={COLOR.primary} source={ICON.Gift} style={appStyle.iconMedium} resizeMode='stretch' />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={[appStyle.text14, { color: COLOR.grayText }]}>Điểm tích lũy</Text>
          <Text style={[appStyle.text20, { color: COLOR.primary }]}>958 Pts</Text>
        </View>
        <FastImage
          tintColor={COLOR.lightGray}
          resizeMode='stretch'
          source={ICON.More}
          style={[appStyle.icon, { alignSelf: 'center', marginLeft: windowWidth * 0.5 }]} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout} >
        <Text style={[appStyle.text18, { color: COLOR.delete }]}>Đăng xuất</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Account

const styles = StyleSheet.create({
  logout: {
    borderWidth: 2,
    borderColor: COLOR.delete,
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50
  }
})