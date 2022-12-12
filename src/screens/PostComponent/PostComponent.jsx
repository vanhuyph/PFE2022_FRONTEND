import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import { Heading, Box, VStack, HStack, useColorModeValue, Text, Input, Button, TextArea } from 'native-base'
import AntIcon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
const color = "#812bd6"

const PostComponent = () => {
    const [liked, setLiked] = useState(false)
    const [rePosted, setRePosted] = useState(false)
    const [reply, setReply] = useState(false)
    const bg = useColorModeValue("black", "#838383")
    const colorText = useColorModeValue("black", "white")

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

    const onPressReply = () => {
        if (!reply) {
            setReply(true)
        } else {
            setReply(false)
        }
    }

    return (
        <Box p={5} borderBottomWidth="0.2" borderBottomColor="gray.300" _dark={{ bg: 'primary.1000' }} _light={{ bg: 'primary.50' }}>
            <VStack space={5}>  
                <Heading size="sm" >Nickname</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, consectetur!</Text>
                <HStack justifyContent="space-around">
                    <Box>
                        <TouchableOpacity onPress={() => onPressReply()}>
                            <AntIcon name="enter" color={bg} size={20} />
                        </TouchableOpacity>
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
                {reply ?
                    <HStack justifyContent="space-around">
                        <TextArea width={300} h={10} />
                        <Button h={10}><Feather name="send" color={colorText} size={18} /></Button>
                    </HStack> : <></>
                }
            </VStack>
        </Box>
    )
}

export default PostComponent