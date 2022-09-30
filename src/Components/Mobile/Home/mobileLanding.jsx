import { Hero } from '../../Mobile/Hero'
import { Container } from '../../Global/Container'
import { CTA } from '../../Global/CTA'
import { Logo } from '../../Global/Logo'
import { Box, Divider, Show } from '@chakra-ui/react'

export const MobileLanding = () => (
  <Container height="100vh" direction={'column'} mb={10} >
    <Hero subwidth={'100%'} />
    <Show breakpoint="(max-height:400px)">
      <Box height={"10vh"} width={'100vw'} mt={50}>
        <Logo LogoWidth={'50%'} marginLeft={'35vw'}/>
      </Box>
    </Show>
    <Show breakpoint="(min-height:401px)">
      <Box height={"100vh"} width={'100vw'} mt={50}>
        <Logo />
      </Box>
    </Show>
    <Divider my={2} mb={10} width={'50%'}/>
    <CTA badge_text={<>COMING<br/>SOON</>}/>
  </Container>
)