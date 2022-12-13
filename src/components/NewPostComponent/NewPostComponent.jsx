import { Box, Button, Heading, HStack, TextArea, VStack } from 'native-base'
import React from 'react'

const NewPostComponent = () => {
    return (
        <>
            <Heading mt={5}>New Post</Heading>
            <TextArea mt={5}></TextArea>
            <Button mt={5} width="100%">Send</Button>
            <Box size={400}></Box>
        </>
    )
}

export default NewPostComponent