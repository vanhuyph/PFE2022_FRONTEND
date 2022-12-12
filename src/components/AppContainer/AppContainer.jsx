import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import theme from '../../theme';
import { AuthProvider } from '../../contexts/AuthContext';

const AppContainer = (props) => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AppContainer;
