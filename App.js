import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components';
import ControlScreen from './screens/ControlScreen';
import UserManagementScreen from './screens/UserManagementScreen';
import SettingsScreen from './screens/SettingsScreen';
import TabBarIcon from './components/TabBarIcon';

const Tab = createBottomTabNavigator();

const theme = {
  colors: {
    headerFooter: '#003399',
    primaryUI: '#FFCC00',
    textOnPrimary: '#003399',
    textOnHeaderFooter: '#FFCC00',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Control"
          tabBarOptions={{
            activeTintColor: theme.colors.textOnHeaderFooter,
            inactiveTintColor: theme.colors.textOnPrimary,
            style: {
              backgroundColor: theme.colors.headerFooter,
            },
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name={route.name} focused={focused} />
            ),
          })}
        >
          <Tab.Screen name="Control" component={ControlScreen} />
          <Tab.Screen name="UserManagement" component={UserManagementScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
