import lanaImg from '../../../Assets/Launchpad/yachts_animation.gif'

import { Image, Box, Flex, GridItem, Spacer, Center, Heading, Progress, HStack, Text, Badge, AspectRatio, VStack } from '@chakra-ui/react';
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

        if( currentDate > props.start && currentDate < props.end){
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
        <Box position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} height={'100%'} width={'100%'} maxWidth={'100%'} margin={'auto'} mt={'5%'} >
            <Box position={'relative'} zIndex={4} layerStyle={'cardFrame'} px={5} mx={5} borderRadius={'40px'} top={'9%'} justifyContent={'center'} verticalAlign={'center'} maxW={'max-content'}>
                <Heading fontSize={[null,null,null,"18px","22px","25px"]}>
                    107M / 351" SUPER YACHT LANA
                </Heading>
            </Box>
            <VStack py={'3%'} my={'3%'} width={'100%'} height={'95%'} justifyContent={'center'} >
                <Image src={lanaImg} alt='lana' maxWidth={'82%'} padding={'1%'} display={'block'} maxHeight={'82%'} borderRadius={'10%'} position={'relative'} zIndex={3} />
                <Box my={10} justifyContent={'center'} width={'60%'}>
                    {supply ? (
                        <>
                            <Flex padding={'2%'} width={'100%'} justifyContent={'space-between'} direction={[null,null,null,'column','row','row']}>
                                <Text color={'accent'} fontWeight={'300'} mr={3}> {pct}% </Text>
                                <Text width={'100%'} > {supply}/{props.stock_amt}</Text>
                                <Text width={'100%'}>
                                    <Badge fontSize={['8px','10px','12px']}> {props.access} </Badge>
                                </Text>
                                <Heading ml={2} color={'accent'} fontWeight={'300'} fontSize={['15px','20px','25px']} width={'100%'} minWidth={[null,null,null,'60%','80%','max-content']}> {countdown? time: status} </Heading>
                            </Flex>
                            <Progress   justifyContent={'center'} verticalAlign={'center'} alignItems={'center'} size={'md'} value={pct} bg={'light'} borderColor={'dark'} borderWidth={'0.5px'}
                                        _dark={{bg:'dark', borderColor:'light'}}
                                        colorScheme={'blue'} style={{zIndex:2}} maxWidth={'100%'}/>
                        </> ) : ( 
                            <>
                                <Flex padding={'2%'} width={'100%'} justifyContent={'space-between'}>
                                    <Text width={'100%'} > {props.stock_amt}/{props.stock_amt}</Text>
                                    <Text width={'100%'}>
                                                <Badge fontSize='15px'> {props.access} </Badge>
                                    </Text>
                                    <Heading color={'accent'} fontWeight={'300'} fontSize={'25px'} width={'100%'} minWidth={'max-content'}> {status} </Heading>
                                </Flex>
                                <Progress   justifyContent={'center'} verticalAlign={'center'} alignItems={'center'} size={'xs'} 
                                            isIndeterminate bg={'light'} borderColor={'dark'} borderWidth={'0.5px'}
                                        _dark={{bg:'dark', borderColor:'light'}}
                                        colorScheme={'blue'} style={{zIndex:2}} maxWidth={'100%'}/>
                            </>
                         )
                    }
                </Box>
                {countdown &&
                    <Box py={5} >
                        <HStack>
                            <CrossMintBuy max={props.max} contract={props.address} account={account} size={55}/>  
                            <MetaMaskBuy account={account} setAccount={setAccount} size={55}/>
                        </HStack>
                    </Box>
                }            
            </VStack>
            <Box position={'absolute'} layerStyle={'cardFrame'} width={'70%'} height={'74%'} zIndex={-1}/>
            <Box position={'relative'} zIndex={4} layerStyle={'cardFrame'} px={5} mx={5} mb={'10%'} borderRadius={'40px'} justifyContent={'center'} verticalAlign={'center'} maxW={'max-content'}>
                <HStack>
                    <Heading fontSize={[null,null,null,"28px","29px","25px"]}>
                        {props.price} ETH
                    </Heading>
                    <Heading fontSize={[null,null,null,"28px","29px","25px"]} color={'accent'}>
                        {props.rarity}
                    </Heading>
                </HStack>
            </Box>
        </Box>
    )
}