import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import CreateAccountScreen from '../../screens/CreateAccountScreen/CreateAccountScreen';
import { AuthContext } from '../../contexts/AuthContext';
import MainScreen from '../../screens/MainScreen/MainScreen';
import ProfileTabView from '../../screens/ProfileScreen/ProfileScreen';
import SideBar from '../../screens/SideBar/SideBar';
import SearchScreen from '../../screens/SearchScreen/SearchScreen'
import PostScreen from '../../screens/PostScreen/PostScreen';
import PostComponent from '../../screens/PostComponent/PostComponent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppNav = () => {
  const { userToken, userInfo } = useContext(AuthContext);

  const StackSearch = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="SearchScreen" component={SearchScreen} />
       <Stack.Screen name="Profil" component={ProfileTabView} /> 
       <Stack.Screen name="Post" component={PostScreen} /> 
      </Stack.Navigator>
    )
  }
  const StackHome = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Home" component={MainScreen} />
       <Stack.Screen name="Post" component={PostScreen} /> 
       <Stack.Screen name="PostComponent" component={PostComponent} /> 
      </Stack.Navigator>
    )
  }
  const StackProfil = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Profil" component={ProfileTabView} />
       <Stack.Screen name="Post" component={PostScreen} /> 
      </Stack.Navigator>
    )
  }

  return (
    <>
      {userToken === null || userInfo === null ? (
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
          <Drawer.Screen name="StackHome" component={StackHome} />
          <Drawer.Screen name="StackProfil" component={StackProfil} />
          <Drawer.Screen name="StackSearch" component={StackSearch} />
          <Drawer.Screen name="Post" component={PostScreen} />
        </Drawer.Navigator>
      )}
    </>
  );
};

export default AppNav;
