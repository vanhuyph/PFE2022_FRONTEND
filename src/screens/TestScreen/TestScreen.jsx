import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { Center, Box, VStack, Heading, Input, Button, FormControl } from 'native-base'


const TestScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>Test Screen</Text>
            <Button size="lg" width="100" onPress={() => navigation.navigate('Login')}>Back to login</Button>
        </SafeAreaView>
    )
}

export default TestScreen