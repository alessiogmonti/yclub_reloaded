import logo from '../../Assets/ylogo.gif'
import { Flex, Stack, Box, Image, useColorModeValue } from "@chakra-ui/react"
// import Image from 'next/image'
import { Background } from '../../Assets/ellipse'

export const Logo = (props) => (
    <Box position='relative' height={'100%'}
        ml={props.marginLeft}
        mt={4} >
        <Media LogoWidth={props.LogoWidth} />
        <Flex position={'absolute'} top={5} right={props.right} style={{zIndex:0}} >
            <Background width={props.BackgroundWidth} fill={useColorModeValue('rgba(255,255,255,0.5)', 'rgba(5,21,52,0.68)')} />
        </Flex>
    </Box>
)

const Media = (props) => (
    <Image 
        maxW={'600px'}
        width={props.LogoWidth ? props.LogoWidth : '95%'}
        position={'relative'}
        src={logo} 
        style={{zIndex:1}}
    />
)
