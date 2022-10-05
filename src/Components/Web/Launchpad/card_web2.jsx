import lanaImg from '../../../Assets/Launchpad/yachts_animation.gif'

import { Image, Box, Flex, Spacer, useColorModeValue, Heading, Progress, HStack, Text, Badge, AspectRatio } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MetaMaskBuy } from '../../../Utils/Mint/metaMaskModal';
import { CrossMintBuy } from '../../../Utils/Mint/crossMintModal';
import SecondsToTime from '../../../Utils/Mint/secondsToTime';
import Round from '../../../abi/Round'

export const Card = (props) => {
 // code will be changed after image is fixed
    const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    const [time, setTime] = useState(0)
    const [account, setAccount] = useState(null)

    const currentDate = Math.floor(new Date() /1000)
    const [supply, setSupply] = useState(null)
    const [loading, setLoading] = useState(true)
    const [ pct, setPct ] = useState(0)
    const [countdown, setCountdown ] = useState(false)
    const [ status, setStatus] = useState(null)

    useEffect( () => {
        currentDate < props.start? (
            setStatus('COMING SOON') ): ( currentDate > props.end ? setStatus('SOLD OUT') : null ) //temporary

        if( currentDate > props.start && currentDate < props.end){ //currentDate > d.start &&
            setCountdown(true);
            const round = Round(props.address);
            (async () => {
                try{
                    const supply = (await round.roundTotalSupply()).toNumber()
                    setSupply(supply)
                    setPct(( supply/ props.stock_amt) * 100)
                } catch (error){
                    console.log(error);
                } finally {
                    setLoading(false)
                }
            })()
        }
    }, )

    useEffect(() => {
        if (countdown){
            const timer = setTimeout(() => {
                setTime(SecondsToTime( props.end - currentDate ));
            }, 1000);
            return () => clearTimeout(timer);
        }
    })

    return (
        <Box position={'relative'} display={'flex'} justifyContent={'center'} height={'100%'} width={'100%'}>
            <Box padding={'5%'} display={'flex'}  width={'100%'} height={"100%"}>
                    <Image src={lanaImg} alt='lana' maxWidth={'85%'} padding={"3%"} marginTop={'10%'} marginBottom={'10%'} maxHeight={"85%"} borderRadius={'10%'} position={'relative'} right={"3%"} bottom={'8%'} zIndex={3}/>
                    <Box layerStyle={'cardFrame'} bottom={"13%"} m={"2%"} height={'70%'} left={'15%'} width={'75%'} position={'absolute'} zIndex={2}>
                        <Box position={'relative'} height={'86%'} width={'70%'} transform={'rotate(90deg)'} transformOrigin={'top'} left={'62%'} top={'45%'}>
                            <>
                                <HStack>
                                    <Text color={'accent'} fontWeight={'700'}> 22% </Text>
                                    <Spacer/>
                                    <Text>
                                        <Badge fontSize='15px'> PUBLIC </Badge>
                                    </Text>
                                    <Spacer/>
                                    <Text> 0.12 ETH</Text>
                                    <Spacer/>
                                    <Text> 100/300</Text>
                                </HStack>
                                <Progress size={'md'} value={'22%'} bg={'light'} borderColor={'dark'} borderWidth={'0.5px'}
                                _dark={{bg:'dark', borderColor:'light'}}
                                colorScheme={'blue'} style={{zIndex:2}} />
                            </>
                        </Box>
                        <Box position={'relative'} height={'11%'} width={'80%'} margin={'3%'}>
                            <HStack gap={5} justifyContent={'space-between'}>
                                <Text fontSize={'17px'} pl={10}>
                                    RARE
                                </Text>
                                <Spacer />
                                <Heading color='accent' fontSize={'29px'}>
                                    12D 11H 10M 30S
                                </Heading>
                            </HStack>
                        </Box> 
                    </Box>
            </Box>
        </Box>
    )
}