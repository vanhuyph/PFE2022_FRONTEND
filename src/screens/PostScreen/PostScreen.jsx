import {
  Box,
  Button,
  Heading,
  ScrollView,
  Text,
  useColorModeValue,
  View,
} from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import PostComponent from '../PostComponent/PostComponent';
import CommentService from '../../services/CommentService';
import { AuthContext } from '../../contexts/AuthContext';

const PostScreen = ({ navigation, route }) => {
  const { post } = route.params;
  let thePost = post.post
  const { userInfo, userToken } = useContext(AuthContext);
  const [commentsList, setCommentsList] = useState([]);
  const bg = useColorModeValue('primary.50', 'primary.1000');

  useEffect(() => {
    CommentService.getAllCommentsFromPostID(userToken, userInfo.id, thePost.id)
      .then((response) => {
        setCommentsList(response);

      })
      .catch((error) => console.log(error));
  }, [post.post.id]);

  return (
    <Box bg={bg}>
      <NavBar navigation={navigation} title="Post" />
      <PostComponent navigation={navigation} post={post} />
      <Heading py={7} px={2}>
        Comments
      </Heading>
      <ScrollView height="63%">
        {commentsList.length > 0 ? commentsList.map((comment) => (
          <PostComponent
            key={comment.id}
            navigation={navigation}
            post={comment}
          />
        )) : <Box></Box>}
      </ScrollView>
    </Box>
  );
};

export default PostScreen;
