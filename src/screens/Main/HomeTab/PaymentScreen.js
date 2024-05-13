import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

function PaymentScreen() {
  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch('http://10.0.2.2:3000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const { confirmPayment, loading } = useConfirmPayment();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigation = useNavigation();
  

  const handlePayPress = async () => {
    const billingDetails = {
      email: 'jenny.rosen@example.com',
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const { paymentIntent, error } = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
      paymentMethodData: {
        billingDetails,
      },
    });

    if (error) {
      console.log('Payment confirmation error', error);
    } else if (paymentIntent) {
      console.log('Success from promise', paymentIntent);
      setPaymentSuccess(true);
      setTimeout(() => {
        navigation.navigate('Home');
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      {paymentSuccess ? (
        <Text>Bạn đã thanh toán thành công!</Text>
      ) : (
        <>
          <CardField
            postalCodeEnabled={true}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={styles.cardField}
            onCardChange={cardDetails => {
              console.log('cardDetails', cardDetails);
            }}
            onFocus={focusedField => {
              console.log('focusField', focusedField);
            }}
          />
          <Button
            onPress={handlePayPress}
            title="Pay"
            disabled={loading}
            buttonStyle={styles.button}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardField: {
    width: '80%',
    height: 50,
    marginVertical: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1976D2', // Màu nút thanh toán
  },
});
export default PaymentScreen;