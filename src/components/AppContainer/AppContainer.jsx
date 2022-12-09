import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider, extendTheme } from 'native-base'
import theme from '../../theme'

const AppContainer = (props) => {
    return (
        <NavigationContainer>
            <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
        </NavigationContainer>
    )
}

export default AppContainer