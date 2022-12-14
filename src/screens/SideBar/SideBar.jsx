import React, { useCallback, useContext } from 'react';
import { Box, Center } from 'native-base';
import { VStack } from 'native-base';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import MenuButton from '../../components/MenuButton/MenuButton';
import { AuthContext } from '../../contexts/AuthContext';

const SideBar = (props) => {
  const { navigation } = props;
  const { logout } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);

  const handlePressMain = useCallback(() => {
    navigation.navigate('StackHome');
  }, [navigation]);

  const handlePressProfil = useCallback(() => {
    
    console.log(userInfo);

      navigation.navigate('StackProfil', { userID: userInfo.id });

  }, [navigation]);

  const handlePressSearch = useCallback(() => {
    navigation.navigate('StackSearch');
  }, [navigation]);

  return (
    <Box
      flex={1}
      safeArea
      _light={{ bg: 'primary.50' }}
      _dark={{ bg: 'primary.1000' }}
    >
      <Center>
        <VStack
          justifyContent="space-between"
          height="100%"
          pt={10}
          pb={10}
          width="100%"
        >
          <VStack width="100%" space={8} pt={10}>
            <MenuButton text="Home" icon="home" onPress={handlePressMain} />
            <MenuButton
              text="Profile"
              icon="user"
              onPress={handlePressProfil}
            />
            <MenuButton
              text="Search"
              icon="search1"
              onPress={handlePressSearch}
            />
          </VStack>
          <VStack space={10} width="100%">
            <Center>
              <ThemeToggle />
            </Center>
            <MenuButton
              text="Logout"
              icon="logout"
              onPress={() => {
                logout();
              }}
            />
          </VStack>
        </VStack>
      </Center>
    </Box>
  );
};

export default SideBar;
