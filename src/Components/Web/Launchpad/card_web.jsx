import { Image, Box, Flex, Spacer, useColorModeValue, Heading, Progress, HStack, Text, Badge, AspectRatio } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import lanaImg from '../../../Assets/Launchpad/yachts_animation.gif'
import { MetaMaskBuy } from '../../../Utils/Mint/metaMaskModal';
import { CrossMintBuy } from '../../../Utils/Mint/crossMintModal';
import SecondsToTime from '../../../Utils/Mint/secondsToTime';
import Round from '../../../abi/Round'

export const Card = (props) => {
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

    return(
        <div className='card'>
            <Box height={'100%'} width={'100%'} verticalAlign={'top'} alignItems={'center'} maxWidth={['30vw','30vw','40vw','60vw']}  justifyContent={'center'}>
                <Flex position={'relative'} top={"75px"} px={1} gap={4} zIndex={3} left={[null,null,null,'40px','55px','13%']}>
                    <Box layerStyle={'button'} height={'auto'} width={'auto'} minWidth={'max-content'} border={null} px={[null,null,null,2,2,5]} verticalAlign={'center'} justifyContent={'center'} alignItems={'center'} >
                        <Heading fontSize={[null,null,null,"28px","29px","30px"]}>
                            107M / 351" SUPER YACHT LANA
                        </Heading>
                    </Box>
                </Flex>
                <Box height={'100vh'} width={'100%'} verticalAlign={'top'} alignItems={'center'} 
                maxWidth={['30vw','30vw','40vw','60vw']} justifyContent={'center'}>
                    <Box justifyContent={'center'} position={'relative'} style={{zIndex:0}} width={'auto'} height={'100%'}>
                        <Box
                            margin={'auto'}
                            className='background'
                            position={'absolute'}
                            left={[null,null,null,"15%","13%","16%"]}
                            bg={useColorModeValue('rgba(255,255,255,0.5)', 'dark')} 
                            borderColor={[null,null,null,'accent','accent','accent']} borderWidth={'1px'} 
                            width={[null,null,null,"60%","60%","55%"]}
                            top={'8%'}
                            height={[null,null,"10%","50%","65%","68%"]}
                            borderRadius={'60px'} >
                                <Box position={'relative'} left={[null,null,null,'55%','65%','69%']} height={'90%'} top={'45%'} width={'60%'} alignItems={'flex-start'} justifyContent={'flex-start'} transform={'rotate(90deg)'} transformOrigin={'top'}>
                                    {supply? (
                                            <>  
                                                <HStack>
                                                    <Text> {pct}% </Text> 
                                                    <Spacer/>
                                                    <Text>
                                                        <Badge fontSize='15px' > {props.access} </Badge>
                                                    </Text>
                                                    <Spacer/>
                                                    <Text> {supply}/{props.stock_amt} </Text>
                                                </HStack>
                                                <Progress size={'md'} 
                                                    value={pct} 
                                                    bg={'light'} borderColor={'dark'} borderWidth={'0.5px'} 
                                                    _dark={{ bg:'dark', borderColor:'light'}}
                                                    colorScheme={'blue'} style={{zIndex:2}}/>
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
                                        )}
                                </Box>
                                <Box position={'absolute'} bottom={5} left={4}>
                                    <HStack gap={5} justifyContent={'space-between'}>
                                            <Text fontSize={'25px'} pl={5}>
                                                {props.rarity}
                                            </Text>
                                            <Spacer />
                                            <Heading color='accent' fontSize={'44px'}>
                                            {countdown? time : status}
                                            </Heading>
                                    </HStack>
                                </Box>
                        </Box>
                    </Box>
                    <Box className={'ImgContainer'} position={'absolute'} height={'60%'} width={'100%'} left={'6%'} top={10}>
                        <AspectRatio position={'relative'} maxW={'60vh'} width={'100%'} height={'auto'} ratio={1} top={50}>
                            <Image src={lanaImg} alt='Lana_arctic' borderRadius={'45px'} boxSize={[null,null,null,"100%","100%","100%"]} objectFit={'cover'} />
                        </AspectRatio>
                        <Flex position={'relative'} bottom={[null,null,null,'10%','10%','15%']} width={'100%'} zIndex={100}
                            m={'10px'} mr={'10px'} gap={[null,null,null,2,3,4]} direction={[null,null,null,'row','row','column']}>
                            {countdown && (
                                <Box width={'10%'}>
                                    <CrossMintBuy max={props.max} contract={props.address} account={account} size={55}/> 
                                        <Spacer/>
                                    <MetaMaskBuy account={account} setAccount={setAccount} size={55}/>
                                </Box> 
                            )}
                        </Flex> 
                 </Box>
                </Box>
            </Box>
        </div>
    )
}

