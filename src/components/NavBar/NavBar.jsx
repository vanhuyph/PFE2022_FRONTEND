import { HStack, Text, Icon, Box, Heading, useColorModeValue, Center, IconButton } from 'native-base'
import React, { useCallback } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from 'react-native';


const NavBar = ({ navigation }) => {

    const handlePressMenuButton = useCallback(() => {
        navigation.openDrawer()
    }, [navigation])


    const bg = useColorModeValue('primary.50', 'primary.1000')
    const colorText = useColorModeValue('black', 'white')
    return (
        <Box pl={4} pr={4} height={100} bg={bg} borderBottomWidth="0.2" borderBottomColor="gray.300">
            <Box pt={1} pb={1} mt={60}>
                <HStack justifyContent="space-between">
                    <TouchableOpacity onPress={() => handlePressMenuButton()}>
                        <FontAwesome name='navicon' size={20} color={colorText}/>
                    </TouchableOpacity>
                    <Center>
                        <Heading size="md">Home</Heading>
                    </Center>
                    <Box size={5}></Box>
                </HStack>
            </Box>
        </Box>
    )
}

export default NavBar