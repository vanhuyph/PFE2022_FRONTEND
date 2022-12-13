import React from 'react';
import { Box, Heading, HStack, Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

const UserComponent = ({ user }) => {
  return (
    <Box
      p={6}
      borderBottomWidth="0.2"
      borderBottomColor="gray.300"
      _dark={{ bg: 'primary.1000' }}
      _light={{ bg: 'primary.50' }}
    >
      <HStack space={5} justifyContent="space-around">
        <TouchableOpacity>
          <Box my="auto">
            <Heading size="sm">{user.username}</Heading>
          </Box>
        </TouchableOpacity>
        <Button>
          <Text color="white" bold>
            Follow
          </Text>
        </Button>
      </HStack>
    </Box>
  );
};

export default UserComponent;
