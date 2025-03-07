import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import globalStyles from '../styles/global';
import TabBarIcon from '../components/TabBarIcon';

const ControlScreen = () => {
  const [adminPhoneNumber, setAdminPhoneNumber] = useState('');
  const [commandPreview, setCommandPreview] = useState('');

  const handleRelayOn = () => {
    setCommandPreview(`Relay ON command to ${adminPhoneNumber}`);
  };

  const handleRelayOff = () => {
    setCommandPreview(`Relay OFF command to ${adminPhoneNumber}`);
  };

  return (
    <View style={globalStyles().container}>
      <Header />
      <Text style={styles.label}>Control Screen</Text>
      <TextInput
        style={globalStyles().input}
        placeholder="Enter admin phone number"
        value={adminPhoneNumber}
        onChangeText={setAdminPhoneNumber}
      />
      <View style={styles.buttonContainer}>
        <Button title="Relay ON" onPress={handleRelayOn} color="#003399" />
        <Button title="Relay OFF" onPress={handleRelayOff} color="#003399" />
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  commandPreview: {
    padding: 10,
    backgroundColor: '#FFCC00',
    borderRadius: 5,
  },
  commandText: {
    color: '#003399',
  },
});

ControlScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon name="ios-switch" focused={focused} />,
};

export default ControlScreen;
