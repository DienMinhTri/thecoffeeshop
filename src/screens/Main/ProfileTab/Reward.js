import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native'
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

      <View style={appStyle.hcn}>
                <View style={styles.view1}>
                    <View style={styles.textview}>
                        <Text style={styles.text1}>Loyalty card</Text>
                        <Text style={styles.text1}>4/8</Text>
                    </View>
                    <View style={styles.view2}>
                  <FastImage source={ICON.Cafe} style={appStyle.hcnn}></FastImage>
                    </View>
                </View>
            </View>
            <View style={appStyle.hcn}>
             
            <Text style={styles.text1}> My Point</Text>
            <Text style={styles.text1}> 2456</Text>
            
            </View>

            <View style={{ flexDirection: 'row' }}>
        <Text style={[appStyle.text22, { marginEnd: windowWidth * 0.40 }]}>History</Text>
      </View>

      <View style={styles.form2}>
                <View>
                <Text style={appStyle.text14Bold}>Americano</Text>
                    <Text style={styles.title1}>24 June | 12:30  </Text>
                    </View>    
                <View style={styles.form3}>
                    <Text style={appStyle.text16Bold}> + 12 Pts</Text>
                    </View>
               
            </View>

            <View style={styles.form2}>
                <View>
                <Text style={appStyle.text14Bold}>Latte</Text>
                    <Text style={styles.title1}>22 June | 08:30  </Text>
                    </View>    
                <View style={styles.form3}>
                    <Text style={appStyle.text16Bold}> + 12 Pts</Text>
                    </View>
               
            </View>

            <View style={styles.form2}>
                <View>
                <Text style={appStyle.text14Bold}>Raf</Text>
                    <Text style={styles.title1}>16 June | 10:48  </Text>
                    </View>    
                <View style={styles.form3}>
                    <Text style={appStyle.text16Bold}> + 12 Pts</Text>
                    </View>
               
            </View>

            <View style={styles.form2}>
                <View>
                <Text style={appStyle.text14Bold}>Americano</Text>
                    <Text style={styles.title1}>12 May | 11:25 PM </Text>
                    </View>    
                <View style={styles.form3}>
                    <Text style={appStyle.text16Bold}> + 12 Pts</Text>
                    </View>
               
            </View>
      
       
          

      

    </SafeAreaView>
  )
}

export default Reward

const styles = StyleSheet.create({
  view:{
    marginBottom: 15
},
form3: {
  flexDirection: 'row',
  marginLeft: 'auto', 
},
form1: {
  flexDirection: 'row',
  
 
},
form2: {
  flexDirection: 'row',
  marginTop: 40
},


text: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    color: 'black'
},

point:{
  justifyContent:'center',
  textAlign:'center',
  flexDirection:'row'

},

texthcn: {
  fontSize: 25,
  textAlign: 'center',
  justifyContent: 'center',
  marginBottom: 15,
},


text1: {
    fontSize: 20,
    color: '#D8D8D8',
    justifyContent: 'space-around',
    textAlign: 'left'

},
textview: {
    fontSize: 20,
    justifyContent: "space-around",
    flexDirection: 'row',
},

textview2: {
    fontSize: 20,
    justifyContent: 'flex-start',
    flexDirection: 'column',
},

view1: {
    width: 360,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#324A59',
   

},

view2: {
    width: 330,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#FFFF',
    margin: 5,
},

textImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
},

frame: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
},
})