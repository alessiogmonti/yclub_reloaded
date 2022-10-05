import {Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        ModalCloseButton,
        useDisclosure,
        Button,
        useColorModeValue, 
        Box,
        Spacer,
        Text,
        IconButton,
        ButtonGroup,
        HStack,
        Link} from "@chakra-ui/react"

import { BuyButton } from "../../Components/Global/buyButton"
import { Ethereum } from "../../Assets/Launchpad/ethereum"
import { Dollar } from "../../Assets/Launchpad/dollar"
import connectMetamask from "./Metamask/connectMetamaskUtil"
import { useEffect, useState, useReducer } from "react"

import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai"

export const BuyModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [process, setProcess] = useState(1)
    const [alert, setAlert] = useState(false)
    return (
        <>
          <BuyButton
            click={onOpen}
            available
            regular_text={'connect wallet'}
            direction={'row-reverse'}
            position={'relative'}
            icon={<Ethereum fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')}/>}
            />
          <Modal isOpen={isOpen} onClose={onClose} motionPreset={'slideInBottom'}>
            <ModalOverlay bg={'whiteAlpha.100'} backdropFilter={'blur(10px) hue-rotate(3.3deg)'}/>
            <ModalContent bg={'light'} _dark={{bg:'dark'}} borderColor={'accent'} borderWidth={'1px'}>
              <ModalHeader>{alert? "Error: No Metamask Detected": "Purchase Agreement"}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {alert? 
                (<Text> To continue, you must 
                  install <Link color={'accent'} isExternal href="https://metamask.io/download/">Metamask</Link>. If you have metamask installed and this alert persists, it is likely because of a conflict with a second wallet.
                  Please access this page from a browser or mobile app that only has metamask installed- thank you, we are working on fixing this.
                  </Text>) :
                <Text textAlign={'center'} px={6}> 
                  I acknowledge that I decide the validity and worthiness of a launchpad
                  project by deciding to mint. There's a risk that, despite a creator's
                  best efforts, their promises may not be fulfilled. I will do my own
                  research to make the best informed decision. 
                </Text>}
              </ModalBody>
              <ModalFooter mt={5}>
                  <IconButton 
                    onClick={onClose}
                    icon={<AiFillCloseCircle />} variant={'ghost'}
                    fontSize={[null,null,null,'33px','30px','45px']}
                    bg={'whiteAlpha.800'}
                    color={'dark'}
                    _dark = {{
                        color:'accent',
                        bg:'blackAlpha.800'
                    }}
                    rounded={'full'} size={[null,null,null,'sm','md','xl']}
                    />
                    <Spacer/>
                    <ButtonGroup size={'xl'} isAttached onClick={() => connectMetamask(setAlert)}>
                    <Button px={2} bg={'whiteAlpha.800'} color={'dark'}
                    borderColor={'accent'} borderWidth={'1px'}
                    borderLeftRadius={'100px'}
                    _hover={{
                      color: 'light'
                    }}
                    _dark = {{
                        color:'light',
                        bg:'blackAlpha.800',
                        _hover: {
                          color: 'light'
                        }
                    }}> {alert? "Try again" : "Continue"} </Button>
                    <IconButton 
                    borderColor={'accent'} borderWidth={'1px'}
                    icon={<AiFillCheckCircle />} variant={'ghost'}
                    fontSize={[null,null,null,'33px','30px','45px']}
                    bg={'whiteAlpha.800'}
                    color={'dark'}
                    _dark = {{
                        color:'accent',
                        bg:'blackAlpha.800',
                        _hover: {
                          color: 'light'
                        }
                    }}
                    rounded={'full'} size={[null,null,null,'sm','md','xl']}
                    />
                  </ButtonGroup>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}