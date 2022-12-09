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

const CreateAccountScreen = () => {
  const [formData, setData] = useState({});

  return (
    <SafeAreaView>
      <Center p={16} height="100%">
        <VStack space={4} width="100%">
          <Box>
            <Heading size="2xl">Create your account</Heading>
          </Box>
          <FormControl isRequired>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Username
            </FormControl.Label>
            <Input
              placeholder="Username"
              onChangeText={(value) =>
                setData({ ...formData, username: value })
              }
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
              placeholder="Email"
              onChangeText={(value) => setData({ ...formData, email: value })}
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
              placeholder="Password"
              onChangeText={(value) =>
                setData({ ...formData, password: value })
              }
            />
          </FormControl>
          <Button mt="5">Create account</Button>
        </VStack>
      </Center>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;
