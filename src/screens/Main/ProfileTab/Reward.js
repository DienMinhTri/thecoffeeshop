import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import { appStyle, windowHeight, windowWidth } from '../../../constants/AppStyle'
import { COLOR, ICON } from '../../../constants/Theme'
import axios from 'axios';

const Reward = ({ route }) => {
  const [carts, setCarts] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    fetchData(); // Gọi hàm để fetch dữ liệu khi component được render
  }, [route]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/apiMyCart/listcart');
      setCarts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };
  const handleRefresh = () => {
    setIsRefreshing(true); // Đặt isRefreshing thành true khi người dùng kéo màn hình để làm mới
    fetchData();
  };

  const totalPoints = carts.reduce((total, item) => total + item.points, 0);

  return (

    <SafeAreaView style={appStyle.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Text style={[appStyle.text22, { marginEnd: windowWidth * 0.40 }]}>Reward</Text>
      </View>

      <View style={styles.hcn}>

        <Text style={styles.text1}> My Point</Text>
        <Text style={styles.text1}>{totalPoints}</Text>

      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={[appStyle.text22, { marginEnd: windowWidth * 0.40 }]}>History</Text>
      </View>
      {isRefreshing ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={carts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.form2}>
              <View>
                <Text style={appStyle.text14Bold}>{item.name}</Text>
              </View>
              <View style={styles.form3}>
                <Text style={appStyle.text16Bold}>{item.points}</Text>
              </View>
            </View>
          )}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      )}
    </SafeAreaView>
  )
}

export default Reward

const styles = StyleSheet.create({
  view: {
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
    marginTop: 20,
    margin: 50
  },


  text: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    color: 'black'
  },

  point: {
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row'

  },

  texthcn: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },


  text1: {
    fontSize: 30,
    color: '#D8D8D8',
    marginLeft: 10,

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
  hcn: {
    width: 360,
    height: 120,
    borderRadius: 10,
    backgroundColor: COLOR.primary,
    margin: 6,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
})