import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const saveProfile = () => {
    // Xử lý lưu thông tin hồ sơ vào cơ sở dữ liệu hoặc thực hiện các tác vụ khác tại đây
    console.log('Thông tin hồ sơ:', name, phoneNumber, email, code);
  };

  return (


    <View style={styles.container}>
    
<View style={styles.viewName}>
      <View style={styles.box2}></View>
      <View style={styles.container1}>
      <Text style={styles.labelProfile}>Profile </Text>
      </View>
      <View style={styles.viewEdit}></View>
      <View style={styles.box2}></View>
      </View>
      
    <View style={styles.viewName}>
      <View style={styles.box1}></View>
      <View >
      <Text style={styles.label31}>Name </Text>
      <Text style={styles.label2}>ALex </Text>
      </View>
      </View>

      <View style={styles.viewName}>
      <View style={styles.box1}></View>
      <View >
      <Text style={styles.label31}>Phone number</Text>
      <Text style={styles.label2}>+375 33 664-57-36 </Text>
      </View>
      </View>

      <View style={styles.viewName}>
      <View style={styles.box1}></View>
      <View >
      <Text style={styles.label31}>Email  </Text>
      <Text style={styles.label2}>adosmenesk@pm.me </Text>
      </View>
      </View>

      <View style={styles.viewName}>
      <View style={styles.box1}></View>
      <View >
      <Text style={styles.label31}> Magic Coffee store address</Text>
      <Text style={styles.label2}>Bradford BD1 1PR</Text>
      </View>
      </View>

      <View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
    
  },

  viewName:{
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },

  viewEdit:{
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginEnd: 'auto'
  },

  box1:{
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue'
  },

  box2:{
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },


  container: { 
    padding: 20,
  },

  label1:{
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Helvetica',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

  },

  label2:{
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Helvetica',
    borderColor: 'black',

  },

  label3:{
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Helvetica',
    borderColor: 'black',

  },

  label4:{
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Helvetica',
    borderColor: 'black',

  },

  labelProfile:{
    fontSize: 25,
    borderColor: 'black',
    fontStyle: 'normal',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },

});

export default ProfileScreen;