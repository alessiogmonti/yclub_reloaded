import { Box, IconButton, useColorModeValue, Text, HStack, Link } from '@chakra-ui/react'
import { Container } from './Container'
import { CustomButton } from './button'
import { Arrow } from '../../Assets/arrow'
import { Whitepaper } from '../../Assets/whitepaper'
import { GrDocumentPerformance } from 'react-icons/gr'

const arrowStyle = {
  strokeWidth: '0.25px',
  width: '73px',
  height: '73px',
}

export const CTA = (props) => (
  // <Container
  //   flexDirection="row"
  //   position="fixed"
  //   bottom={2}
  //   width="full"
  //   maxWidth="3xl"
  //   py={3}
  //   px={5}
  //   zIndex={2}
  //   justifyContent={'space-around'}
  //   mx={9} my={2}
  // >
    < CustomButton  
                    variant={'main-link'} 
                    accent_text={"BUY"}
                    regular_text={'$SYC'}
                    badge_text={props.badge_text} 
                    icon={<Arrow 
                      strokeWidth={'0.25px'}
                      width={'73px'}
                      height={'73px'}
                      fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')}
                      // {...arrowStyle} 
                      />} 
                    rotation={{transform: 'rotate(46.69deg)'}}
                    right={-2}
                    top={-2.5}
                    />
  // </Container>
)

export const WhitePaper = () => (
  <Box layerStyle={'button'} maxWidth={'max-content'} pl={5} verticalAlign={'middle'}>
    <Link isExternal href={'https://docs.yclub.io/overview/yclub'}>
      <HStack position={'relative'} top={1} zIndex={5} minH={'max-content'}>
          <Text variant={'main-link'} _hover={{color:'accent'}} px={3} py={0.5}> DOCS </Text>
          <IconButton aria-label={'whitepaper'} variant={'ghost'} px={5} py={3} isRound icon={<Whitepaper color={useColorModeValue('rgba(5,21,52,0.99)', 'white')} size={'59px'}/>} zIndex={5} />
      </HStack>
    </Link>
  </Box>
)