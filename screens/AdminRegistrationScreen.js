import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import globalStyles from '../styles/global';

const AdminRegistrationScreen = () => {
  const [adminPhoneNumber, setAdminPhoneNumber] = useState('');
  const [password, setPassword] = useState('1234');
  const [commandPreview, setCommandPreview] = useState('');

  const handleRegister = () => {
    if (adminPhoneNumber === '' || password === '') {
      ToastAndroid.show('Please fill in all fields', ToastAndroid.SHORT);
    } else {
      setCommandPreview(`Registering admin with phone number: ${adminPhoneNumber} and password: ${password}`);
      ToastAndroid.show('Registration successful', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={globalStyles().container}>
      <Header />
      <Text style={styles.label}>Admin Registration</Text>
      <TextInput
        style={globalStyles().input}
        placeholder="Enter admin phone number"
        value={adminPhoneNumber}
        onChangeText={setAdminPhoneNumber}
      />
      <TextInput
        style={globalStyles().input}
        placeholder="Enter default password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" style={globalStyles().button} onPress={handleRegister} />
      <View style={styles.commandPreview}>
        <Text style={styles.commandText}>{commandPreview}</Text>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  commandPreview: {
    padding: 10,
    backgroundColor: '#FFCC00',
    borderRadius: 5,
    marginTop: 20,
  },
  commandText: {
    color: '#003399',
  },
});

export default AdminRegistrationScreen;
