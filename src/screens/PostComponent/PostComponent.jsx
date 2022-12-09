import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable, Button, TouchableOpacity } from 'react-native';
import { Heading, Box, VStack, HStack } from 'native-base'
import AntIcon from "react-native-vector-icons/AntDesign";

const PostComponent = () => {
    const [liked, setLiked] = useState(false)

    const onPressLike = () => {
        if (!liked) {
            setLiked(true)
        } else {
            setLiked(false)
        }
    }

    return (
        <Box p={5} borderBottomWidth="1" borderBottomColor="gray.300">
            <VStack space={5}>
                <Heading size="sm" >Nickname</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, consectetur!</Text>
                <HStack justifyContent="space-around">
                    <Box>
                        <AntIcon name="enter" color="black" size={20} />
                    </Box>
                    <Box>
                        <AntIcon name="retweet" color="black" size={20} />
                    </Box>
                    <Box>
                        <TouchableOpacity onPress={() => onPressLike()}>
                            {liked ? <AntIcon name="like1" color="purple" size={20} />: <AntIcon name="like2" color="black" size={20} />}
                        </TouchableOpacity>
                    </Box>
                </HStack>
            </VStack>
        </Box>
    )
}

export default PostComponent