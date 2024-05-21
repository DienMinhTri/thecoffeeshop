import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, Alert } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigation, useRoute } from '@react-navigation/native'

async function initializeStripe() {
  const stripe = await loadStripe('pk_test_51PA9vlRsfm3Ucs22ixDUZ8mt2Ki9E7WR4tSil67ONZD4dptsAwjVZ0J2IFNEEf0iHQhDNEaTT87f6mTD9dnY1lAW00TQcuO9MO');
  return stripe;
}

function PaymentScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`http://10.0.2.2:3000/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
    });
    if (!error) {
      setLoading(true);
    }
  };
  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    initializeStripe().then(() => {
      initializePaymentSheet();
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button
        variant="primary"
        disabled={!loading}
        title="Checkout"
        onPress={openPaymentSheet}
      />
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