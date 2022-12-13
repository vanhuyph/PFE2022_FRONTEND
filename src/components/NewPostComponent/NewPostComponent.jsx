import { Box, Button, FormControl, Heading, TextArea } from 'native-base';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import PostService from '../../services/PostService';
import { AuthContext } from '../../contexts/AuthContext';

const NewPostComponent = () => {
  const [text, setText] = useState();
  const { userToken } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);

  let dataToSend = {
    user: userInfo.id,
    content: text,
  };
  const addPost = () => {
    PostService.addPost(userToken, dataToSend)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Heading mt={5}>New Post</Heading>
      <FormControl isRequired>
        <TextArea mt={5} onChangeText={(text) => setText(text)}></TextArea>
        <Button
          mt={5}
          width="100%"
          onPress={() => {
            addPost();
          }}
        >
          Send
        </Button>
      </FormControl>
      <Box size={400}></Box>
    </>
  );
};

export default NewPostComponent;
