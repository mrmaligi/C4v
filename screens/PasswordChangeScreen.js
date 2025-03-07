import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, Alert } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import globalStyles from '../styles/global';

const PasswordChangeScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangePassword = () => {
    if (oldPassword.length !== 4 || newPassword.length !== 4) {
      Alert.alert('Validation Error', 'Passwords must be 4 digits long', [{ text: 'OK', style: 'cancel' }]);
    } else if (!/^\d{4}$/.test(newPassword)) {
      Alert.alert('Validation Error', 'New password must be numeric', [{ text: 'OK', style: 'cancel' }]);
    } else {
      setModalVisible(true);
    }
  };

  const handleConfirmChange = () => {
    setModalVisible(false);
    Alert.alert('Success', 'Password changed successfully', [{ text: 'OK', style: 'cancel' }]);
  };

  return (
    <View style={globalStyles().container}>
      <Header />
      <Text style={styles.label}>Change Password</Text>
      <TextInput
        style={globalStyles().input}
        placeholder="Enter old password"
        secureTextEntry
        keyboardType="numeric"
        value={oldPassword}
        onChangeText={setOldPassword}
      />
      <TextInput
        style={globalStyles().input}
        placeholder="Enter new password"
        secureTextEntry
        keyboardType="numeric"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Button title="Change Password" style={globalStyles().button} onPress={handleChangePassword} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Confirm password change?</Text>
            <Button title="Confirm" onPress={handleConfirmChange} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#003399',
    borderRadius: 10,
  },
  modalText: {
    color: '#FFCC00',
    fontSize: 18,
    marginBottom: 20,
  },
});

export default PasswordChangeScreen;
