import { Box, Button, FormControl, Heading, TextArea } from 'native-base';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import PostService from '../../services/PostService';
import { AuthContext } from '../../contexts/AuthContext';

const NewPostComponent = ({ onClose }) => {
  const [text, setText] = useState();
  const { userToken } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);

  let dataToSend = {
    user: userInfo.id,
    content: text,
  };
  const addPost = () => {
    setText()
    PostService.addPost(userToken, dataToSend)
      .then((response) => {
        onClose()
        return response;
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Heading mt={5}>New Post</Heading>
      <FormControl isRequired>
        <TextArea mt={5} onChangeText={(text) => setText(text)} />
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
