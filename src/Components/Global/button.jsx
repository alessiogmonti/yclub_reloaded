import { Box, Text, Container, Flex, Spacer, IconButton, useDisclosure, Show, Hide, Badge } from "@chakra-ui/react"
// import Link from 'next/link'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react"
import { Base } from "../Mobile/Menus/Base"

export const CustomButton = (props) => {
    return (
        <Box maxWidth={['90vw','400px']} layerStyle={'button'} position="relative" height={props.buttonHeight} width={props.buttonWidth}>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Container display={'flex'} right={props.textright} position={'absolute'} top={2} textAlign={'center'} >
                    <Text variant={props.variant} color={'accent'}>
                        {props.accent_text} &nbsp;
                    </Text>
                    <Text variant={props.variant}>
                        {props.regular_text} 
                    </Text>
                    {props.badge_text && 
                            <Badge variant={'subtle'} fontSize={'10px'} minWidth={'max-content'} width={'17%'} overflowWrap={'break-word'} lineHeight={'12px'} ml={2} mb={10}>
                               {props.badge_text}
                            </Badge>
                            }
                </Container>
                <Spacer />
                {props.content ? (<MenuButton {...props} />) : (
                    // <Link href={props.link} passHref>
                        <IconButton icon={props.icon} variant={'ghost'}
                            rounded={'full'} size={'xl'}
                            style={props.rotation}
                            right={props.right}
                            left={props.left}
                            top={props.top}
                            border={props.border}
                            p={props.pad}
                            type={props.type} />
                    //</Link>
                )}
            </Flex>
        </Box>
    )
}

const MenuButton = (props) => {
    const { isOpen, onToggle } = useDisclosure()
    return(
        <>
        <Show breakpoint="(max-width:500px)">  
            {isOpen? (
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
                left={[4,'51%']}
                fontSize={'35'}
                icon={<AiFillCloseCircle />}
                onClick={onToggle}
                aria-label="Toggle Theme"
                colorScheme="blue"
                style={{zIndex:4}}
              />
            ) : (
            <IconButton icon={props.icon } variant={'ghost'} 
                        rounded={'full'} size={'xl'} 
                        right={props.right}
                        top={props.top}
                        border={props.border}
                        p={props.pad}
                        onClick = {onToggle}
                        bg={'dark'}
                        color={'dark'}
                        _dark = {{
                            color:'accent',
                            bg:'whiteAlpha.100'
                        }}
                        />
            )}
            <Base direction={'right'} toggle={isOpen} content={props.content} zVal={3}/>
        </Show>
        <Show breakpoint="(min-width:501px)">
        {isOpen? (

              <IconButton icon={<AiFillCloseCircle />} variant={'ghost'} 
                        rounded={'full'} size={'xl'} 
                        fontSize={'55px'}
                        right={props.right}
                        top={props.top}
                        border={props.border}
                        p={props.pad}
                        onClick = {onToggle}
                        bg={'dark'}
                        color={'white'}
                        _dark = {{
                            color:'accent',
                            bg:'whiteAlpha.100'
                        }}
                        style={{zIndex:55}}
                        />
            ) : (
            <IconButton icon={props.icon } variant={'ghost'} 
                        rounded={'full'} size={'xl'} 
                        right={props.right}
                        top={props.top}
                        border={props.border}
                        p={props.pad}
                        onClick = {onToggle}
                        bg={'dark'}
                        color={'dark'}
                        _dark = {{
                            color:'accent',
                            bg:'whiteAlpha.100'
                        }}
                        />
            )}
            <Base direction={'right'} toggle={isOpen} content={props.content} zVal={3}/>
        </Show>
    </>
)}