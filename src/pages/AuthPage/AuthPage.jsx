import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'

const AuthPage = () => {
    return (
        <Flex minHeight={'100vh'} minWidth={''} justifyContent={'center'} alignItems={'center'} px={4}>
            <Container minW={'container.md'} px={0} >
                {/* Left Side */}
                <Box display={{base: 'none', md: 'block'}}>
                    <Image src="public/Jolly Roger mag 261413bc-0a0c-445a-9749-2d5c64e89a7a.png" alt="phone-pic" borderRadius={'10px'}/>
                {/* Right Side */}
                </Box>
                <div>
                    Authenticate here
                </div>
            </Container>
        </Flex>
    )
}

export default AuthPage
