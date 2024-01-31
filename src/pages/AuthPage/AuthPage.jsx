import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm'

const AuthPage = () => {
    return (
        <Flex minHeight={'100vh'} minWidth={''} justifyContent={'center'} alignItems={'center'} px={4}>
            <Container minW={'container.md'} px={0} >
                <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
                    {/* Left Side */}
                    <Box display={{ base: 'none', md: 'block' }}>
                        <Image src="/jolly_roger_phone.png" alt="phone-pic" borderRadius={'10px'} />
                    </Box>

                    <VStack>
                        <AuthForm />
                        <Box textAlign={'center'}></Box>
                        <Flex gap={5} justifyContent={'center'}>
                            <Image src='/playstore.png' h={10} />
                            <Image src='/microsoft.png' h={10} />
                        </Flex>
                    </VStack>
                </Flex>
            </Container>
        </Flex>
    )
}

export default AuthPage
