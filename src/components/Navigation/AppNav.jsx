import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import CreateAccountScreen from '../../screens/CreateAccountScreen/CreateAccountScreen';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import MainScreen from '../../screens/MainScreen/MainScreen';
import ProfileTabView from '../../screens/ProfileScreen/ProfileScreen';
import SideBar from '../../screens/SideBar/SideBar';
import SearchScreen from '../../screens/SearchScreen/SearchScreen'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size={'large'}></ActivityIndicator>
      </View>
    );
  }
  return (
    <>
      {userToken === null ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <SideBar {...props} />}
          screenOptions={{
            headerShown: false,
            headerTintColor: '#000000',
            headerStyle: { backgroundColor: '242526' },
          }}
        >
          <Drawer.Screen name="Home" component={MainScreen} />
          <Drawer.Screen name="Profil" component={ProfileTabView} />
          <Drawer.Screen name="Search" component={SearchScreen} />
        </Drawer.Navigator>
      )}
    </>
  );
};

export default AppNav;
