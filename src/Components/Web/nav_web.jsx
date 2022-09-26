import { Logo } from "../Global/Logo"
import { AiOutlineRightCircle, AiOutlineDownCircle } from "react-icons/ai"
import { GoCircleSlash } from "react-icons/go"

import { CTA } from "../Global/CTA"
import { Link as RLink, useLocation } from "react-router-dom"
import { Box, Flex, VStack, Text, HStack, IconButton, useColorModeValue, Heading, Link } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { CustomButton } from "../Global/button"
import { Arrow } from '../../Assets/arrow'
import { YLogo } from "../../Assets/ylogo"
import { Socials } from "./socials_web"

const links = [ 
  {'field': 'community', 'active':false, 
    'sublinks': [
      { 'field': 'philosophy', 'active':false, 'available':false},
      { 'field': 'press', 'active':false, 'available':false},
      { 'field': 'join us', 'active':false, 'available':false}
    ]
}, 
  {'field': 'invest', 'active':false, 
    'sublinks': [
      { 'field': 'collection', 'active':false, 'available':false},
      { 'field': 'marketplace', 'active':false, 'available':false},
      { 'field': 'launchpad', 'active':false, 'available':true},
      { 'field': 'store', 'active':false, 'available':false}
    ]
}, 
  {'field': 'about', 'active':true, 
    'sublinks': [
      { 'field': 'roadmap', 'active':false, 'available':true},
      { 'field': 'whitepaper', 'active':false, 'available':true, 'external':true, 'url':'https://docs.yclub.io/overview/yclub'},
      { 'field': 'team', 'active':false, 'available':true}
    ]
  }
]

export const LandingLogo = () => {
  const [clicked, setClicked] = useState()
  return(
    <>
      <Box position={'absolute'} top={5} left={10}>
        <Box position={'fixed'} bg={useColorModeValue('dark','light')} layerStyle={'button'} width={'auto'} height={'auto'} zIndex={5}>
          <HStack>
            <Box _hover={{bg:'whiteAlpha.200'}} px={2} >
              <Link as={RLink} to={'/'}>
                <YLogo />
              </Link>
            </Box>
            <Socials />
          </HStack>
        </Box>
        <Box py={'55px'} >
          <Heading variant={"Landing"} color={'light'}> {useLocation().pathname.replace("/","")} </Heading>
        </Box>
      </Box>
      <Box ml={"10%"} px={10} display={'flex'}>
        <Box height={'100vh'}>
            <Flex position={'relative'} top={"18%"} width={'60vw'} left={0}>
                <VStack position={'absolute'} zIndex={2} left={-150} top={150} alignItems={'left'}>
                    {links.map( (d,idx) =>
                      <LinkBox key={idx} item={idx} clicked={clicked} setClicked={setClicked} offset={idx} {...d} />
                    )}
                </VStack>
                <Logo marginLeft={50} right={190} logoWidth={'10%'} BackgroundWidth={"300px"}/>
              </Flex>
        </Box>
      </Box>
      <CTA />
    </>
  )
}

const LinkBox = (props) => {
  return(
  <div position={'static'}>
      <Box layerStyle={'button'} width={'auto'} height={'auto'} pl={2.5} onClick={ () => {props.setClicked(props.item)} }>
          <HStack justifyContent={'space-between'}>
              <Text variant={'webmenu'}> {props.field} </Text>
              <IconButton color={props.clicked === props.item ? 'accent':useColorModeValue('dark','light')} variant={'ghost'} icon={props.clicked === props.item ? <AiOutlineDownCircle/> : <AiOutlineRightCircle/>} rounded={'full'} zIndex={1} fontSize={"40px"}/>
          </HStack>
      </Box>
      {
          props.clicked === props.item && (
              <Box position={'relative'} top={(180) - 45*(1+props.offset)} left={30} overflow={'visible'}>
                  {props.sublinks.map( (d2,index) => (
                          <Box position={'absolute'} top={index*55+"px"} left={index*55+"px"} overflow={'visible'} >
                                      <LinkButton {...d2} />
                          </Box>
                  ) )}
              </Box>
          )
      }
  </div>
  )
}

const LinkButton = (props) => {
const [link, setLink] = useState(props.field);
const [active, setActive] = useState(false);
useEffect( () => {
  active ? setLink('/') : setLink(props.field);
}, [active])
return(
  <>
  {props.external ? ( 
    <Link isExternal href={props.url} style={{margin:20}} 
    onClick = {() => setActive(!active)}>  
  
      <CustomButton 
              buttonHeight={'auto'}
              buttonWidth={'260px'}
              variant={'webmenu'} 
              regular_text={props.field} 
              icon={(<Arrow 
                  strokeWidth={'0.25px'}
                  width={'45px'}
                  height={'45px'}
                  fill={'#2491EB'}
                  />)} 
              rotation={ {transform: 'rotate(-46.69deg)'}}  /> 
    </Link>
  ) : (
    <Link as={RLink} to={props.available? link : '/'} style={{margin:20}} 
          onClick = {() => setActive(!active)}>
          {props.available ? (   
        active ?
            <CustomButton 
                    buttonHeight={'auto'}
                    buttonWidth={'260px'}
                    variant={'webmenu'} 
                    regular_text={props.field} 
                    icon={(<Arrow 
                        strokeWidth={'0.25px'}
                        width={'45px'}
                        height={'45px'}
                        fill={'#2491EB'}
                        />)} 
                    rotation={ {transform: 'rotate(-46.69deg)'}}  />
            :
            <CustomButton
                    buttonHeight={'auto'}
                    buttonWidth={'260px'}
                    variant={'webmenu'} 
                    regular_text={props.field} 
                    icon={ (<Arrow 
                        strokeWidth={'0.25px'}
                        width={'45px'}
                        height={'45px'}
                        fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')}
                        />)} 
                    rotation={ {transform: 'rotate(46.69deg)'}}  />
        ) : (<CustomButton
          buttonHeight={'auto'}
          buttonWidth={'260px'}
          variant={'webmenu'} 
          regular_text={props.field} 
          icon={ (<GoCircleSlash fontSize={'45px'} style={{padding:10}}
              />)} 
            />) }
      </Link> 
      )
    }
  </>
  )
}