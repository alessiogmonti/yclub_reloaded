import { Image, Box, Flex, Spacer, useColorModeValue, 
        Heading, Progress, HStack, Text, 
        Badge } from '@chakra-ui/react';

import { BuyButton } from "../../Global/buyButton";
import { Ethereum } from "../../../Assets/Launchpad/ethereum"
import { Dollar } from "../../../Assets/Launchpad/dollar"
import lanaImg from '../../../Assets/Launchpad/yachts_animation.gif'

import { AiFillCloseCircle } from 'react-icons/ai';


export const Card = (props) => (
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
                            {props.stock? (
                                <>
                                    <Progress size={'xs'} 
                                        value={props.stock} 
                                        bg={'light'} borderColor={'dark'} borderWidth={'0.5px'} 
                                        _dark={{ bg:'dark', borderColor:'light'}}
                                        colorScheme={'blue'} style={{zIndex:2}}/>
                                    <HStack>
                                        <Text> {props.stock}% </Text> 
                                        <Spacer/>
                                        <Text> {props.stock_num}/{props.stock_amt} </Text>
                                    </HStack>
                                </> ) : (
                                <>
                                    <Progress size={'xs'} 
                                        isIndeterminate
                                        bg={'light'} borderColor={'dark'} borderWidth={'0.5px'} 
                                        _dark={{ bg:'dark', borderColor:'light'}}
                                        colorScheme={'blue'} style={{zIndex:2}}/>
                                    <HStack>
                                        {/* <Text> {props.stock}% </Text>  */}
                                        <Spacer/>
                                        <Text> {props.stock_num}/{props.stock_amt} </Text>
                                    </HStack>
                                </>
                                )
                                }
                            <HStack gap={1}>
                                <Text fontSize={'15px'}>
                                <Badge> {props.access} </Badge>
                                </Text>
                                <Spacer />
                                <Heading pl={1} color='accent' fontSize={'24px'}>
                                   {props.time}
                                </Heading>
                            </HStack>
                        </Box>
                </Box>
            </Flex>
        </Box>
        <Flex position={'absolute'} bottom={0} width={'100%'} px={1} gap={4}>
            <BuyButton
                available
                regular_text={'MINT'}
                position={'relative'}
                icon={props.active? <Ethereum
                    fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')}
                    /> : <AiFillCloseCircle fontSize={'55px'}/>} />
            <Spacer/>
            <BuyButton 
                available
                direction={'row-reverse'}
                regular_text={'CARD'}
                icon={props.active? <Dollar
                    fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')}
                    /> : <AiFillCloseCircle fontSize={'55px'}/>} />
        </Flex>
    </>
)
