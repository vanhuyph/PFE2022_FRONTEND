import React from 'react';
import { useState } from 'react';
import {
  Center,
  Box,
  VStack,
  Heading,
  Input,
  Button,
  FormControl,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreateAccountScreen = ({navigation}) => {
  const [formData, setData] = useState({});

  return (

      <Center p={16} height="100%" _light={{bg: 'primary.50'}} _dark={{bg:'primary.1000'}} safeArea>
        <VStack space={8} height="100%" width={315}>
          <Box height="28%" pt={3} >
            <Heading size="2xl">Create your account</Heading>
          </Box>
          <VStack space={10} height="40%">
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Username
              </FormControl.Label>
              <Input
                onChangeText={(value) =>
                  setData({ ...formData, username: value })
                }
                variant="underlined"
              />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Email
              </FormControl.Label>
              <Input
                onChangeText={(value) => setData({ ...formData, email: value })}
                variant="underlined"
              />
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label
                _text={{
                  bold: true,
                }}
              >
                Password
              </FormControl.Label>
              <Input
                type="password"
                onChangeText={(value) =>
                  setData({ ...formData, password: value })
                }
                variant="underlined"
              />

            </FormControl>
          </VStack>
          <Button size="lg">Create account</Button>
          <Box pt={8}>
            <Button size="lg" width="100%" variant="link" onPress={() => navigation.navigate('Login')}>Back to login</Button>
          </Box>
        </VStack>
      </Center>

  );
};

export default CreateAccountScreen;
