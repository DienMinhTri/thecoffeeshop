import React from 'react'
import Authorization from './src/screens/Begin/Authorization';
import Forgot_password from './src/screens/Begin/Forgot_password';
import Startup_screen from './src/screens/Begin/Startup_screen';
import MyorderCurrent from './src/screens/Main/HistoryTab/MyorderCurrent';
import MyorderHistory from './src/screens/Main/HistoryTab/MyorderHistory';
import Review_request from './src/screens/Main/HomeTab/Review_request';
import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import ItemDetail from './src/components/ItemDetail';

const App = () => {
  return (
    // <Welcome/>
    // <Authorization/>
    // <Registration/>
    // <Forgot_password/>
    // <Two_factor_verification/>
    // <Startup_screen/>
    // <MyorderCurrent/>
    // <MyorderHistory/>
    // <Review_request/>
    // <ItemDetail/>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
      // <StackNavigation />



  )
}

export default App;