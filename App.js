import 'react-native-gesture-handler';
import AppContainer from './src/components/AppContainer/AppContainer';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen/CreateAccountScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from './src/screens/TestScreen/TestScreen';
import MainScreen from './src/screens/MainScreen/MainScreen';
import TestScreen2 from './src/screens/TestScreen/TestScreen2';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileTabView from './src/screens/ProfileScreen/ProfileScreen';
import SideBar from './src/screens/SideBar/SideBar';
import { useColorModeValue, View } from 'native-base';
import { useContext } from 'react';
import { AuthContext } from './src/contexts/AuthContext';
import { ActivityIndicator } from 'react-native';
import AppNav from './src/components/Navigation/AppNav';

//Create new navbar to change the color on dark mode

export default function App() {
  var bg = useColorModeValue('#242526', 'white')
  return (
    <AppContainer>
      <AppNav />
    </AppContainer>
  );
}
