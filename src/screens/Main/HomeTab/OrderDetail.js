import React, { useState } from 'react';
import { appStyle, windowHeight, windowWidth } from '../../../constants/AppStyle'
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity, Alert, ScrollView, Checkbox } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RadioButton, Button } from 'react-native-paper';


const OrderDetail = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const [sugarLevel, setSugarLevel] = useState('Regular');
  const [iceLevel, setIceLevel] = useState('Normal');
  const [toppings, setToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleAddToCart = () => {
    const selectedItem = {
      name: item.name,
      price: item.price,
      sugarLevel: sugarLevel,
      iceLevel: iceLevel,
      toppings: toppings,
      quantity: quantity,
    };
    const handleCheckbox = (value) => {
      if (toppings.includes(value)) {
        setToppings(toppings.filter(item => item !== value));
      } else {
        setToppings([...toppings, value]);
      }
    };
    addToCart(selectedItem);

    Alert.alert('Thông báo', 'Sản phẩm đã được thêm vào giỏ hàng');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text>{item.name}</Text>
          <Text>{item.price}đ</Text>
        </View>
        <View style={styles.groupButton}>
          <Text>Chọn mức độ đường:</Text>
          <RadioButton.Group onValueChange={value => setIceLevel(value)} value={iceLevel}>
            <RadioButton.Item label="0%" value={0} />
            <RadioButton.Item label="30%" value={30} />
            <RadioButton.Item label="50%" value={50} />
          </RadioButton.Group>
          <Text>Chọn thêm:</Text>
          <View>
            {/* <Checkbox
              title="Thêm thạch"
              status={toppings.includes('thach') ? 'checked' : 'unchecked'}
              onPress={() => handleCheckbox('thach')}
            />
            <Checkbox
              title="Thêm trân châu"
              status={toppings.includes('tran chau') ? 'checked' : 'unchecked'}
              onPress={() => handleCheckbox('tran chau')}
            />
            <Checkbox
              title="Thêm 1 shot cafe"
              status={toppings.includes('shot_cafe') ? 'checked' : 'unchecked'}
              onPress={() => handleCheckbox('shot_cafe')}
            /> */}
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <Button
            title="-" mode="contained" onPress={() => setQuantity(quantity - 1)}
          >
            -
          </Button>
          <Text>Số lượng: {quantity}</Text>
          <Button
            title="+" mode="contained" onPress={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
          <Button mode="contained" onPress={handleAddToCart} title="Thêm vào giỏ hàng">Thêm vào giỏ hàng</Button>
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
  groupButton: {

  },
  container: {
    alignItems: 'center',
  }
});