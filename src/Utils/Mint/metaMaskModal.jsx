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
    Spinner,
    Spacer,
    Text,
    IconButton,
    ButtonGroup,
    Link} from "@chakra-ui/react"
import { useEffect, useState, useReducer } from "react"
import { AiFillCloseCircle, AiFillCheckCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"

import { BuyButton } from "../../Components/Global/buyButton"
import { Ethereum } from "../../Assets/Launchpad/ethereum"
import connectMetamask from "./Metamask/connectMetamaskUtil"
import ContractData from "../../Data/contractsData"
import Round from "../../abi/Round"
import RoundWithSigner from "../../abi/RoundWithSigner"

export const MetaMaskBuy = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [process, setProcess] = useState(1)
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [ mintAmount, setMintAmount ] = useState(1)
    const [ mintMax, setMintMax ] = useState(2) //props.max
    const [ minAvail, setMintAvail ] = useState(0)
    const [data,setData] = useState()

    useEffect(() => {
        props.account?
        (async () => {
            for( let i = 0; i < ContractData.length; i++ ){
                try {
                    const round = Round(ContractData[i].address);
                    if (props.address === ContractData[i].address){
                        const alreadyBought = await round.userPurchasedNum(props.account)
                        const mintAvail = ContractData[i].max - alreadyBought.toNumber()
                        setMintAvail(mintAvail)
                        
                        // if (mintAvail > 0){
                        //     setMintAmount(ContractData[i].max)
                        //     setLoading(false);
                        //     return
                        // }
                    }
                    // if (ContractData[i].start > currentDate){
                    //     setMintAmount(i);
                    //     setLoading(false);
                    //     return;
                    // }
                    } catch (error){
                        console.error(error);
                    }
                }
            setLoading(false);
        })() : null;
    }, [props.account])

    return (
        <>
          <BuyButton
            click={onOpen}
            available
            regular_text={'connect wallet'}
            direction={'row-reverse'}
            position={'relative'}
            icon={<Ethereum fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')} />}
            />
          <Modal isOpen={isOpen} onClose={onClose} motionPreset={'slideInBottom'}>
            <ModalOverlay bg={'whiteAlpha.100'} backdropFilter={'blur(10px) hue-rotate(3.3deg)'}/>
            <ModalContent bg={'light'} _dark={{bg:'dark'}} borderColor={'accent'} borderWidth={'1px'}>
              <ModalHeader textAlign={'center'}>{props.account ? "Select Mint Amount" : alert? "Error: No Metamask Detected": "Purchase Agreement"}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {
                loading? <Spinner/> :
                props.account? "Max 2 per person" :
                alert ? 
                (<Text> To continue, you must 
                  install <Link color={'accent'} isExternal href="https://metamask.io/download/">Metamask</Link>.
                  </Text>) :
                <Text textAlign={'center'} px={6}> 
                  I acknowledge that I decide the validity and worthiness of a launchpad
                  project by deciding to mint. There's a risk that, despite a creator's
                  best efforts, their promises may not be fulfilled. I will do my own
                  research to make the best informed decision. 
                </Text>}
              </ModalBody>
              <ModalFooter mt={5}>
              {props.account ? 
                    <>
                        <ButtonGroup isAttached>
                            <IconButton size={'lg'} onClick={() => setMintAmount(mintAmount-1)} icon={<AiFillMinusCircle />} />
                            <Button size={'lg'}>{mintAmount}</Button>
                            <IconButton size={'lg'} disabled={mintAmount >= mintMax} onClick={() => setMintAmount(mintAmount+1)} icon={<AiFillPlusCircle />} />
                        </ButtonGroup>
                        <Spacer />
                        <ButtonGroup size={'xl'} isAttached onClick={() => handleMintClick(setLoading)}>
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
                    }}> {"Mint"} </Button>
                    <IconButton 
                    borderColor={'accent'} borderWidth={'1px'}
                    icon={<AiFillCheckCircle />} variant={'ghost'}
                    fontSize={['33px',null,null,'33px','30px','45px']}
                    bg={'whiteAlpha.800'}
                    color={'dark'}
                    _dark = {{
                        color:'accent',
                        bg:'blackAlpha.800',
                        _hover: {
                          color: 'light'
                        }
                    }}
                    rounded={'full'} size={['xl',null,null,'xl','xl','xl']}
                    />
                  </ButtonGroup>
                    </> :
                    <>
                  <IconButton 
                    onClick={onClose}
                    icon={<AiFillCloseCircle />} variant={'ghost'}
                    fontSize={['33px',null,null,'33px','30px','45px']}
                    bg={'whiteAlpha.800'}
                    color={'dark'}
                    _dark = {{
                        color:'accent',
                        bg:'blackAlpha.800'
                    }}
                    rounded={'full'} size={['xl',null,null,'sm','md','xl']}
                    />
                    <Spacer/>
                    <ButtonGroup size={'xl'} isAttached onClick={() => connectMetamask(setAlert, props.setAccount)}>
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
                    fontSize={['45px',null,null,'33px','30px','45px']}
                    bg={'whiteAlpha.800'}
                    color={'dark'}
                    _dark = {{
                        color:'accent',
                        bg:'blackAlpha.800',
                        _hover: {
                          color: 'light'
                        }
                    }}
                    rounded={'full'} size={['xl',null,null,'xl','xl','xl']}
                    />
                  </ButtonGroup>
                  </>
                }
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

const handleMintClick = async (setLoading) => {
    setLoading(true);
    try {
      const roundWithSigner = RoundWithSigner(props.address);
      const price = await roundWithSigner.mintPrice();
      console.log("price: ", ethers.utils.formatEther(price));
      const tx = await roundWithSigner.paidMint(mintAmount, {
        value: price.mul(mintAmount),
      });
      console.log("tx: ", tx);
      const response = await tx.wait();
      console.log("response: ", response);
    //   router.reload();
      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }