import { Box, Button, Image, Input, VStack, Text, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <Box border={'1px solid'} borderColor={'gray.500'} p={5} borderRadius={5}>
            <VStack>
                <Image src='/jolly_trader.png'></Image>
                <Text textAlign={'center'}>
                    Share, Connect, and Trade with your trading card community.
                </Text>
                {/* <Image src='/logo.png' h={24} cursor={'pointer'} alt='Jolly Roger' ></Image> */}
                <Input placeholder='Email' fontSize={14} type='email' />
                <Input placeholder='Password' fontSize={14} type='password' />
                {isLogin && (
                    <Input placeholder='Confirm Password'
                        fontSize={14} type={'password'} />
                )}
                <Button w={'full'} colorSchem={'blue'} size={'sm'} fontSize={14}>
                    {isLogin ? 'Log In' : 'Sign Up'}
                </Button>
                <Flex
                    alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
                    <Box flex={2} h={'1px'} bg={'gray.500'}></Box>
                    <Text mx={1} color={'white'}> OR </Text>
                    <Box flex={2} h={'1px'} bg={'gray.500'}></Box>
                </Flex>
            </VStack>
        </Box>
    )
}

export default AuthForm
