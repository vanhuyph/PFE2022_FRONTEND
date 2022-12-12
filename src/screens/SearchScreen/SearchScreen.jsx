import {
  Box,
  Text,
  useColorModeValue,
  VStack,
  Input,
  Center,
  ScrollView,
} from 'native-base';
import React, { useContext, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import UserComponent from '../../components/UserComponent/UserComponent';
import UserService from '../../services/UserService';
import { AuthContext } from '../../contexts/AuthContext';

const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const { userToken } = useContext(AuthContext);

  UserService.searchUser(search, userToken)
    .then((response) => console.log(response))
    .catch((error) => {
      console.log(error);
    });
    
  const bg = useColorModeValue('primary.50', 'primary.1000');
  return (
    <Box bg={bg}>
      <NavBar title="Search" navigation={navigation} />
      <Center p={5}>
        <Input
          variant="rounded"
          onChangeText={(text) => setSearch(text)}
          placeholder="Search People"
          width={300}
          size={'xl'}
          InputLeftElement={
            <Box px={5}>
              <AntIcon
                name="search1"
                color={useColorModeValue('black', 'white')}
              />
            </Box>
          }
        />
      </Center>
      <ScrollView height="100%">
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
      </ScrollView>
    </Box>
  );
};

export default SearchScreen;
