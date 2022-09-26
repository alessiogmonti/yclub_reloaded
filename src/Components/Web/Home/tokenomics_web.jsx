import { Allocations } from "../../../Assets/Home/Chart/webChart"
import { Container } from "../../Global/Container"
import { Box, Heading, VStack, Flex, useColorModeValue } from "@chakra-ui/react"
import { useRef } from "react"

const WebTokenomics = () => {
    const ref = useRef(null)
    // const [hover, setHover ] = useState(false)
    // useEffect( () => {
    //     const paths = ref.current.querySelectorAll("g")
    //     console.log(paths)
    //     paths.forEach(d => d.setAttribute('class','hasStroke'))
    // }, [hover])
    return (
    <Container width={'100vw'} mt={20} mr={20} ml={20} height={'100vh'} top={50}>
        <Flex>
        <Box mr={10} display={'block'}>
            <VStack align={'left'} spacing={10}>
                <Heading variant="Landing" fontSize={["60px","70px","80px","70px","90px"]} color={'light'} lineHeight={["60px","70px","100px"]}>
                $SYC <br/> TOKENOMICS
                </Heading>
                <Box>
                    <Heading variant="SubText" >
                    MAXIMUM SUPPLY
                    </Heading>
                    <Heading variant="special" fontSize={['40px','40px','50px','50px','60px']}>
                    1 000 000 000
                    </Heading>
                </Box>
                <Box>
                    <Heading variant="SubText">
                    INITIAL SUPPLY
                    </Heading>
                    <Heading variant="special" fontSize={['40px','40px','50px','50px','60px']}>
                    117 200 000
                    </Heading>
                </Box>
                <Heading variant="Landing" fontSize={["60px"]} color={'light'} pt={100}>
                0% TAX
                </Heading>
            </VStack>
        </Box>
        <Box display={'flex'} justifyContent={'flex-end'} >
            <Box position={[null,null,'relative','absolute']} right={0} mr={20} ml={10}>
                <Allocations width={"50vw"} fill={useColorModeValue('rgba(255,255,255,0.8)', 'dark')} ref={ref}/>
            </Box>
        </Box>
        </Flex>
    </Container>
    )
}

export default WebTokenomics