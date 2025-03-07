import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import globalStyles from '../styles/global';
import TabBarIcon from '../components/TabBarIcon';

const SettingsScreen = () => {
  const [allowAllNumbers, setAllowAllNumbers] = useState(false);
  const [relayLatchTime, setRelayLatchTime] = useState('');

  const handleResetToDefault = () => {
    setAllowAllNumbers(false);
    setRelayLatchTime('');
  };

  return (
    <View style={globalStyles().container}>
      <Header />
      <Text style={styles.label}>Settings Screen</Text>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Allow All Numbers</Text>
        <Switch
          value={allowAllNumbers}
          onValueChange={setAllowAllNumbers}
          trackColor={{ false: '#FFCC00', true: '#FFCC00' }}
          thumbColor={allowAllNumbers ? '#003399' : '#003399'}
        />
      </View>
      <TextInput
        style={globalStyles().input}
        placeholder="Enter relay latch time (0-999 seconds)"
        value={relayLatchTime}
        onChangeText={setRelayLatchTime}
        keyboardType="numeric"
      />
      <Button title="Reset to Default" style={globalStyles().button} onPress={handleResetToDefault} />
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
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleLabel: {
    fontSize: 18,
    marginRight: 10,
  },
});

SettingsScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon name="ios-settings" focused={focused} />,
};

export default SettingsScreen;
