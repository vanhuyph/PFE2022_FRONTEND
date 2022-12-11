import { Button, Text, HStack, Heading, useColorModeValue, Center, Box } from 'native-base'
import React from 'react'
import AntIcon from "react-native-vector-icons/AntDesign";

const MenuButton = ({ onPress, icon, text }) => {

    return (
        <Button bg="transparent" onPress={() => onPress()} _light={{ _pressed: { bg: 'primary.400' } }} borderRadius={0}>
            <HStack space={10}>
                <Box justifyContent="center" >
                    <AntIcon name={icon} color={useColorModeValue('black', 'white')} size={31} />
                </Box>
                <Box width={100}>
                    <Box>
                        <Heading bold >{text}</Heading>
                    </Box>
                </Box>
            </HStack>
        </Button>
    )
}

export default MenuButton