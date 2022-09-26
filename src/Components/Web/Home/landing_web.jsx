import { Box, Heading, IconButton, HStack } from "@chakra-ui/react";
import { AiOutlineDownCircle } from "react-icons/ai";

export const WebLanding = () => (
    <Box width={'100vw'}>
        <Box position={'absolute'} right={'5%'} top={200} zIndex={3}>
            <Heading variant={"WebLanding"}>
                YCLUB
            </Heading>
            <Heading position={'relative'} float={'right'} variant={"Landing"} color={'light'} fontSize={'50px'} letterSpacing={"5px"}>
                Token Launch
            </Heading>
        </Box> 
        <Box position={'relative'} bottom={90} left={['25%','35%','48%','54%','61%']}>
            <HStack width={'100%'}>
                <Heading variant={"Landing"} color={'light'} fontSize={['25px','25px','25px','28px','35px']} letterSpacing={"5px"}>
                    TRAILER- TOKENOMICS
                </Heading>
                <IconButton size={'xl'} variant={'outline'} rounded={"full"} color={'light'} _hover={{color:'white', bg:'accent'}} icon={<AiOutlineDownCircle fontSize={"50px"}/>} onClick={() => window.scrollBy(0,1000)}/>
            </HStack>
        </Box> 
    </Box>
)