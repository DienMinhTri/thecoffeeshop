import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Startup_screen from '../screens/Begin/Startup_screen';
import Authorization from '../screens/Begin/Authorization';
import Home from '../screens/Main/HomeTab/Home';
import { COLOR, ICON } from '../constants/Theme';
import { appStyle, windowHeight } from '../constants/AppStyle';
import Registration from '../screens/Begin/Registration';
import MyorderCurrent from '../screens/Main/HistoryTab/MyorderCurrent';
import MyorderHistory from '../screens/Main/HistoryTab/MyorderHistory';
import { Image, Text, View } from 'react-native';
import Account from '../screens/Main/ProfileTab/Account';
import Forgot_password from '../screens/Begin/Forgot_password';
import MyCart from '../screens/Main/HomeTab/MyCart';
import UpdateAccount from '../screens/Main/ProfileTab/UpdateAccount';
import Reward from '../screens/Main/ProfileTab/Reward';
import OrderDetail from '../screens/Main/HomeTab/OrderDetail';
import PaymentScreen from '../screens/Main/HomeTab/PaymentScreen';
import { CartProvider } from '../context/CartContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const StackBegin = () => {
  return (

    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Start' component={Startup_screen} />
      {props => <Startup_screen {...props} />}
      <Stack.Screen name='Authorization' component={Authorization} />
      {props => <Authorization {...props} />}
      <Stack.Screen name='Registration' component={Registration} />
      {props => <Registration {...props} />}
      <Stack.Screen name='ForgotPassword' component={Forgot_password} />
      {props => <Forgot_password {...props} />}
    </Stack.Navigator>


  )
};

const StackHome = () => {
  return (
    <CartProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="MyCart" component={MyCart}></Stack.Screen>
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      </Stack.Navigator>
    </CartProvider>
  );
};

const StackHistory = () => {
  return (
    <CartProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyorderCurrent" component={MyorderCurrent}></Stack.Screen>
        <Stack.Screen name="MyorderHistory" component={MyorderHistory}></Stack.Screen>
      </Stack.Navigator>
    </CartProvider>
  );
};

const StackProfile = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account}></Stack.Screen>
      <Stack.Screen name="UpdateAccount" component={UpdateAccount}></Stack.Screen>
      <Stack.Screen name="Reward" component={Reward}></Stack.Screen>
    </Stack.Navigator>
  )
};

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackHome"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, label;

          if (route.name === 'StackHome') {
            iconName = focused ? ICON.HomeFocus : ICON.Home;
            label = "Trang chủ";


          } else if (route.name === 'StackHistory') {
            iconName = focused ? ICON.HistoryFocus : ICON.History;
            label = "Lịch sử";

          } else if (route.name === 'StackProfile') {
            iconName = focused ? ICON.AccountFocus : ICON.Account;
            label = "Hồ sơ";
          }
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View>
                <Image
                  source={iconName}
                  style={{
                    width: 26,
                    height: 26,

                    resizeMode: 'stretch',
                    tintColor: focused ? COLOR.primary : COLOR.grayText,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  marginTop: 4,
                  color: focused ? COLOR.primary : COLOR.grayText,
                }}>
                {label}
              </Text>
            </View>
          );
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: windowHeight * 0.075,
          position: 'absolute',
          backgroundColor: COLOR.background,
        },
      })}
    >
      <Tab.Screen name="StackHome" component={StackHome} />
      {props => <StackHome {...props} />}
      <Tab.Screen name="StackHistory" component={StackHistory} />
      {props => <StackHistory {...props} />}
      <Tab.Screen name="StackProfile" component={StackProfile} />
      {props => <StackProfile {...props} />}
    </Tab.Navigator>
  )
};

const StackNavigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {
        isLoggedIn ? <Main /> : <StackBegin />
      }
    </>

  )
}

export default StackNavigation;