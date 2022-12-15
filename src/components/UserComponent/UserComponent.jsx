import React, { useCallback, useContext, useState } from 'react';
import { Box, Heading, HStack, Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import SubscriptionService from '../../services/SubscriptionService';

const UserComponent = ({ navigation, user }) => {
  const { userToken, userInfo } = useContext(AuthContext);
  const [follow, setFollow] = useState(user.followed)
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
    navigation.navigate('Profil', { user: user });
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

  return (
    <Box
      p={6}
      borderBottomWidth="0.2"
      borderBottomColor="gray.300"
      _dark={{ bg: 'primary.1000' }}
      _light={{ bg: 'primary.50' }}
    >
      <HStack space={5} justifyContent="space-around">
        <Box justifyContent='center' width={150}>
          <Box>
            <TouchableOpacity onPress={onPressUser}>
              <Box my="auto">
                <Heading size="sm">{user.user.username}</Heading>
              </Box>
            </TouchableOpacity>
          </Box>
        </Box>
        <Box>
          {button}
        </Box>
      </HStack>
    </Box>
  );
};

export default UserComponent;
