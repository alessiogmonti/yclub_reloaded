import { Box, Heading, HStack, IconButton, Image, Flex } from "@chakra-ui/react"
import { AiOutlineDownCircle } from "react-icons/ai";

import { PhotoGrid } from "./photoGrid";
import lana from "../../../Assets/Lifestyle/lanaShowcase.gif"

export const Landing = () =>(
    <Box width={'100vw'}>
        <Box position={'absolute'} right={'5%'} top={200} zIndex={3}>
            <Heading variant={"WebLanding"}>
                YCLUB
            </Heading>
            <Heading position={'relative'} float={'right'} variant={"Landing"} color={'light'} fontSize={'50px'} letterSpacing={"5px"}>
                Lifestyle
            </Heading>
        </Box> 
        <Box position={'relative'} bottom={90} left={['2%','5%','18%','34%','51%']}>
            <HStack width={'100%'}>
                <Heading variant={"Landing"} color={'light'} fontSize={['25px','25px','25px','28px','35px']} letterSpacing={"5px"}>
                    YCLUB'S SUPER YACHT LIFESTYLE
                </Heading>
                <IconButton size={'xl'} variant={'outline'} rounded={"full"} color={'light'} _hover={{color:'white', bg:'accent'}} icon={<AiOutlineDownCircle fontSize={"50px"}/>} onClick={() => window.scrollBy(0,1000)}/>
            </HStack>
        </Box> 
        <Box position={'relative'} float={'right'}>
            <Heading width={'80%'} variant={"SubLanding"} textTransform={'lowercase'} fontSize={'22px'}>
                Enjoy exclusive benefits, access to events, amenities, and programs in the super yacht industry and around the world starting today!
            </Heading>
        </Box>
        <Flex width={'100%'} justifyContent={'center'}>
            <Image src={lana} maxW={'90%'} borderRadius={'5%'} />
        </Flex>
        <HStack position={'relative'} width={'100%'} left={['2%','5%','18%','34%','61%']}>
            <Heading variant={"Landing"} color={'light'} fontSize={['25px','25px','25px','28px','35px']} letterSpacing={"5px"}>
                YACHTING DESTINATIONS
            </Heading>
            <IconButton size={'xl'} variant={'outline'} rounded={"full"} color={'light'} _hover={{color:'white', bg:'accent'}} icon={<AiOutlineDownCircle fontSize={"50px"}/>} onClick={() => window.scrollBy(0,1000)}/>
        </HStack>
        <Flex width={'100%'} justifyContent={'center'}>
            <Box height={'100vh'} layerStyle={'cardFrame'} width={'90%'}>
                <PhotoGrid />
            </Box>
        </Flex>
    </Box>
)