import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/components/AppContainer/AppContainer';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen/CreateAccountScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from './src/screens/TestScreen/TestScreen';
import MainScreen from './src/screens/MainScreen/MainScreen';
import TestScreen2 from './src/screens/TestScreen/TestScreen2';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <AppContainer>
      {/*<Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
  </Stack.Navigator> */}
      {<Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="TestScreen2" component={TestScreen2} />
      </Drawer.Navigator>}
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
