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
 
  return (
    <Center
      p={4}
      height="100%"
      _light={{ bg: 'primary.50' }}
      _dark={{ bg: 'primary.1000' }}
      safeArea
    >
      <VStack width={315} space={8} height="100%">
        <Box height="30%" pt={8}>
          <Heading size="2xl" mt={10}>
            Login
          </Heading>
        </Box>
        <FormControl isRequired>
          <VStack space={10} height="40%">
            <Box>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                size="xl"
                variant="underlined"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </Box>
            <Box>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                size="xl"
                variant="underlined"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </Box>
            <Box>
              <Button
                size="lg"
                onPress={() => {
                  login(email, password);
                  s
                }}
              >
                Login
              </Button>
            </Box>
          </VStack>
        </FormControl>
        <Box alignItems="center" pt={8}>
          <Text>Don't have an account?</Text>
          <Button
            size="lg"
            width="100%"
            variant="link"
            onPress={() => navigation.navigate('CreateAccount')}
          >
            Create account
          </Button>
        </Box>
      </VStack>
    </Center>
  );
  // <Button size="lg" width="100%" variant="link" onPress={() => navigation.dispatch(StackActions.replace('Test'))}>Create account</Button>
};

export default LoginScreen;
