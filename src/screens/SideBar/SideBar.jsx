import React, { useCallback } from 'react'
import { Box, Center } from 'native-base'
import { themeTools, useTheme, useColorMode, useColorModeValue, Text, VStack } from 'native-base';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

const SideBar = (props) => {
    console.log(props);
    const { state, navigation } = props
    const currentRoute = state.routeNames[state.index]

    const handlePressBackButton = useCallback(() => {
        navigation.closeDrawer()
    }, [navigation])
    const handlePressMain = useCallback(() => {
        navigation.navigate('MainScreen')
    }, [navigation])

    return (
        <Box flex={1} safeArea _light={{ bg: 'primary.50' }} _dark={{ bg: 'primary.1000' }}>
            <Center >
                <VStack justifyContent="space-between" height='100%' p={5}>
                    <Box>
                        <Text>test</Text>
                        <Text>test</Text>
                        <Text>test</Text>
                    </Box>
                    <Box>
                        <ThemeToggle />
                    </Box>
                </VStack>


            </Center>
        </Box>
    )
}

export default SideBar