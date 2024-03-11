import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../constants/AppStyle'
import FastImage from 'react-native-fast-image'
import { COLOR, ICON } from '../../../constants/Theme'
import { useNavigation } from '@react-navigation/native'

const Reward = () => {
  return (
   
    <SafeAreaView style={appStyle.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Text style={[appStyle.text22, { marginEnd: windowWidth * 0.40 }]}>Reward</Text>
      </View>

     <view>
      
     </view>
       
          

      

    </SafeAreaView>
  )
}

export default Reward

const styles = StyleSheet.create({
    
})