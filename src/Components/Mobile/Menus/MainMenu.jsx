import { Link, IconButton, Center, Heading, Box, useDisclosure, VStack, Divider, useColorModeValue } from '@chakra-ui/react'
import { AiFillCloseCircle, AiFillLeftCircle } from 'react-icons/ai'
import { useState } from 'react'
import { Base } from './Base'
import { Link as RLink } from 'react-router-dom'

import MenuLinks from '../../../Data/menuLinks'

export function Menu(){
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box position={'fixed'} style={{zIndex:3}}>
      <IconButton
        variant="outline"
        rounded="full"
        position="fixed"
        bg={'whiteAlpha.800'}
        color={'dark'}
        _dark = {{
            color:'accent',
            bg:'blackAlpha.800'
        }}
        top={4}
        left={4}
        fontSize={'35'}
        icon={isOpen ? <AiFillCloseCircle /> : <AiFillLeftCircle />}
        onClick={onToggle}
        aria-label="Toggle Theme"
        colorScheme="blue"
        style={{zIndex:10}}
      />
      <Base direction={'left'} toggle={isOpen} content={<NavLinks/>} />
    </Box>
  )
}

const NavLinks = () => {
  const [active, setActive] = useState(2)
  const toggle = (id) => setActive(id)
  return (
  <Box zIndex={6} height={'100%'} maxH={'100vh'}>
    <Heading variant="Landing" textAlign={'center'}>
      <Link as={RLink} to={"/"}>
        HOME 
      </Link>
    </Heading>
    <VStack mt={10} spacing={5} align={'center'}>
      { MenuLinks.map( (d, index) => 
          <Heading onClick={() => toggle(index)} variant="Menu" textAlign={'center'} color={index==active? 'accent' : useColorModeValue('rgba(5,21,52,0.15)','rgba(155,155,155,1)')}>
            {d.field}
          </Heading>
        )}
      <Divider width={'60%'}/> 
      <VStack mt={10} spacing={8} align={'center'} overflow={'visible'}> 
        { MenuLinks[active].sublinks ? ( 
            MenuLinks[active].sublinks.map( (d) =>
                <Link as={RLink} to={d.availalbe? d.field : '/'} >
                  <Heading variant="SubMenu" textAlign={'center'} color={d.available? useColorModeValue('dark','light') : useColorModeValue('rgba(5,21,52,0.15)','rgba(155,155,155,1)') }>
                    {d.field}
                  </Heading>
                </Link>
              )
            ) : (
              MenuLinks[active].url && 
                <Center >
                  <Link isExternal href={MenuLinks[active].url}> 
                    <Heading color={'accent'}> 
                      COMING SOON
                    </Heading> 
                  </Link>
                </Center>
            )
        }
      </VStack>
    </VStack>
  </Box>
  )
}