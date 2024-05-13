import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, TextInput, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../constants/AppStyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOR, ICON } from '../../../constants/Theme'
import FastImage from 'react-native-fast-image'
import axios from 'axios'
import { useCart } from '../../../context/CartContext';

const Home = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const cartItems = route.params?.cartItems || [];
  const { cartItemCount } = useCart();

  useEffect(() => {
    const getName = async () => {
      const storedName = await AsyncStorage.getItem('name');
      if (storedName) {
        setName(storedName);
      }
    };

    getName();
  }, []);

  const closeSearchInput = () => {
    setShowSearchInput(false);
    setSearchValue('');
  };

  const handleClearSearch = () => {
    setSearchResults([]);
    setIsSearching(false);
    Keyboard.dismiss();
  };

  const handleSearchInputChange = (text) => {
    setSearchValue(text);
  };

  const handleItemPress = (item) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('OrderDetail', { item });
    }, 1000);
  };

  const handleSearch = async () => {
    try {
      if (searchValue.trim() === '') {
        setSearchResults([]);
        setIsSearching(false);
      } else {
        const response = await axios.get(`http://10.0.2.2:3000/apiProduct/detailProduct?name=${searchValue}`);
        const allProducts = response.data; // Danh sách tất cả sản phẩm từ API
        const filteredProducts = allProducts.filter(product =>
          product.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchResults(filteredProducts);
        setIsSearching(true);
      }
      Keyboard.dismiss();
    } catch (error) {
      console.error('Error searching for products:', error);
    }
    closeSearchInput();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/apiProduct/listProduct');
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     const cartItems = route.params?.cartItems || [];
  //   });

  //   return unsubscribe;
  // }, [navigation, route, cartItems]);

  const handleMyCart = () => {
    navigation.navigate('MyCart', { cartItems: cartItems });
    navigation.setParams({ cartItemCount: cartItems.length });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View key={item.id} style={styles.itemContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}đ</Text>
        <FastImage resizeMode='stretch' source={{ uri: item.image }} style={styles.image} />
      </View>
    </TouchableOpacity >
  );
  return (
    <SafeAreaView style={[appStyle.container, { padding: 0 }]}>
      <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between', height: windowHeight * 0.08, alignItems: 'center' }}>
        <View>
          <Text style={[appStyle.text20Bold, { color: COLOR.primary }]}>{name ? `Welcome, ${name}!` : 'Welcome!'}</Text>
        </View>
        <TouchableOpacity onPress={() => handleMyCart()}>
          <FastImage source={ICON.Cart} style={appStyle.iconBig} resizeMode='stretch' />
          {cartItemCount > 0 && (
            <View style={{
              position: 'absolute',
              top: -5,
              right: -5,
              backgroundColor: 'red',
              borderRadius: 10,
              width: 20,
              height: 20,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={{ color: 'white' }}>{cartItemCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: 380, marginLeft: 20 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingLeft: 10,
            flex: 1
          }}
          onChangeText={handleSearchInputChange}
          value={searchValue}
          placeholder="Enter search keyword"
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={searchValue ? handleSearch : handleClearSearch}
        >
          <FastImage source={ICON.Find} style={appStyle.iconBig} resizeMode='stretch' />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: COLOR.primary, width: '100%', height: '85%', borderRadius: 25, marginTop: 20 }}>
        <Text style={[appStyle.text20, { color: COLOR.grayText, margin: 15 }]}>Select your coffee</Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          isSearching ? (
            searchResults.length > 0 ? (
              <FlatList
                numColumns={2}
                style={{ marginBottom: 20 }}
                showsVerticalScrollIndicator={false}
                data={searchResults}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />
            ) : (
              <Text style={{ margin: 20, textAlign: 'center', color: 'red' }}>Không có sản phẩm bạn cần tìm</Text>
            )
          ) : (
            <FlatList
              numColumns={2}
              style={{ marginBottom: 20 }}
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          )
        )}
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    width: Math.min(windowWidth * 0.4, windowHeight * 0.25),
    height: Math.min(windowWidth * 0.4, windowHeight * 0.25),
    marginHorizontal: 20,
    marginVertical: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    padding: 10,
  },
  image: {
    width: '80%',
    height: '60%',
    borderRadius: 20,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  itemPrice: {
    fontSize: 18,
    color: '#FF5733',
    marginBottom: 10,
  },
});