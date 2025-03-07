import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import globalStyles from '../styles/global';

const AuthenticationScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const handlePinChange = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  const handlePinSubmit = () => {
    if (pin === '1234') {
      navigation.navigate('Admin');
    } else {
      Alert.alert('Invalid PIN', 'Please try again.');
      setPin('');
    }
  };

  const handleBiometricAuth = async () => {
    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      navigation.navigate('Admin');
    } else {
      Alert.alert('Authentication failed', 'Please try again.');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 300000); // 5 minutes

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={globalStyles().container}>
      <Text style={styles.label}>Enter PIN</Text>
      <View style={styles.pinContainer}>
        {Array(4).fill().map((_, index) => (
          <View key={index} style={styles.pinDot(pin.length > index)} />
        ))}
      </View>
      <View style={styles.keypad}>
        {Array(10).fill().map((_, index) => (
          <TouchableOpacity key={index} style={styles.key} onPress={() => handlePinChange(index.toString())}>
            <Text style={styles.keyText}>{index}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Submit" onPress={handlePinSubmit} />
      {isBiometricSupported && (
        <Button title="Use Biometric Authentication" onPress={handleBiometricAuth} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pinDot: (filled) => ({
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: filled ? '#003399' : '#FFCC00',
  }),
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  key: {
    width: '30%',
    padding: 20,
    margin: 5,
    backgroundColor: '#003399',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  keyText: {
    color: '#FFCC00',
    fontSize: 24,
  },
});

export default AuthenticationScreen;
