import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import globalStyles from '../styles/global';

const StatusDashboardScreen = () => {
  const [relayActive, setRelayActive] = useState(false);
  const [lastCommandTimestamp, setLastCommandTimestamp] = useState('');
  const [networkStatus, setNetworkStatus] = useState('offline');
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.5,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={globalStyles().container}>
      <Header />
      <Text style={styles.label}>Status Dashboard</Text>
      <View style={styles.relayIndicatorContainer}>
        <Animated.View
          style={[
            styles.relayIndicator,
            {
              backgroundColor: relayActive ? '#FFCC00' : '#003399',
              transform: [{ scale: pulseAnim }],
            },
          ]}
        />
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Last Command:</Text>
        <Text style={styles.statusValue}>{lastCommandTimestamp}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Network Status:</Text>
        <Text style={styles.statusValue}>{networkStatus}</Text>
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
  relayIndicatorContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  relayIndicator: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statusLabel: {
    fontSize: 18,
    color: '#003399',
  },
  statusValue: {
    fontSize: 18,
    color: '#003399',
  },
});

export default StatusDashboardScreen;
