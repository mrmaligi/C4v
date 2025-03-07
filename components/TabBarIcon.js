import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

const TabBarIcon = ({ name, focused }) => {
  const theme = useTheme();
  const color = focused ? theme.colors.textOnHeaderFooter : theme.colors.textOnPrimary;
  const glow = focused ? { textShadowColor: theme.colors.textOnHeaderFooter, textShadowRadius: 10 } : {};

  return <Ionicons name={name} size={24} color={color} style={glow} />;
};

export default TabBarIcon;
