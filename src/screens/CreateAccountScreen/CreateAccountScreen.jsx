import { useContext, useState } from 'react';
import {
  Center,
  Box,
  VStack,
  Heading,
  Input,
  Button,
  FormControl,
} from 'native-base';
import UserService from '../../services/UserService';
import { AuthContext } from '../../contexts/AuthContext';

const CreateAccountScreen = ({ navigation }) => {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});
  const { login, isLoading } = useContext(AuthContext);

  const validate = () => {
    if (!formData.username) {
      setErrors({ ...errors, username: 'Username is required' });
      return false;
    }
    if (!formData.email) {
      setErrors({ ...errors, email: 'Email is required' });
      return false;
    }
    if (!formData.password) {
      setErrors({ ...errors, password: 'Password is required' });
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (validate()) {
      let dataToSend = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      UserService.registerUser(dataToSend)
        .then((response) => {
          login(formData.email, formData.password);
        })
        .catch((error) => console.log(error));
    } else {
      console.log('Registration failed');
    }
  };

  return (
    <Center safeArea h="100%" bg="primary.50">
      <Box h="100%" p="2" w="90%" maxW="290" py="8">
        <Heading size="2xl">Create your account</Heading>
        <VStack space={7} mt="16">
          <FormControl>
            <FormControl.Label isRequired>Username</FormControl.Label>
            <Input
              size="xl"
              variant="underlined"
              onChangeText={(text) => setData({ ...formData, username: text })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label isRequired>Email</FormControl.Label>
            <Input
              size="xl"
              variant="underlined"
              onChangeText={(text) => setData({ ...formData, email: text })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label isRequired>Password</FormControl.Label>
            <Input
              size="xl"
              type="password"
              variant="underlined"
              onChangeText={(text) => setData({ ...formData, password: text })}
            />
          </FormControl>
          <Button mt="6" isLoading={isLoading} onPress={onSubmit}>
            Sign up
          </Button>
          <Center>
            <Button variant="link" onPress={() => navigation.navigate('Login')}>
              Back to login
            </Button>
          </Center>
        </VStack>
      </Box>
    </Center>
  );
};

export default CreateAccountScreen;
