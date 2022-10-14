import { Container } from '../../Global/Container'
import { Center, Circle, Text, SimpleGrid, Box, VStack, Divider, Show } from '@chakra-ui/react'
import { Allocations } from '../../../Assets/Home/Chart/mobileChart'
import { CustomButton } from '../../Global/customButton'
import { Info } from '../../../Assets/Home/Icons/info'
import { Details } from '../Menus/Home/TokenomicsDetails'
import { useEffect, useState } from 'react'

const iconStyle = {
    stroke: 'rgba(5,21,52,0.88)',
    strokeWidth: '0.25px',
    width: '57px',
    height: '57px',
    fill: 'white'
  }
  
const allocations = [
    [
        { 'color': '#175EA1', 'value': 30, 'field': 'Staking Rewards', 'class': 'cls-2'},
        { 'color': '#16375f', 'value': '22.8', 'field': 'Treasury', 'class': 'cls-5'},
        { 'color': '#1e3346', 'value': '15', 'field': 'Liquidity', 'class': 'cls-4'}
    ],
    [
        { 'color': '#f4f4f5', 'value': '11.2', 'field': 'Marketing', 'class': 'cls-8'},
        { 'color': '#def3fd', 'value': '9.6', 'field': 'Team', 'class': 'cls-6'},
    ],
    [
        { 'color': '#a0ddf9', 'value': '5.5', 'field': 'NFT Holders', 'class': 'cls-7'},
        { 'color': '#62c5f0', 'value': '3.5', 'field': 'Team Private Sale', 'class': 'cls-1'},
        { 'color': '#3FABE1', 'value': '2.4', 'field': 'Advisory', 'class': 'cls-3'},
    ]
]

export const MobileTokenomics = () => {
    const [active, setActive] = useState(0)
    const toggle = (id) => setActive(id)

    useEffect( () => {
        allocations.forEach(
            (d) => {
                d.map( (d2) =>
                document.getElementsByClassName(d2.class)[0].classList.remove('hasStroke')
                )
            }
        )
        allocations[active].map( (d) => {
            document.getElementsByClassName(d.class)[0].classList.add('hasStroke')
        })
        }, [active])

    return (
    <Container height={'100vh'} pt={'7%'} mx={[3,"5%"]} direction={'column'}>
        <Show breakpoint="(max-height:400px)">
            <Box width={'50vw'} marginTop={'50vh'} padding={10}>
                <Allocations />
            </Box>
        </Show>
        <Allocations />
        <Show breakpoint="(max-height:400px)">
            <Center mx={[null,"2%"]} position={'relative'} my={10} rounded={'40px'} width={'100%'} height={'51%'} bg='light' _dark={{bg:'dark', borderColor:'accent'}} border={'1px'} borderColor={'white'}>
                <SimpleGrid pl={2} columns={3} spacingX={2} width={'45%'} verticalAlign={'center'} align={'center'} alignItems={'center'} >
                    {allocations.map( (d,index) => (
                        <VStack onClick={() => toggle(index)} border={active == index ? '1px' : null} borderColor={'dark'} _dark={{borderColor:'white'}} rounded={'full'} px={6} py={3} width={'110%'}> {d.map( (d2) => (
                            <Circle bg={d2.color} size={9} m={1}/>
                            )
                        )} </VStack>
                        )
                    )}
                </SimpleGrid>
                <SimpleGrid pl={4} ml={1} spacingY={5} spacingX={0} width={'55%'}>
                    {allocations[active].map( (d) => (
                            <Text color={'dark'} _dark={{color:'white'}}> {d.field}: {d.value}% </Text>
                        )
                    )}
                </SimpleGrid>
            </Center>
        </Show>
        <Show breakpoint="(min-height:401px)">
            <Center mx={[null,"2%"]} position={'relative'} my={10} rounded={'40px'} width={'100%'} height={'21%'} bg='light' _dark={{bg:'dark', borderColor:'accent'}} border={'1px'} borderColor={'white'}>
                <SimpleGrid pl={2} columns={3} spacingX={2} width={'45%'}>
                    {allocations.map( (d,index) => (
                        <VStack onClick={() => toggle(index)} border={active == index ? '1px' : null} borderColor={'dark'} _dark={{borderColor:'white'}} rounded={'full'} px={6} py={3} width={'110%'}> {d.map( (d2) => (
                            <Circle bg={d2.color} size={9} m={1}/>
                            )
                        )} </VStack>
                        )
                    )}
                </SimpleGrid>
                <SimpleGrid pl={4} ml={1} spacingY={5} spacingX={0} width={'55%'}>
                    {allocations[active].map( (d) => (
                            <Text color={'dark'} _dark={{color:'white'}}> {d.field}: {d.value}% </Text>
                        )
                    )}
                </SimpleGrid>
            </Center>
        </Show>
        <Divider my={10} width={['50%','5%']}/>
            <Box height={'80px'}>
                <CustomButton variant={'main-link'} regular_text={'TOKENOMICS'} icon={<Info {...iconStyle} />} content={<Details />} />
            </Box>
        <Divider mt={10} width={['50%','5%']}/>
    </Container>
    )
}