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
        ButtonGroup} from "@chakra-ui/react"

import { BuyButton } from "../../Components/Global/buyButton"
import { Ethereum } from "../../Assets/Launchpad/ethereum"
import { Dollar } from "../../Assets/Launchpad/dollar"
import connectMetamask from "./Metamask/connectMetamaskUtil"
import { useEffect, useState } from "react"

import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai"


export const MetaMaskBuy = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
              <ModalHeader>Purchase Agreement</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text> 
                  I acknowledge that I decide the validity and worthiness of a launchpad
                  project by deciding to mint. There's a risk that, despite a creator's
                  best efforts, their promises may not be fulfilled. I will do my own
                  research to make the best informed decision. 
                </Text>
              </ModalBody>
              <ModalFooter>
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
                    <ButtonGroup size={'xl'} isAttached onClick={() => Proceed}>
                    <Button px={2} bg={'whiteAlpha.800'} color={'dark'}
                    borderColor={'accent'} borderWidth={'1px'}
                    _hover={{
                      color: 'light'
                    }}
                    _dark = {{
                        color:'light',
                        bg:'blackAlpha.800',
                        _hover: {
                          color: 'light'
                        }
                    }}> Continue </Button>
                    <IconButton 
                    borderColor={'accent'} borderWidth={'1px'}
                    onClick={() => <Proceed onClose={onClose} setAlert={setAlert} />}
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

const Proceed = (onClose) => {
  // useEffect( () => (
  //   console.log(alert)
  // //   alert ? onClose : null
  // ), [alert])
  return(
    connectMetamask(setAlert)
  )
}

export const CrossMintBuy = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
          <BuyButton 
            click = {onOpen}
            available
            direction={'row-reverse'}
            regular_text={'credit card'}
            icon={<Dollar
                fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')}
                />} /> 
    
            <Modal isOpen={isOpen} onClose={onClose} motionPreset={'slideInBottom'}>
            <ModalOverlay bg={'whiteAlpha.100'} backdropFilter={'blur(10px) hue-rotate(3.3deg)'}/>
            <ModalContent bg={'light'} _dark={{bg:'dark'}} borderColor={'accent'} borderWidth={'1px'}>
              <ModalHeader>Purchase Agreement</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text> 
                  I acknowledge that I decide the validity and worthiness of a launchpad
                  project by deciding to mint. There's a risk that, despite a creator's
                  best efforts, their promises may not be fulfilled. I will do my own
                  research to make the best informed decision. 
                </Text>
              </ModalBody>
              <ModalFooter>
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
                    <ButtonGroup size={'xl'} isAttached onClick={() => Proceed}>
                    <Button px={2} bg={'whiteAlpha.800'} color={'dark'}
                    borderColor={'accent'} borderWidth={'1px'}
                    _hover={{
                      color: 'light'
                    }}
                    _dark = {{
                        color:'light',
                        bg:'blackAlpha.800',
                        _hover: {
                          color: 'light'
                        }
                    }}> Continue </Button>
                    <IconButton 
                    borderColor={'accent'} borderWidth={'1px'}
                    onClick={() => <Proceed onClose={onClose} setAlert={setAlert} crossmint/>}
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