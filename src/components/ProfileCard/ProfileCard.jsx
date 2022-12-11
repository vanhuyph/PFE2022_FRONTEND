import React from 'react';
import { VStack, Box, Heading, useColorModeValue } from 'native-base';

const ProfileCard = () => {
  const bg = useColorModeValue('primary.50', 'primary.1000')

  return (
    <Box bg={bg} pt={8} pb={8}>
      <VStack space="2">
        <Heading size={"2xl"} px="4">
          Profile name
        </Heading>
        <Box px="4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          consectetur!
        </Box>
      </VStack>
    </Box>
  );
};

export default ProfileCard;
