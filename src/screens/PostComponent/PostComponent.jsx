import React, { useState, useContext, useCallback, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    Heading,
    Box,
    VStack,
    HStack,
    useColorModeValue,
    Text,
    Button,
    TextArea,
} from 'native-base';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LikeService from '../../services/LikeService';
import RetweetService from '../../services/RetweetService';
import { AuthContext } from '../../contexts/AuthContext';
import CommentService from '../../services/CommentService';
const color = '#812bd6';

const PostComponent = ({ navigation, post }) => {
    let thePost = post.post

    const [content, setContent] = useState();
    const [liked, setLiked] = useState(post.liked);
    const [rePosted, setRePosted] = useState(post.retweeted);
    const [reply, setReply] = useState(false);
    const [commentNb, setCommentNb] = useState(thePost.comment_count);
    const [likeNb, setLikeNb] = useState(thePost.like_count);
    const [retweetNb, setRetweetNb] = useState(thePost.retweet_count);
    const { userInfo } = useContext(AuthContext);
    const bg = useColorModeValue('black', '#838383');
    const colorText = useColorModeValue('black', 'white');


    let dataToSendLike = {
        user: userInfo.id,
        post: post.post.id,
    };
    let dataToSendRt = {
        user: userInfo.id,
        post: post.post.id,
    };
    let commentToSend = {
        user: userInfo.id,
        content: content,
    };

    const onPressLike = () => {
        if (!liked) {
            setLiked(true);
            setLikeNb(likeNb + 1);
            LikeService.addLike(userInfo.tokens, dataToSendLike)
                .then((response) => {
                    return response;
                })
                .catch((error) => console.log(error));
        } else {
            setLiked(false);
            setLikeNb(likeNb - 1);
            LikeService.deleteLike(userInfo.tokens, dataToSendLike)
                .then((response) => {
                    return response;
                })
                .catch((error) => console.log(error));
        }
    };

    const onPressRePost = () => {
        if (!rePosted) {
            setRePosted(true);
            setRetweetNb(retweetNb + 1);
            RetweetService.addRetweet(userInfo.tokens, dataToSendRt)
                .then((response) => {
                    return response;
                })
                .catch((error) => console.log(error));
        } else {
            setRePosted(false);
            setRetweetNb(retweetNb - 1);
            RetweetService.deleteRetweet(userInfo.tokens, dataToSendRt)
                .then((response) => {
                    return response;
                })
                .catch((error) => console.log(error));
        }
    };

    const onPressReply = () => {
        if (!reply) {
            setReply(true);
        } else {
            setReply(false);
        }
    };

    const onSendComment = () => {
        CommentService.addComment(userInfo.tokens, commentToSend, post.post.id)
            .then((response) => {
                return response;
            })
            .catch((error) => console.log(error));
        setCommentNb(commentNb + 1);
        setReply(false);
    };

    const onPressPost = () => {
        if (navigation) {
            //onPress={onPressUser}
            navigation.navigate('Post', { post: post });
        }
    };

    const onPressUser = useCallback(() => {
        navigation.navigate('Profil', { userID: post.post.user })
    }, [navigation])

    return (
        <Box
            p={5}
            borderBottomWidth="0.2"
            borderBottomColor="gray.300"
            _dark={{ bg: 'primary.1000' }}
            _light={{ bg: 'primary.50' }}
        >
            <VStack space={5}>
                <TouchableOpacity >
                    <Heading size="sm">{post.post.author_pseudo}</Heading>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressPost}>
                    <Text>{post.post.content}</Text>
                </TouchableOpacity>
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
                                {rePosted ? (
                                    <AntIcon name="retweet" color={color} size={20} />
                                ) : (
                                    <AntIcon name="retweet" color={bg} size={20} />
                                )}
                            </TouchableOpacity>
                            <Text>{retweetNb}</Text>
                        </HStack>
                    </Box>
                    <Box>
                        <HStack space={2}>
                            <TouchableOpacity onPress={() => onPressLike()}>
                                {liked ? (
                                    <AntIcon name="like1" color={color} size={20} />
                                ) : (
                                    <AntIcon name="like2" color={bg} size={20} />
                                )}
                            </TouchableOpacity>
                            <Text>{likeNb}</Text>
                        </HStack>
                    </Box>
                </HStack>
                {reply ? (
                    <HStack justifyContent="space-around">
                        <TextArea
                            width={300}
                            h={10}
                            onChangeText={(text) => setContent(text)}
                        />
                        <Button h={10} onPress={() => onSendComment()}>
                            <Feather name="send" color={colorText} size={18} />
                        </Button>
                    </HStack>
                ) : (
                    <></>
                )}
            </VStack>
        </Box>
    );
};

export default PostComponent;
