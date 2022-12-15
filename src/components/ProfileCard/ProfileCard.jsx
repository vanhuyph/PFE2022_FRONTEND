import React, { useContext, useState } from 'react';
import {
  VStack,
  Box,
  Heading,
  useColorModeValue,
  HStack,
  Button,
  Text,
} from 'native-base';
import { AuthContext } from '../../contexts/AuthContext';
import SubscriptionService from '../../services/SubscriptionService';

const ProfileCard = ({ user, followed }) => {
  const bg = useColorModeValue('primary.50', 'primary.1000');
  const { userInfo, userToken } = useContext(AuthContext);
  const [followPressed, setFollowPressed] = useState(followed);
  let button;

  let dataToSend = {
    user: userInfo.id,
    subscription: user.id,
  };

  const onPressFollow = () => {
    if (!followPressed) {
      SubscriptionService.createSubscription(dataToSend, userToken)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } else {
      SubscriptionService.deleteSubscription(dataToSend, userToken)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
    setFollowPressed(!followPressed);
  };

  if (user.id === userInfo.id) {
    button = <Box></Box>;
  } else {
    if (!followPressed) {
      button = <Button onPress={onPressFollow}>Follow</Button>;
    } else {
      button = <Button onPress={onPressFollow}>Unfollow</Button>;
    }
  }

  return (
    <Box bg={bg} pt={8} pb={8}>
      <VStack>
        <HStack justifyContent="space-around">
          <Heading size={'2xl'}>{user.username}</Heading>
          {button}
        </HStack>
        <HStack pl={5} pt={10} space={5}>
          <Text>{user.following_count} Subcriptions</Text>
          <Text>{user.followers_count} Followers</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProfileCard;
