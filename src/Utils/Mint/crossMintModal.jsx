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
    Spacer,
    Text,
    IconButton,
    ButtonGroup,
    Spinner} from "@chakra-ui/react"
import { useEffect, useState, useReducer } from "react"
import { AiFillCloseCircle, AiFillCheckCircle, AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai"
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui"

import { BuyButton } from "../../Components/Global/buyButton"
import { Dollar } from "../../Assets/Launchpad/dollar"
import connectMetamask from "./Metamask/connectMetamaskUtil"
import ContractsData from "../../Data/contractsData"

export const CrossMintBuy = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ crossMint, setCrossMint ] = useState(false);

    const [ mintAmount, setMintAmount ] = useState(1)
    const [ mintMax, setMintMax ] = useState(props.max)
    // const [ minAvail, setMintAvail ] = useState(0)
    const [ loading, setLoading ] = useState(false)

    return (
        <>
            <BuyButton 
            click = {onOpen}
            available
            direction={'row-reverse'}
            regular_text={'credit card'}
            icon={<Dollar fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')} />} 
            /> 
            <Modal isOpen={isOpen} onClose={onClose} motionPreset={'slideInBottom'}>
            <ModalOverlay bg={'whiteAlpha.100'} backdropFilter={'blur(10px) hue-rotate(3.3deg)'}/>
            <ModalContent bg={'light'} _dark={{bg:'dark'}} borderColor={'accent'} borderWidth={'1px'}>
                <ModalHeader textAlign={'center'}>{crossMint? "Mint" : "Purchase Agreement"}</ModalHeader>
                {crossMint? <ModalCloseButton /> : null}
                <ModalBody>
                {crossMint? null : <Text> 
                    I acknowledge that I decide the validity and worthiness of a launchpad
                    project by deciding to mint. There's a risk that, despite a creator's
                    best efforts, their promises may not be fulfilled. I will do my own
                    research to make the best informed decision. 
                </Text>}
                </ModalBody>
                <ModalFooter>
                {crossMint ? null : <IconButton 
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
                />}
                    <Spacer/>
                    {crossMint? (
                        <>
                        <ButtonGroup isAttached>
                            <IconButton size={'lg'} onClick={() => setMintAmount(mintAmount-1)} icon={<AiFillMinusCircle />} />
                            <Button size={'lg'}>{mintAmount}</Button>
                            <IconButton size={'lg'} disabled={mintAmount >= mintMax} onClick={() => setMintAmount(mintAmount+1)} icon={<AiFillPlusCircle />} />
                        </ButtonGroup>
                        <Spacer />
                        <Proceed mintAmount={mintAmount} />
                        </>
                    )
                    : (loading? <Spinner/> : 
                    (<ButtonGroup size={'xl'} isAttached onClick={() => setCrossMint(true)}>
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
                    onClick={() => <Proceed/>}
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
                    </ButtonGroup>))
                    }
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
      )
}

const Proceed = (props) => {

    return(
    <CrossmintPayButton
          collectionTitle="YCLUB Lana Super Yacht"
          collectionDescription={`Gain access to a world of extravagance through the premier YCLUB collection. The first digital collection of the breath taking Benetti Super Yacht “Lana” will be the dNFT that unlocks the unending benefits for holders, from rewards, metaverse experiences, and a complete DeFi suite, to once in a lifetime IRL experiences. 
                              Having access to the YCLUB metaverse experience means enjoying a world rich with opportunity and entertainment hosted on our one of a kind Super Yacht. This virtual social club for the community also acts as a non-expiring revenue stream; supporting an eCommerce marketplace and events platform where users can spend, invest, trade, and be rewarded in Bitcoin, Ethereum, USDC, or our native coin SYC.
                              The metaverse Super Yacht that holders of the “Lana” dNFT will have access to will have an entertainment suite to match the real Super Yacht’s extravagance. Holders will have access to, and gain revenue from the concerts, fashion shows, hosted meetings, casinos, karaoke, and gallery experiences for artists to showcase their NFTs in ways for guests to purchase live. Your charter into a one of a kind metaverse experience begins here, with YCLUB.`}
          collectionPhoto={'../../../Assets/Launchpad/yachts_animation.gif'}
          clientId={import.meta.env.VITE_CROSSMINT_Id}
          mintConfig={{
            type: "erc-721",
            totalPrice: (props.mintAmount * 0.12).toString(),
            _count: props.mintAmount,
            _round: 1,
            _name: "rare",
          }}
        />
    )
}