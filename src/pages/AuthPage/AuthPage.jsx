import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

const AuthPage = () => {
    return (
        <Flex border={'1px red solid'}minHeight={'100vh'} minWidth={''} justifyContent={'center'} alignItems={'center'} px={4}>
            <Container padding={0}>
                auth
            </Container>
        </Flex>
    )
}

export default AuthPage
