import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, Pressable, Button, TouchableOpacity } from 'react-native';
import { Heading, Box, VStack, HStack, useColorModeValue, Text } from 'native-base'
import AntIcon from "react-native-vector-icons/AntDesign";
const color ="#812bd6" 

const PostComponent = () => {
    const [liked, setLiked] = useState(false)
    const [rePosted, setRePosted] = useState(false)
    const  bg = useColorModeValue("black","#838383")

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
        <Box p={5} borderBottomWidth="0.2" borderBottomColor="gray.300" _dark={{bg:'primary.1000'}} _light={{bg: 'primary.50'}}>
            <VStack space={5}>
                <Heading size="sm" >Nickname</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, consectetur!</Text>
                <HStack justifyContent="space-around">
                    <Box>
                        <AntIcon name="enter" color={bg} size={20} />
                    </Box>
                    <Box>
                        <TouchableOpacity onPress={() => onPressRePost()}>
                            {rePosted ? <AntIcon name="retweet" color={color} size={20} /> : <AntIcon name="retweet" color={bg} size={20} />}
                        </TouchableOpacity>
                    </Box>
                    <Box>
                        <TouchableOpacity onPress={() => onPressLike()}>
                            {liked ? <AntIcon name="like1" color={color} size={20} /> : <AntIcon name="like2" color={bg} size={20} />}
                        </TouchableOpacity>
                    </Box>
                </HStack>
            </VStack>
        </Box>
    )
}

export default PostComponent