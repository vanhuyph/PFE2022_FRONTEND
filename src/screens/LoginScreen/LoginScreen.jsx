import React, { useContext, useState } from 'react';
import {
  Center,
  Box,
  VStack,
  Heading,
  Input,
  Button,
  FormControl,
  Text,
} from 'native-base';
import { AuthContext } from '../../contexts/AuthContext';

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { isLoading } = useContext(AuthContext);

  return (
    <Center h="100%" safeArea bg="primary.50">
      <Box p="2" h="100%" py="8" w="90%" maxW="290">
        <Heading size="2xl" my={10}>
          Login
        </Heading>
        <VStack space={10} mt="16">
          <FormControl isRequired>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              size='xl'
              variant="underlined"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              size='xl'
              variant="underlined"
              type="password"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </FormControl>
          <Button
            mt="3"
            isLoading={isLoading}
            onPress={() => login(email, password)}
          >
            Login
          </Button>
          <VStack mt="10" justifyContent="center">
            <Center>
              <Text fontSize="sm">Don't have an account?</Text>
            </Center>
            <Center>
              <Button
                variant='link'
                onPress={() => navigation.navigate('CreateAccount')}
              >
                Create account
              </Button>
            </Center>
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
