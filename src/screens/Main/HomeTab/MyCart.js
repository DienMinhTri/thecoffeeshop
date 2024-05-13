import React, { useReducer, useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { COLOR, ICON } from '../../../constants/Theme'
import { useCart } from '../../../context/CartContext'

const MyCart = () => {
  const navigation = useNavigation();
  const { cartItems, removeFromCart} = useCart();

  const handlePayment = () => {
    removeFromCart();
    navigation.navigate('PaymentScreen', { cartItems: cartItems });
    console.log(cartItems);
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  useEffect(() => {
    const itemCount = cartItems.length;
    navigation.setParams({ cartItemCount: itemCount });
  }, [cartItems, navigation]);


  const handleRemoveItem = (index) => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xác nhận',
          onPress: () => removeFromCart(index),
        },
      ],
    );
  };

  const renderItem = ({ item, index }) => (
    <SafeAreaView>
      <View style={styles.divider} />
      <View key={item.id} style={styles.itemContainer}>
        <Image source={item.image ? { uri: item.image } : require('../../../media/images/cafe.png')} style={styles.image} />
        <View style={styles.itemDetails}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.itemName}>{item.name} x {item.quantity}</Text>
            <Text style={styles.itemName}>{item.price * item.quantity}đ</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.itemName}>{item.iceLevel}% đá</Text>
            <Text style={styles.itemName}>{item.sugarLevel}% đường</Text>
            <Text style={styles.itemName}>Topping: {item.toppings}</Text>
          </View>
          <TouchableOpacity onPress={() => handleRemoveItem(index)}>
            <Text style={{ color: 'red' }}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.primary }}>
      <View style={styles.appbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Quay lại</Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', }}>
          <Text style={{ fontSize: 25, fontWeight: 900, color: "#ffffff" }}>
            Giỏ hàng
          </Text>
        </View>
        <View style={styles.divider} />
      </View>
      <View style={styles.container}>
        <Text>Số lượng sản phẩm trong giỏ hàng: {cartItems.length}</Text>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
        />
      </View>
      <View style={styles.divider} />
      <Text style={styles.totalPrice}>Total Price: {totalPrice}đ</Text>
      <View style={styles.paymentButtonContainer}>
        <TouchableOpacity onPress={handlePayment}>
          <Text style={styles.paymentButton}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default MyCart
const styles = StyleSheet.create({
  appbar: {
    marginBottom: 10
  },
  container: {
    margin: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    height: 500
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginTop: 10,
    color: '#ffffff',
    textDecorationLine: 'underline',
    fontSize: 15,
    margin: 20
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  totalPriceValue: {
    fontWeight: 'normal',
  },
  itemDetails:
  {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemName:
  {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice:
  {
    fontSize: 14,
    color: 'gray',
  },
  totalPrice:
  {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#ffffff',
    margin: 20,
    paddingBottom: 20
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    paddingTop: 2,
    marginTop: 10,
    backgroundColor: "#ffffff"
  },
  paymentButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    width: 200,
    left: 100,
    borderRadius: 20,
  },
  paymentButton: {
    fontSize: 15,
    fontWeight: 'bold',
  }
})