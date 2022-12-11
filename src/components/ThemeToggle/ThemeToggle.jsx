import { Box, HStack, Switch, useColorMode, Text } from 'native-base'
import React from 'react'

const ThemeToggle = () => {
    const {colorMode, toggleColorMode} = useColorMode()

  return (
    <HStack space={4}>
        <Text bold>Light</Text>
        <Switch isChecked={colorMode !== 'light'} onToggle={toggleColorMode} />
        <Text bold>Dark</Text>
    </HStack>
  )
}

export default ThemeToggle