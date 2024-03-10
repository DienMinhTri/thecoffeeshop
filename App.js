import React from 'react'

import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Reward from './src/screens/Main/ProfileTab/Reward';

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
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
      // <StackNavigation />
      // <Reward></Reward>



  )
}

export default App;