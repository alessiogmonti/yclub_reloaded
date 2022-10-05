import lanaImg from '../../../Assets/Launchpad/yachts_animation.gif'

import { Image, Box, Grid, GridItem, Spacer, Center, Heading, Progress, HStack, Text, Badge, AspectRatio } from '@chakra-ui/react';
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
        <Box position={'relative'} display={'flex'} top={'5%'} justifyContent={'center'} verticalAlign={'center'} height={'100%'} width={'100%'} maxWidth={'100%'} margin={'auto'}>
            <Grid
            bg='rgba(255,255,255,0.5)' 
            _dark= {{
                bg:'dark'
            }}
            borderColor='accent'
            borderWidth= '1px'
            borderRadius= '10%'
            templateAreas={`"image image"
                            "info info"
                            "buybuttons buybuttons"`}
            marginBottom={'10%'}
            paddingBottom={'10%'}
            h='70%'
            w='80%'
            maxW={'80%'}
            maxH={'70%'}
            templateRows='(0.8fr 0.1fr 0.1fr)'
            templateColumns='(1fr 1fr)'
            gap={1}
            >
                <GridItem height={'100%'} width={'100%'} minHeight={0} minWidth={0} margin={'auto'} area={'image'} justifyContent={'center'}>
                    <Image src={lanaImg} alt='lana' maxWidth={'100%'} padding={'3%'} display={'block'} maxHeight={'100%'} borderRadius={'10%'} position={'relative'} zIndex={3}/>
                </GridItem>
                <GridItem position={'relative'} minWidth={0} minHeight={0} margin={'auto'} height={'100%'} width={'100%'} area={'info'}>
                        <HStack minWidth={'100%'} padding={'2%'}>
                            <Text color={'accent'} fontWeight={'700'}> 22% </Text>
                            <Spacer/>
                            <Text>
                                <Badge fontSize='15px' mr={2}> RARE </Badge>
                                <Badge fontSize='15px'> PUBLIC </Badge>
                            </Text>
                            <Spacer/>
                            <Heading color={'accent'} fontSize={'29px'}> 12D 11H 10M 30S </Heading>
                            <Spacer/>
                            <Text> 0.12 ETH</Text>
                            <Spacer/>
                            <Text> 100/300</Text>
                        </HStack>
                        <Progress   justifyContent={'center'} verticalAlign={'center'} alignItems={'center'} size={'md'} value={'22%'} bg={'light'} borderColor={'dark'} borderWidth={'0.5px'}
                                        _dark={{bg:'dark', borderColor:'light'}}
                                        colorScheme={'blue'} style={{zIndex:2}} minWidth={'60%'}/>
                </GridItem> 
                <GridItem minWidth={0} minHeight={0} margin={'auto'} height={'100%'} width={'100%'} area={'buybuttons'}>
                    <HStack>
                    <CrossMintBuy max={props.max} contract={props.address} account={account} size={55}/>  
                    <MetaMaskBuy account={account} setAccount={setAccount} size={55}/>
                    </HStack>
                </GridItem>
            </Grid>
        </Box>
    )
}