import { Box, Text, useColorModeValue, VStack, Input, Center, ScrollView } from 'native-base'
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AntIcon from "react-native-vector-icons/AntDesign";
import UserComponent from '../../components/UserComponent/UserComponent';

const SearchScreen = ({ navigation }) => {
    const bg = useColorModeValue('primary.50', 'primary.1000')
    return (
        <Box bg={bg}>
            <NavBar title="Search" navigation={navigation} />
            <Center p={5} >
                <Input variant="rounded" placeholder='Search People' width={300} size={'xl'} InputLeftElement={<Box px={5}><AntIcon name="search1" color={useColorModeValue('black', 'white')} /></Box>}/>
            </Center>
            <ScrollView height="100%">
                <UserComponent/>
                <UserComponent/>
                <UserComponent/>
                <UserComponent/>
                <UserComponent/>
                <UserComponent/>
            </ScrollView>
        </Box>

    )
}

export default SearchScreen