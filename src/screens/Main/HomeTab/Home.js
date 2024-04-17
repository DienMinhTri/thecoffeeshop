import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../constants/AppStyle'
import { COLOR, ICON } from '../../../constants/Theme'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Home = ({ route }) => {
  const name = route.params ? route.params.name : 'No name available';
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleMyCart = () => {
    navigation.navigate('MyCart');
  }
  const handleItemPress = (item) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('OrderDetail', { item });
    }, 1000);
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
          <Text style={[appStyle.text16, { color: COLOR.lightText }]}>Welcome!</Text>
          <Text style={[appStyle.text20Bold, { color: COLOR.primary }]}>{name ? name : 'No name available'}</Text>
        </View>
        <TouchableOpacity onPress={() => handleMyCart()}>
          <FastImage source={ICON.Cart} style={appStyle.iconBig} resizeMode='stretch' />
        </TouchableOpacity>
      </View>


      <View style={{ backgroundColor: COLOR.primary, width: '100%', height: '85%', borderRadius: 25, marginTop: 20 }}>
        <Text style={[appStyle.text20, { color: COLOR.grayText, margin: 15 }]}>Select your coffee</Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            numColumns={2}
            style={{ marginBottom: 20 }}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
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