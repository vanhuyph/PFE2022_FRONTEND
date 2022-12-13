import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import { Heading, Box, VStack, HStack, useColorModeValue, Text, Input, Button, TextArea } from 'native-base'
import AntIcon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
const color = "#812bd6"

const PostComponent = ({ user, postText, commentCount, likeCount, retweetCount }) => {
    const [liked, setLiked] = useState(false)
    const [rePosted, setRePosted] = useState(false)
    const [reply, setReply] = useState(false)
    const [commentNb, setCommentNb] = useState(commentCount)
    const [likeNb, setLikeNb] = useState(likeCount)
    const [retweetNb, setRetweetNb] = useState(retweetCount)
    const bg = useColorModeValue("black", "#838383")
    const colorText = useColorModeValue("black", "white")

    const onPressLike = () => {
        if (!liked) {
            setLiked(true)
            setLikeNb(likeNb + 1)
        } else {
            setLiked(false)
            setLikeNb(likeNb - 1)
        }
    }

    const onPressRePost = () => {
        if (!rePosted) {
            setRePosted(true)
            setRetweetNb(retweetNb + 1)
        } else {
            setRePosted(false)
            setRetweetNb(retweetNb - 1)
        }
    }

    const onPressReply = () => {
        if (!reply) {
            setReply(true)
        } else {
            setReply(false)
        }
    }

    const onSendComment = () => {
        setCommentNb(commentNb + 1)
        setReply(false)
    }

    return (
        <Box p={5} borderBottomWidth="0.2" borderBottomColor="gray.300" _dark={{ bg: 'primary.1000' }} _light={{ bg: 'primary.50' }}>
            <VStack space={5}>
                <Heading size="sm" >{user}</Heading>
                <Text>{postText}</Text>
                <HStack justifyContent="space-around">
                    <Box>
                        <HStack space={2}>
                            <TouchableOpacity onPress={() => onPressReply()}>
                                <AntIcon name="enter" color={bg} size={20} />
                            </TouchableOpacity>
                            <Text>{commentNb}</Text>
                        </HStack>
                    </Box>
                    <Box>
                        <HStack space={2}>
                            <TouchableOpacity onPress={() => onPressRePost()}>
                                {rePosted ? <AntIcon name="retweet" color={color} size={20} /> : <AntIcon name="retweet" color={bg} size={20} />}
                            </TouchableOpacity>
                            <Text>{retweetNb}</Text>
                        </HStack>
                    </Box>
                    <Box>
                        <HStack space={2}>
                            <TouchableOpacity onPress={() => onPressLike()}>
                                {liked ? <AntIcon name="like1" color={color} size={20} /> : <AntIcon name="like2" color={bg} size={20} />}
                            </TouchableOpacity>
                            <Text>{likeNb}</Text>
                        </HStack>
                    </Box>
                </HStack>
                {reply ?
                    <HStack justifyContent="space-around">
                        <TextArea width={300} h={10} />
                        <Button h={10} onPress={() => onSendComment()}><Feather name="send" color={colorText} size={18} /></Button>
                    </HStack> : <></>
                }
            </VStack>
        </Box>
    )
}

export default PostComponent