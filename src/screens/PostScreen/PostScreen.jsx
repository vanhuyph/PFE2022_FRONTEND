import { Box, Button, Heading, ScrollView, Text, useColorModeValue, View } from 'native-base'
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PostComponent from '../PostComponent/PostComponent'

const PostScreen = ({ navigation, route }) => {
    const { post } = route.params
    const bg = useColorModeValue('primary.50', 'primary.1000');

    return (
        <Box bg={bg}>
            <NavBar navigation={navigation} title="Post" />
            <PostComponent post={post} />
            <Heading py={7} px={2}>Comments</Heading>
            <ScrollView height="100%">
                <PostComponent navigation={navigation} post={post} />
            </ScrollView>
        </Box>
    )
}

export default PostScreen