import { Logo } from "../Global/Logo"
import { AiOutlineRightCircle, AiOutlineDownCircle } from "react-icons/ai"
import { GoCircleSlash } from "react-icons/go"
import { MdOutlineBuildCircle } from "react-icons/md"

import { CTA, WhitePaper } from "../Global/CTA"
import { Link as RLink, useLocation } from "react-router-dom"
import { Box, Flex, VStack, Text, HStack, IconButton, useColorModeValue, Heading, Link } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { CustomButton } from "../Global/customButton"
import { Arrow } from '../../Assets/arrow'
import { YLogo } from "../../Assets/ylogo"
import { Socials } from "./socials_web"

import MenuLinks from "../../Data/menuLinks"

export const LandingLogo = () => {
  const [clicked, setClicked] = useState()
  return(
    <>
      <Box position={'absolute'} top={5} left={10} >
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
        <Box pl={'15px'} py={'44px'} >
          <Heading variant={"Landing"} fontSize={'30px'} color={'light'}> {useLocation().pathname.replace("/","")} </Heading>
        </Box>
      </Box>
      <Box ml={"10%"} px={10} display={'flex'}>
        <Box height={'100vh'}>
            <Flex position={'relative'} top={"18%"} width={'60vw'} left={0}>
                <VStack position={'relative'} zIndex={2} left={-150} top={150} alignItems={'left'}>
                  {MenuLinks.map( (d,idx) =>
                  d.sublinks ? 
                    <LinkBox key={idx} item={idx} clicked={clicked} setClicked={setClicked} offset={idx} {...d} />
                    : d.url &&
                    <div position={'static'}>
                      <Box layerStyle={'button'} width={'auto'} height={'auto'} pl={2.5} onClick={ () => {props.setClicked(props.item)} }>
                        {/* <Link isExternal href={d.url} > */}
                          <HStack justifyContent={'space-between'} minWidth={'max-content'}>
                            <Text variant={'webmenu'}> {d.field} </Text>
                            <IconButton color={d.clicked === d.item ? 'accent':useColorModeValue('dark','light')} variant={'ghost'} 
                              icon={d.available ? 
                                    (d.clicked === d.item ? <AiOutlineDownCircle/> : <AiOutlineRightCircle/>) 
                                    : 
                                    <MdOutlineBuildCircle/>} rounded={'full'} zIndex={1} fontSize={"40px"}/>
                          </HStack>
                        {/* </Link> */}
                      </Box>
                    </div> 
                  )}
                </VStack>
                <Logo marginLeft={-150} right={200} LogoWidth={'85%'} BackgroundWidth={400}/>
              </Flex>
        </Box>
      </Box>
      <Box position={'absolute'} top={0} height={'100vh'} width={'100vw'} >
        <HStack position={'fixed'} left={10} bottom={10} gap={3} zIndex={10}>
          <WhitePaper />
          <CTA badge_text={'COMING SOON'}/>
        </HStack>
      </Box>
    </>
  )
}

const LinkBox = (props) => {
  const [open, setOpen] = useState(false)
  return(
  <div position={'static'}>
      <Box layerStyle={'button'} width={'auto'} height={'auto'} pl={2.5} onClick={ () => {props.setClicked(props.item); setOpen(!open)} }>
          <HStack justifyContent={'space-between'}>
              <Text variant={'webmenu'}> {props.field} </Text>
              <IconButton color={props.clicked === props.item ? 'accent':useColorModeValue('dark','light')} variant={'ghost'} icon={props.clicked === props.item ? <AiOutlineDownCircle/> : <AiOutlineRightCircle/>} rounded={'full'} zIndex={1} fontSize={"40px"}/>
          </HStack>
      </Box>
      {
        open ? (props.clicked === props.item && (
          <Box position={'relative'} top={(180) - 45 * ( 1 + props.offset )} left={30} overflow={'visible'}>
            {props?.sublinks.map( (d2,index) => (
              <Box position={'absolute'} top={index*55+"px"} left={index*55+"px"} overflow={'visible'} >
                <LinkButton {...d2} />
              </Box>
            ) )}
          </Box> )) : null
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