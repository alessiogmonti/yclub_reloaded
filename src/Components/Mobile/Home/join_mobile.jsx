import { Hero } from '../../Mobile/Hero'
import { Container } from '../../Global/Container'
import { Divider, Box, Show, IconButton, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { FaTwitter, FaTelegram, FaInstagram, FaMedium, FaCheckDouble } from 'react-icons/fa'
import FormManager from "../../../Utils/form"

export const MobileJoin = () => (
    <Container height="100vh" width={'100vw'} position={'relative'} gap={[null, "10%"]} direction={'column'}>
        <Hero title={'JOIN'} subtitle={'THE CLUB'}/>
        <Socials />
        <SignUp/>
        <Divider my={5} width={'50%'}/>
        <Show breakpoint="(max-height:400px)">
            <Box height={'20vh'} margin={'auto'}/>
        </Show>
    </Container>
)

const Socials = () => (
    <Box height={"25%"} width={'60%'}
        bg={'light'} _dark={{bg:'dark', borderColor:'accent'}} borderColor={'white'} borderWidth={'1px'} rounded={'50px'}>
        <SimpleGrid columns={2} spacingX={1} width={'100%'} height={'100%'}>
            <IconButton variant={'ghost'} color={'accent'} isRound size={'xl'} fontSize={'70px'} aria-label={'twitter'} icon={<FaTwitter />} />
            <IconButton variant={'ghost'} color={'accent'} isRound size={'xl'} fontSize={'70px'} aria-label={'telegram'}icon={<FaTelegram />} />
            <IconButton variant={'ghost'} color={'accent'} isRound size={'xl'} fontSize={'70px'} aria-label={'instagram'}icon={<FaInstagram />} />
            <IconButton variant={'ghost'} color={'accent'} isRound size={'xl'} fontSize={'70px'} aria-label={'medium'}icon={<FaMedium />} />
        </SimpleGrid>
    </Box>
)

const SignUp = () => (
    <Box max-width={'50%'} pt={50} align={'center'}> 
        <FormManager CTA_reg={'SUBMIT'} CTA_icon={<FaCheckDouble color={useColorModeValue('rgba(5,21,52,0.99)', 'white')} fontSize={'31px'}/>} 
            top={0} right={0} border={`3px solid ${useColorModeValue('rgba(5,21,52,0.99)', 'white')}`} pad={'10px'}
        />
    </Box>
)