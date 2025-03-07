import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../components/Header';
import Footer from '../components/Footer';
import globalStyles from '../styles/global';
import TabBarIcon from '../components/TabBarIcon';

const UserManagementScreen = () => {
  const [users, setUsers] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [accessTime, setAccessTime] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddUser = () => {
    if (isEditing) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = { phoneNumber, accessTime };
      setUsers(updatedUsers);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setUsers([...users, { phoneNumber, accessTime }]);
    }
    setPhoneNumber('');
    setAccessTime(new Date());
  };

  const handleEditUser = (index) => {
    setPhoneNumber(users[index].phoneNumber);
    setAccessTime(users[index].accessTime);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDeleteUser = (index) => {
    Alert.alert(
      'Delete User',
      'Are you sure you want to delete this user?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const updatedUsers = users.filter((_, i) => i !== index);
            setUsers(updatedUsers);
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={globalStyles().container}>
      <Header />
      <Text style={styles.label}>User Management</Text>
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.userCard}>
            <Text style={styles.userCardHeader}>{item.phoneNumber}</Text>
            <Text style={styles.userCardText}>{item.accessTime.toLocaleString()}</Text>
            <View style={styles.userCardActions}>
              <Button title="Edit" onPress={() => handleEditUser(index)} />
              <Button title="Delete" onPress={() => handleDeleteUser(index)} />
            </View>
          </View>
        )}
      />
      <TextInput
        style={globalStyles().input}
        placeholder="Enter phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <DateTimePicker
        value={accessTime}
        mode="datetime"
        display="default"
        onChange={(event, selectedDate) => setAccessTime(selectedDate || accessTime)}
      />
      <Button title={isEditing ? "Update User" : "Add User"} onPress={handleAddUser} />
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
  userCard: {
    backgroundColor: '#FFCC00',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  userCardHeader: {
    color: '#003399',
    fontWeight: 'bold',
  },
  userCardText: {
    color: '#003399',
  },
  userCardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

UserManagementScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon name="ios-people" focused={focused} />,
};

export default UserManagementScreen;
