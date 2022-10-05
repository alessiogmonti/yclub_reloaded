import { Box, IconButton, useColorModeValue, Text, HStack } from '@chakra-ui/react'
import { Container } from './Container'
import { CustomButton } from './button'
import { Arrow } from '../../Assets/arrow'
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
  <Box layerStyle={'button'} maxWidth={'max-content'}>
    <HStack>
      <Text variant={'main-link'}> DOCS </Text>
      <IconButton aria-label={'whitepaper'} variant={'solid'} border={'1px solid black'} isRound icon={<GrDocumentPerformance fontSize={'33px'}/>} />
    </HStack>
  </Box>
)