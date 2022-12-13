import React from 'react';
import { VStack, Box, Heading, useColorModeValue } from 'native-base';

const ProfileCard = ({ user }) => {
  const bg = useColorModeValue('primary.50', 'primary.1000');

  return (
    <Box bg={bg} pt={8} pb={8}>
      <VStack space="2">
        <Heading size={'2xl'} px="4">
          {user}
        </Heading>
      </VStack>
    </Box>
  );
};

export default ProfileCard;
