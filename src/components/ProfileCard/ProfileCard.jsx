import React, { useContext, useState } from 'react';
import { VStack, Box, Heading, useColorModeValue, HStack, Button, Text } from 'native-base';
import { AuthContext } from '../../contexts/AuthContext';

const ProfileCard = ({ user }) => {
  const bg = useColorModeValue('primary.50', 'primary.1000');
  const { userInfo } = useContext(AuthContext)
  const [followPressed, setFollowPressed] = useState(false)
  let button;

  const onPressFollow = () => {
    if (!followPressed) {
      //l'utilisateur doit se follow
    } else {
      //l'utilisateur doit se unfollow
    }
    setFollowPressed(!followPressed)
  }

  if (user.id === userInfo.id) {
    button = <Box></Box>
  } else {
    if (!followPressed) {
      button = <Button onPress={onPressFollow}>Follow</Button>
    } else {
      button = <Button onPress={onPressFollow}>Unfollow</Button>
    }
  }



  return (
    <Box bg={bg} pt={8} pb={8}>
      <VStack>
        <HStack justifyContent="space-around">
          <Heading size={'2xl'}>
            {user.username}
          </Heading>
          {button}
        </HStack>
        <HStack pl={5} pt={10} space={5}>
          <Text>{user.following_count} Subcriptions</Text>
          <Text>{user.followers_count} Followers</Text>
        </HStack>
      </VStack>
    </Box >
  );
};

export default ProfileCard;
