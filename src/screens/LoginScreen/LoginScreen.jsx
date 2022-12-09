import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Center, Box, VStack, Heading, Input, Button, FormControl } from 'native-base'
import { StackActions } from '@react-navigation/native';


const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            
                <Center p={4} height="100%">
                    <VStack width={315} space={8} height="100%">
                        <Box height="30%" pt={8} >
                            <Heading size="2xl" mt={10}>Login</Heading>
                        </Box>
                        <FormControl isRequired>
                            <VStack space={10} height="40%">
                                <Box>
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input size="xl" variant="underlined" />
                                </Box>
                                <Box>
                                    <FormControl.Label>Password</FormControl.Label>
                                    <Input type='password' size="xl" variant="underlined" />
                                </Box>
                                <Box >
                                    <Button size="lg">Login</Button>
                                </Box>
                            </VStack>
                        </FormControl>
                        <Box alignItems="center" pt={8}>
                            <Text>Don't have an account ?</Text>
                            <Button size="lg" width="100%" variant="link" onPress={() => navigation.navigate('Test')}>Create account</Button>
                        </Box>
                    </VStack>
                </Center>
        </SafeAreaView>
    )
   // <Button size="lg" width="100%" variant="link" onPress={() => navigation.dispatch(StackActions.replace('Test'))}>Create account</Button>
}

export default LoginScreen