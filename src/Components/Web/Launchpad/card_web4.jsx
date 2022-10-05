import lanaImg from '../../../Assets/Launchpad/yachts_animation.gif'

import { Image, Box, Grid, GridItem, Spacer, Center, Heading, Progress, HStack, Text, Badge, AspectRatio, VStack } from '@chakra-ui/react';
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
        <Box position={'relative'} display={'flex'} justifyContent={'center'} flexDirection={'column'} verticalAlign={'top'} height={'100%'} width={'100%'} maxWidth={'100%'} margin={'auto'} mt={'5%'}>
            <VStack py={'10%'} my={'10%'} width={'100%'} height={'100%'} justifyContent={'center'} >
                <Image src={lanaImg} alt='lana' maxWidth={'70%'} padding={'3%'} display={'block'} maxHeight={'70%'} borderRadius={'10%'} position={'relative'} zIndex={3}/>
                <Box my={10} justifyContent={'center'} maxWidth={'100%'}>
                    <HStack padding={'2%'} width={'100%'} minWidth={'100%'}>
                                <Text color={'accent'} fontWeight={'700'}> 22% </Text>
                                <Spacer/>
                                <Text width={'100%'}>
                                    <Badge fontSize='15px' mr={2}> RARE </Badge>
                                    <Badge fontSize='15px'> PUBLIC </Badge>
                                </Text>
                                <Spacer/>
                                <Heading color={'accent'} fontSize={'20px'} width={'100%'}> 12D 11H 10M 30S </Heading>
                                <Spacer/>
                                <Text width={'100%'}> 0.12 ETH</Text>
                                <Spacer/>
                                <Text width={'100%'}> 100/300</Text>
                    </HStack>
                    <Progress   justifyContent={'center'} verticalAlign={'center'} alignItems={'center'} size={'md'} value={'22'} bg={'light'} borderColor={'dark'} borderWidth={'0.5px'}
                                _dark={{bg:'dark', borderColor:'light'}}
                                colorScheme={'blue'} style={{zIndex:2}} maxWidth={'90%'}/>
                </Box>
                <Box py={5} >
                    <HStack>
                        <CrossMintBuy max={props.max} contract={props.address} account={account} size={55}/>  
                        <MetaMaskBuy account={account} setAccount={setAccount} size={55}/>
                    </HStack>
                </Box>
            </VStack>
            {/* <Box position={'absolute'} layerStyle={'cardFrame'} height={'80%'} width={'80%'} justifyContent={'center'} /> */}
        </Box>
    )
}