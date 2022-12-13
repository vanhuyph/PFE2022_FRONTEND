import {
  Box,
  useColorModeValue,
  Input,
  Center,
  ScrollView,
} from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import UserComponent from '../../components/UserComponent/UserComponent';
import UserService from '../../services/UserService';
import { AuthContext } from '../../contexts/AuthContext';

const SearchScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState();
  const [users, setUsersList] = useState([]);
  const { userToken } = useContext(AuthContext);

  useEffect(() => {
    UserService.searchUser(searchInput, userToken)
      .then((response) => {
        setUsersList(response);
      })
      .catch((error) => {
        setSearchInput();
        console.log(error);
      });
  }, [searchInput]);


  const bg = useColorModeValue('primary.50', 'primary.1000');
  return (
    <Box bg={bg}>
      <NavBar title="Search" navigation={navigation} />
      <Center p={5}>
        <Input
          variant="rounded"
          onChangeText={(text) => setSearchInput(text)}
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
        {users.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </ScrollView>
    </Box>
  );
};

export default SearchScreen;
