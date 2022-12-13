import { HStack, Box, Heading, useColorModeValue, Center, Actionsheet, useDisclose, Button, Text } from 'native-base'
import React, { useCallback } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from 'react-native';
import NewPostComponent from '../NewPostComponent/NewPostComponent';


const NavBar = ({ navigation, title }) => {
    let icon;
    let actionSheet;
    const { isOpen, onOpen, onClose } = useDisclose()
    const bg = useColorModeValue('primary.50', 'primary.1000')
    const colorText = useColorModeValue('black', 'white')

    const handlePressMenuButton = useCallback(() => {
        if (title === "Post") {
            navigation.goBack()
        } else {
            navigation.openDrawer()
        }
    }, [navigation])


    if (title === "Post") {
        icon = <AntDesign name='arrowleft' size={20} color={colorText} />
    } else {
        icon = <FontAwesome name='navicon' size={20} color={colorText} />
    }

    if (title === "Home") {
        actionSheet = <>
            <Button onPress={onOpen}>
                <AntDesign name='plus' size={10} color={colorText} />
            </Button>

        </>
    } else {
        actionSheet = <Box size={5}></Box>
    }


    return (
        <Box pl={4} pr={4} height={100} bg={bg} borderBottomWidth="0.2" borderBottomColor="gray.300">
            <Box py={1} mt={60}>
                <HStack justifyContent="space-between">
                    <TouchableOpacity onPress={() => handlePressMenuButton()}>
                        {icon}
                    </TouchableOpacity>
                    <Center>
                        <Actionsheet isOpen={isOpen} onClose={onClose}>
                            <Actionsheet.Content>
                                <NewPostComponent/>
                            </Actionsheet.Content>
                        </Actionsheet>
                        <Heading size="md">{title}</Heading>
                    </Center>
                    {actionSheet}
                </HStack>
            </Box>
        </Box>
    )
}

export default NavBar