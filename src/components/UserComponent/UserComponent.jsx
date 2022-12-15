import React, { useCallback, useContext, useState } from 'react';
import { Box, Heading, HStack, Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import SubscriptionService from '../../services/SubscriptionService';

const UserComponent = ({ navigation, user }) => {
  const { userToken, userInfo } = useContext(AuthContext);
  const [follow, setFollow] = useState(false)
  let button;

  let dataToSend = {
    user: userInfo.id,
    subscription: user.id,
  };

  const createSubscription = () => {
    SubscriptionService.createSubscription(dataToSend, userToken)
      .then((response) => setFollow(true))
      .catch((error) => console.log(error));
  };

  const deleteSubscription = () => {
    SubscriptionService.deleteSubscription(dataToSend, userToken)
      .then((response) => setFollow(false))
      .catch((error) => console.log(error));
  };

  const onPressUser = useCallback(() => {
    navigation.navigate('Profil', { userID: user.id });
  }, [navigation]);

  if (!follow) {
    button = <Button onPress={() => createSubscription()}>
      <Text color="white" bold>
        Follow
      </Text>
    </Button>
  } else {
    button = <Button onPress={() => deleteSubscription()}>
      <Text color="white" bold>
        Unfollow
      </Text>
    </Button>
  }

  console.log(user);

  return (
    <Box
      p={6}
      borderBottomWidth="0.2"
      borderBottomColor="gray.300"
      _dark={{ bg: 'primary.1000' }}
      _light={{ bg: 'primary.50' }}
    >
      <HStack space={5} justifyContent="space-around">
        <TouchableOpacity onPress={onPressUser}>
          <Box my="auto">
            <Heading size="sm">{user.username}</Heading>
          </Box>
        </TouchableOpacity>
        {button}
      </HStack>
    </Box>
  );
};

export default UserComponent;
