import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Center, Box, VStack, Heading, Input, Button } from 'native-base'


const LoginScreen = () => {
    return (
        <SafeAreaView>
            <Center p={4} height="100%">
                <VStack width={315} space={8} height="100%">
                    <Box height="30%" pt={8} >
                        <Heading size="2xl" mt={10}>Login</Heading>
                    </Box>
                    <VStack space={10} height="40%">
                        <Box>
                            <Text>Email Adress</Text>
                            <Input size="xl" variant="underlined" />
                        </Box>
                        <Box>
                            <Text>Password</Text>
                            <Input type='password' size="xl" variant="underlined"/>
                        </Box>
                        <Box >
                            <Button size="lg">Login</Button>
                        </Box>
                    </VStack>
                    <Box alignItems="center" pt={8}>
                        <Text>Don't have an account ?</Text>
                        <Button size="lg" width="100%" variant="link">Create account</Button>
                    </Box>
                </VStack>
            </Center>
        </SafeAreaView>
    )
}

export default LoginScreen