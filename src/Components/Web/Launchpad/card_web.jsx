import { Image, Box, Flex, Spacer, useColorModeValue, 
    Heading, Progress, HStack, Text, 
    Badge } from '@chakra-ui/react';

import { BuyButton } from "../../Global/buyButton";
import { Ethereum } from "../../../Assets/Launchpad/ethereum"
import { Dollar } from "../../../Assets/Launchpad/dollar"
import lanaImg from '../../../Assets/Launchpad/yachts_animation.gif'
import { AiFillCloseCircle } from 'react-icons/ai';


export const Card = (props) => (
<div style={{transform:"scale(0.9)"}}>
    {/* <Flex position={'absolute'} top={0} width={'100%'} px={1} gap={1}>
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
    </Flex> */}
    <Box width={'100%'} verticalAlign={'top'} alignItems={'center'} maxWidth={['30vw','30vw','40vw','60vw']}  justifyContent={'center'}>
    <Flex position={'relative'} top={20} px={1} gap={4} zIndex={3} left={"70px"}>
        <Box layerStyle={'button'} height={'auto'} width={'auto'} border={null} px={3} verticalAlign={'center'} justifyContent={'center'} alignItems={'center'} >
            <Heading fontSize={"30px"}>
                107M / 351" SUPER YACHT LANA
            </Heading>
        </Box>
    </Flex>
        <Image src={lanaImg} alt='Lana_arctic' borderRadius={'65px'} position={'relative'} style={{zIndex:1}} left={10} width={'75%'} />
        <Flex justifyContent={'center'} position={'relative'} style={{zIndex:0}} width={'auto'} >
            <Box   
                position={'absolute'}
                bg={useColorModeValue('rgba(255,255,255,0.5)', 'dark')} 
                borderColor={'accent'} borderWidth={'1px'} width={"75%"}
                top={'-65vh'}
                height={'75vh'}
                borderRadius={'60px'} >
                    <Box position={'relative'} left={'58%'} height={'100%'} top={'45%'} width={'80%'} alignItems={'flex-start'} justifyContent={'flex-start'} transform={'rotate(90deg)'} transformOrigin={'top'}>
                        {props.stock? (<>  
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
                                        {/* <Text> {props.stock}% </Text>  */}
                                        <Spacer/>
                                        <Text> {props.stock_num}/{props.stock_amt} </Text>
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
    <Flex position={'absolute'} bottom={10} width={'10%'} ml={10} px={1} gap={4} zIndex={3}>
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
</div>
)
