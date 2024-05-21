import React from 'react'

import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { StripeProvider } from '@stripe/stripe-react-native';
import { UserContext, UserProvider } from './src/context/UserContext';

const App = () => {
  return (
    <StripeProvider
      publishableKey="pk_test_51PA9vlRsfm3Ucs22ixDUZ8mt2Ki9E7WR4tSil67ONZD4dptsAwjVZ0J2IFNEEf0iHQhDNEaTT87f6mTD9dnY1lAW00TQcuO9MO"
    >
      <Provider store={store}>
        <UserProvider>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </UserProvider>
      </Provider>
    </StripeProvider>
  );
};

export default App;