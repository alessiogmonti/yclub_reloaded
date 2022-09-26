import { Link, IconButton, Heading, Box, useDisclosure, VStack, Divider, useColorModeValue } from '@chakra-ui/react'
import { AiFillCloseCircle, AiFillLeftCircle } from 'react-icons/ai'
import { useState } from 'react'
import { Base } from './Base'
import { Link as RLink } from 'react-router-dom'

const mainmenu = [ 
  {'field': 'community', 'active':false, 
    'sublinks': [
      {
        'field': 'philosophy', 'active':false, 'link': '/'
      },
      {
        'field': 'press', 'active':false, 'link': '/'
      },
      {
        'field': 'join us', 'active':false, 'link': '/'
      }
    ]
}, 
  {'field': 'invest', 'active':false, 
    'sublinks': [
      {
        'field': 'collection', 'active':false, 'link': '/'
      },
      {
        'field': 'marketplace', 'active':false, 'link': '/'
      },
      {
        'field': 'launchpad', 'active':false, 'link': '/launchpad'
      },
      {
        'field': 'store', 'active':false, 'link': '/'
      }
    ]
}, 
  {'field': 'about', 'active':true, 
    'sublinks': [
      {
        'field': 'roadmap', 'active':false, 'link': '/roadmap'
      },
      {
        'field': 'whitepaper', 'active':false, 'link': '/'
      },
      {
        'field': 'team', 'active':false, 'link': '/team'
      }
    ]
  }
]

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
      <Base direction={'left'} toggle={isOpen} content={<MenuLinks/>} />
    </Box>
  )
}

const MenuLinks = () => {
  const [active, setActive] = useState(2)
  const toggle = (id) => setActive(id)
  return (
  <Box zIndex={6}>
    <Heading variant="Landing" textAlign={'center'}>
      <Link as={RLink} to={"/"}>
        HOME 
      </Link>
    </Heading>
    <VStack mt={10} spacing={10} align={'center'}>
      { mainmenu.map( (d, index) => 
          <Heading onClick={() => toggle(index)} variant="Menu" textAlign={'center'} color={index==active? 'white' : useColorModeValue('rgba(240,240,240,0.9)','rgba(155,155,155,1)')}>
            {d.field}
          </Heading>
        )}
      <Divider width={'60%'}/> 
      <VStack mt={10} spacing={'20%'} align={'center'}>     
        { mainmenu[active].sublinks.map( (d) =>
              // <NextLink href={d.link} passHref>
                <Link as={RLink} to={d.link} >
                  <Heading variant="SubMenu" textAlign={'center'} >
                    {d.field}
                  </Heading>
                </Link>
              )
            }
      </VStack>
    </VStack>
  </Box>
  )
}