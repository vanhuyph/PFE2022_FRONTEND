import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable, Button, TouchableOpacity } from 'react-native';
import { Heading, Box, VStack, HStack, useColorModeValue } from 'native-base'
import AntIcon from "react-native-vector-icons/AntDesign";
const color ="#812bd6" 

const PostComponent = () => {
    const [liked, setLiked] = useState(false)
    const [rePosted, setRePosted] = useState(false)

    const onPressLike = () => {
        if (!liked) {
            setLiked(true)
        } else {
            setLiked(false)
        }
    }

    const onPressRePost = () => {
        if (!rePosted) {
            setRePosted(true)
        } else {
            setRePosted(false)
        }
    }

    return (
        <Box p={5} borderBottomWidth="1" borderBottomColor="gray.300" bg="white">
            <VStack space={5}>
                <Heading size="sm" >Nickname</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, consectetur!</Text>
                <HStack justifyContent="space-around">
                    <Box>
                        <AntIcon name="enter" color="black" size={20} />
                    </Box>
                    <Box>
                        <TouchableOpacity onPress={() => onPressRePost()}>
                            {rePosted ? <AntIcon name="retweet" color={color} size={20} /> : <AntIcon name="retweet" color="black" size={20} />}
                        </TouchableOpacity>
                    </Box>
                    <Box>
                        <TouchableOpacity onPress={() => onPressLike()}>
                            {liked ? <AntIcon name="like1" color={color} size={20} /> : <AntIcon name="like2" color="black" size={20} />}
                        </TouchableOpacity>
                    </Box>
                </HStack>
            </VStack>
        </Box>
    )
}

export default PostComponent