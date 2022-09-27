import { Image, Box, Flex, Spacer, useColorModeValue, 
    Heading, Progress, HStack, Text, 
    Badge } from '@chakra-ui/react';

import { BuyButton } from "../../Global/buyButton";
import { Ethereum } from "../../../Assets/Launchpad/ethereum"
import { Dollar } from "../../../Assets/Launchpad/dollar"
import lanaImg from '../../../Assets/Launchpad/yachts_animation.gif'
import { AiFillCloseCircle } from 'react-icons/ai';
import { useEffect } from 'react';


export const Card = (props) => {
    return(
        <div className='card'>
            <Box height={'100%'} width={'100%'} verticalAlign={'top'} alignItems={'center'} maxWidth={['30vw','30vw','40vw','60vw']}  justifyContent={'center'}>
            <Flex position={'relative'} top={"55px"} px={1} gap={4} zIndex={3} left={[null,null,null,'40px','55px','70px']}>
                <Box layerStyle={'button'} height={'auto'} width={'auto'} minWidth={'max-content'} border={null} px={[null,null,null,2,2,3]} verticalAlign={'center'} justifyContent={'center'} alignItems={'center'} >
                    <Heading fontSize={[null,null,null,"28px","29px","30px"]}>
                        107M / 351" SUPER YACHT LANA
                    </Heading>
                </Box>
            </Flex>
                <Box>
                    <Image src={lanaImg} alt='Lana_arctic' borderRadius={'45px'} position={'relative'} style={{zIndex:1}} left={10} width={'65%'} />
                    <Flex position={'absolute'} bottom={[null,null,null,"10%","30%","20%"]} width={'10%'} ml={[null,null,null,"22px","28px",20]} gap={4} zIndex={3}>
                        <BuyButton
                            height={'100%'}
                            available
                            regular_text={'connect wallet'}
                            direction={'row-reverse'}
                            position={'relative'}
                            icon={props.active? <Ethereum
                                fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')}
                                /> : <AiFillCloseCircle fontSize={'55px'}/>} />
                        <Spacer/>
                        <BuyButton 
                            available
                            direction={'row-reverse'}
                            regular_text={'credit card'}
                            icon={props.active?<Dollar
                                fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')}
                                /> : <AiFillCloseCircle fontSize={'55px'}/>} /> 
                    </Flex> 
                </Box>
                <Flex justifyContent={'center'} position={'relative'} style={{zIndex:0}} width={'auto'} height={'100%'}>
                    <Box
                        className='background'
                        position={'absolute'}
                        left={"12%"}
                        bg={useColorModeValue('rgba(255,255,255,0.5)', 'dark')} 
                        borderColor={'accent'} borderWidth={'1px'} width={[null,null,null,"70%","68%","65%"]}
                        bottom={[null,null,"50vh","65vh","75vh","79vh"]}
                        height={[null,null,"10%","50%","75%","80%"]}
                        borderRadius={'60px'} >
                            <Box position={'relative'} left={'55%'} height={'100%'} top={'45%'} width={'80%'} alignItems={'flex-start'} justifyContent={'flex-start'} transform={'rotate(90deg)'} transformOrigin={'top'}>
                                {props.active? (<>  
                                            <HStack>
                                                <Text> {props.stock}% </Text> 
                                                <Spacer/>
                                                <Text>
                                                    <Badge fontSize='15px' > {props.access} </Badge>
                                                </Text>
                                                <Spacer/>
                                                <Text> {props.stock_num}/{props.stock_amt} </Text>
                                            </HStack>
                                            <Progress size={'md'} 
                                                value={props.stock} 
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
                                        {props.time}
                                        </Heading>
                                </HStack>
                            </Box>
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

