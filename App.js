import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/components/AppContainer/AppContainer';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen/CreateAccountScreen'

export default function App() {
  return (
    <AppContainer>
      <CreateAccountScreen/>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
