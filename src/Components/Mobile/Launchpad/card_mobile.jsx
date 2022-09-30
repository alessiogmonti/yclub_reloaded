import { Image, Box, Flex, Spacer, useColorModeValue, 
        Heading, Progress, HStack, Text, 
        Badge } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import lanaImg from '../../../Assets/Launchpad/yachts_animation.gif'
import { MetaMaskBuy } from '../../../Utils/Mint/metaMaskModal'
import { CrossMintBuy } from '../../../Utils/Mint/crossMintModal';
import SecondsToTime from '../../../Utils/Mint/secondsToTime'
import Round from '../../../abi/Round'

export const Card = (props) => {
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
    <>
        <Flex position={'absolute'} top={0} width={'100%'} px={1} gap={1}>
            <Box layerStyle={'button'} height={'100%'} px={3} >
                <Heading textAlign={'center'} color={'accent'}>
                    {props.price}ETH
                </Heading>
            </Box>
            <Spacer/>
            <Box layerStyle={'button'} height={'100%'} px={3}>
                <Heading textAlign={'center'}>
                    {props.rarity}
                </Heading>
            </Box>
        </Flex>
        <Box width={'100%'} my={'55px'} alignItems={'center'} justifyContent={'center'}>
            <Image src={lanaImg} alt='Lana_arctic' borderRadius={'65px'} position={'relative'} style={{zIndex:2}}/>
            <Flex justifyContent={'center'} position={'relative'} style={{zIndex:0}} >
                <Box   
                    position={'relative'}
                    bg={useColorModeValue('rgba(255,255,255,0.5)', 'dark')} 
                    borderColor={'accent'} borderWidth={'1px'} width={"80vw"}
                    top={-100}
                    height={'22vh'}
                    borderRadius={'60px'} >
                        <Box position={'relative'} left={'10%'} height={'100%'} top={110} width={'80%'} alignItems={'center'} justifyContent={'center'} >
                            {supply ? (
                                <>
                                    <Progress size={'xs'} 
                                        value={pct} 
                                        bg={'light'} borderColor={'dark'} borderWidth={'0.5px'} 
                                        _dark={{ bg:'dark', borderColor:'light'}}
                                        colorScheme={'blue'} style={{zIndex:2}}/>
                                    <HStack>
                                        <Text> {pct}% </Text> 
                                        <Spacer/>
                                        <Text> {supply}/{props.stock_amt} </Text>
                                    </HStack>
                                </> ) : (
                                <>
                                    <Progress size={'xs'} 
                                        isIndeterminate
                                        bg={'light'} borderColor={'dark'} borderWidth={'0.5px'} 
                                        _dark={{ bg:'dark', borderColor:'light'}}
                                        colorScheme={'blue'} style={{zIndex:2}}/>
                                    <HStack>
                                        <Spacer/>
                                        <Text> {props.stock_amt}/{props.stock_amt} </Text>
                                    </HStack>
                                </>
                                )
                                }
                            <HStack gap={1}>
                                <Text fontSize={'15px'}>
                                <Badge> {props.rarity} </Badge>
                                </Text>
                                <Spacer />
                                <Heading pl={1} color='accent' fontSize={'20px'}>
                                   {countdown ? time : status}
                                </Heading>
                            </HStack>
                        </Box>
                </Box>
            </Flex>
        </Box>
        <Flex position={'absolute'} bottom={20} left={-6} width={'100vw'} px={10} gap={2}>
            {countdown? (
               <Flex position={'relative'} width={'100vh'} direction={'row'} margin={'auto'} justifyContent={'space-between'}>
                    <MetaMaskBuy account={account} setAccount={setAccount} iconSize={'45'}/>
                    <Spacer/>
                    <CrossMintBuy max={props.max} contract={props.address} account={account} iconSize={'45'}/> 
                </Flex>  
            ) : null}
        </Flex>
    </>
)
}
