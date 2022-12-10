import React from 'react';
import { VStack, Box, Heading } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileCard = () => {
  return (
    <SafeAreaView>
      <Box border="1" borderRadius="md">
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
    </SafeAreaView>
  );
};

export default ProfileCard;
