import { Image, Box, Flex, Spacer, useColorModeValue, Heading, Progress, HStack, Text, Badge } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import lanaImg from '../../../Assets/Launchpad/yachts_animation.gif'
import { MetaMaskBuy } from '../../../Utils/Mint/metaMaskModal';
import { CrossMintBuy } from '../../../Utils/Mint/crossMintModal';
import SecondsToTime from '../../../Utils/Mint/secondsToTime';

export const Card = (props) => {
    const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    const [time, setTime] = useState(0)
    const [account, setAccount] = useState(null)

    const currentDate = Math.floor(new Date()/1000)

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(SecondsToTime( props.end - currentDate ));
        }, 1000);
        return () => clearTimeout(timer);
    })

    return(
        <div className='card'>
            <Box height={'100%'} width={'100%'} verticalAlign={'top'} alignItems={'center'} maxWidth={['30vw','30vw','40vw','60vw']}  justifyContent={'center'}>
                <Flex position={'relative'} top={"55px"} px={1} gap={4} zIndex={3} left={[null,null,null,'40px','55px','10%']}>
                    <Box layerStyle={'button'} height={'auto'} width={'auto'} minWidth={'max-content'} border={null} px={[null,null,null,2,2,5]} verticalAlign={'center'} justifyContent={'center'} alignItems={'center'} >
                        <Heading fontSize={[null,null,null,"28px","29px","30px"]}>
                            107M / 351" SUPER YACHT LANA
                        </Heading>
                    </Box>
                </Flex>
                <Box height={'100vh'} width={'100%'} verticalAlign={'top'} alignItems={'center'} maxWidth={['30vw','30vw','40vw','60vw']}  justifyContent={'center'}>
                    <Flex justifyContent={'center'} position={'relative'} style={{zIndex:0}} width={'auto'} height={'100%'}>
                        <Box
                            className='background'
                            position={'absolute'}
                            left={[null,null,null,"15%","13%","15%"]}
                            bg={useColorModeValue('rgba(255,255,255,0.5)', 'dark')} 
                            borderColor={[null,null,null,'accent','accent','accent']} borderWidth={'1px'} 
                            width={[null,null,null,"60%","60%","55%"]}
                            top={'7%'}
                            height={[null,null,"10%","50%","65%","68%"]}
                            borderRadius={'60px'} >
                                <Box position={'relative'} left={[null,null,null,'55%','65%','69%']} height={'90%'} top={'45%'} width={'60%'} alignItems={'flex-start'} justifyContent={'flex-start'} transform={'rotate(90deg)'} transformOrigin={'top'}>
                                    {props.stock? (
                                            <>  
                                                <HStack>
                                                    <Text> {props.stock_pct}% </Text> 
                                                    <Spacer/>
                                                    <Text>
                                                        <Badge fontSize='15px' > {props.access} </Badge>
                                                    </Text>
                                                    <Spacer/>
                                                    <Text> {props.stock}/{props.stock_amt} </Text>
                                                </HStack>
                                                <Progress size={'md'} 
                                                    value={props.stock_pct} 
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
                                <Box position={'absolute'} bottom={5} left={10}>
                                    <HStack gap={10} justifyContent={'space-between'}>
                                            <Text fontSize={'25px'}>
                                                {props.rarity}
                                            </Text>
                                            <Spacer />
                                            <Heading pl={1} color='accent' fontSize={'44px'}>
                                            {props.countdown? time : props.status}
                                            </Heading>
                                    </HStack>
                                </Box>
                        </Box>
                    </Flex>
                    <Box position={'absolute'} height={'100vh'} width={'auto'} top={10}>
                        <Box className={'ImgContainer'} height={'100%'} width={'auto'} top={10}>
                            {isSafari ? (
                                <Image mt={5} className={'image'} src={lanaImg} alt='Lana_arctic' borderRadius={'45px'} position={'relative'} style={{zIndex:1}} left={[null,null,null,"15%","3%","5%"]} display={'block'} width={[null,null,null,'40%','45%','55%']} height={'auto'}/>
                            ) : (
                                <Image mt={5} className={'image'} src={lanaImg} alt='Lana_arctic' borderRadius={'45px'} position={'relative'} style={{zIndex:1}} left={[null,null,null,"15%","7%","8%"]} boxSize={[null,null,null,"400px","500px","600px"]} objectFit={'cover'} display={'block'} />
                                )}
                            <Flex position={'relative'} bottom={[null,null,null,'10%','10%','10%']} width={'10%'} 
                                ml={[null,null,null,"60px","40px","70px"]} gap={[null,null,null,2,3,4]} zIndex={3} direction={[null,null,null,'row','row','row']}>

                                {props.countdown ? (
                                    <>
                                        <MetaMaskBuy account={account} setAccount={setAccount} />
                                            <Spacer/>
                                        <CrossMintBuy max={props.max} contract={props.address} account={account}/> 
                                    </> 
                                ) : null}
                            </Flex> 
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

