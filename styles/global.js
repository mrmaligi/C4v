import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

const globalStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    button: {
      padding: 10,
      backgroundColor: theme.colors.primaryUI,
      color: theme.colors.textOnPrimary,
      borderRadius: 5,
      alignItems: 'center',
    },
    input: {
      padding: 10,
      borderColor: theme.colors.primaryUI,
      borderWidth: 1,
      borderRadius: 5,
      color: theme.colors.textOnPrimary,
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.colors.primaryUI,
    },
  });
};

export default globalStyles;
