import React, { useState } from 'react';
import { appStyle, windowHeight, windowWidth } from '../../../constants/AppStyle'
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RadioButton, Button, Checkbox } from 'react-native-paper';
import { useCart } from '../../../context/CartContext';
import axios from 'axios';

const OrderDetail = ({ product, route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const [sugarLevel, setSugarLevel] = useState(null);
  const [iceLevel, setIceLevel] = useState(null);
  const [toppings, setToppings] = useState([
    { id: 1, name: '1 shot Epresso' },
  ]);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { cartItems, addToCart } = useCart();


  const handleGoBack = () => {
    navigation.goBack();
  };
  // const addToCart = (product) => {
  //   const newItem = {
  //     ...product,
  //     sugarLevel: sugarLevel,
  //     iceLevel: iceLevel,
  //     quantity: quantity,
  //     toppings: selectedToppings
  //   };
  //   const updatedCartItems = [...cartItems, newItem];
  //   setCartItems(updatedCartItems);
  //   console.log(updatedCartItems)

  //   navigation.navigate('Home', { cartItems: updatedCartItems });

  //   Alert.alert('Thông báo', 'Sản phẩm đã được thêm vào giỏ hàng');
  // };
  const addToCartHandler = () => {
    const newItem = {
      ...item,
      sugarLevel: sugarLevel,
      iceLevel: iceLevel,
      quantity: quantity,
      toppings: selectedToppings
    };

    addToCart(newItem);

    Alert.alert('Thông báo', 'Sản phẩm đã được thêm vào giỏ hàng');
    navigation.navigate('Home');
  };
  const handleToppingSelection = (toppingId) => {
    if (selectedToppings.includes(toppingId)) {
      const updatedToppings = selectedToppings.filter(id => id !== toppingId);
      setSelectedToppings(updatedToppings);
    } else {
      const updatedToppings = [...selectedToppings, toppingId];
      setSelectedToppings(updatedToppings);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView scrollEnabled={true}>
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text>{item.name}</Text>
          <Text>{item.price}đ</Text>
        </View>
        <View style={styles.groupButton}>
          <Text>Chọn mức độ đá:</Text>
          <RadioButton.Group onValueChange={value => setIceLevel(value)} value={iceLevel}>
            <RadioButton.Item label="0%" value={0} />
            <RadioButton.Item label="30%" value={30} />
            <RadioButton.Item label="50%" value={50} />
          </RadioButton.Group>
          <Text>Chọn mức độ đường:</Text>
          <RadioButton.Group onValueChange={value => setSugarLevel(value)} value={sugarLevel}>
            <RadioButton.Item label="0%" value={0} />
            <RadioButton.Item label="30%" value={30} />
            <RadioButton.Item label="50%" value={50} />
          </RadioButton.Group>
          <Text>Chọn thêm:</Text>
          {toppings.map(topping => (
            <View key={topping.id} style={styles.checkboxContainer}>
              <Checkbox.Item
                label={topping.name}
                status={selectedToppings.includes(topping.id) ? 'checked' : 'unchecked'}
                onPress={() => handleToppingSelection(topping.id)}
              />
            </View>
          ))}
        </View>
        <View style={styles.quantityContainer}>
          <Button
            title="-" mode="contained" onPress={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </Button>
          <Text>Số lượng: {quantity}</Text>
          <Button
            title="+" mode="contained" onPress={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
          <Button mode="contained" onPress={addToCartHandler} title="Thêm vào giỏ hàng">Thêm vào giỏ hàng</Button>
        </View>
        <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
          <Text style={styles.goBackText}>Quay lại</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
};
export default OrderDetail
const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  goBackButton: {
    marginTop: 20,
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  goBackText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  toppingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  container: {
    alignItems: 'center',
  }
});