import { HStack, VStack, Heading, Text, Divider, Box, Spacer, Flex,
        ListItem, UnorderedList, 
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        ModalCloseButton, useDisclosure, Button} from "@chakra-ui/react";
import { Container } from "../../../Components/Global/Container";
import { Yacht } from "../../../Assets/yacht";
import FormManager from "../../../Utils/form";
import { Email } from "../../../Assets/Home/Icons/email";

export const WebJoin = () => (
    <Container width={'100vw'} px={20} py={10} height={'100vh'} mb={0} >
        <VStack spacing={'50px'} alignItems={'left'} width={'100%'} >
            <HStack justifyContent={'space-between'} alignItems={'top'}>
                <Heading variant="info">
                    UNLOCK UNIQUE EXPERIENCES
                </Heading>
                <Text variant="info" textAlign={'right'}>
                    in the metaverse <br/> and on superyachts
                </Text>
            </HStack>
            <Divider width={'25%'}/>
            <HStack justifyContent={'space-between'} alignItems={'top'}>
                <Heading variant="info">
                    ACCESS UNFATHOMABLE <br/> WORLDS OF LUXURY
                </Heading>
                <Text variant="info" textAlign={'right'}>
                    connect with a-listers <br/> in the super yacht <br/> & blockchain industries
                </Text>
            </HStack>
            <Divider left={'50%'} width={'50%'} position={'relative'}/>
            <VStack alignItems={'flex-start'}>
                <HStack alignItems={'top'} width={'100%'} justifyContent={'space-between'}>
                    <Heading variant="special" fontWeight={700}>
                        JOIN THE YACHT CLUB
                    </Heading>
                    <Text variant="info" textAlign={'right'} >
                        earn passively and <br/> support our oceans
                    </Text>
                </HStack>
                <Divider width={'35%'}/>
                <Spacer />
                <Box position={'relative'} width={[null, '27vw','25vw','25vw','25vw']} right={0} bottom={-50} p={5} mr={10} rounded={'lg'} borderWidth={"1px"} borderColor={'accent'} bg={'light'} _dark={{bg:'dark'}} zIndex={1} my={10}>
                    <FormManager CTA_accent={'EMAIL'} CTA_reg={'ME'} CTA_icon={<Email/>} buttonWidth={[null, '23vw','22vw','21vw','21vw']}/>
                </Box>
                <Box display={'flex'} justifyContent={'flex-end'}>
                    <Box position={'absolute'} left={"-150px"}>
                            <Yacht/>
                        <Box position={'absolute'} left={"150px"} bottom={0} bg={'whiteAlpha.50'} height={'20px'} width={'100vw'}>
                            <Flex>
                                <Text ml={1} pl={1}> YCLUB &copy; 2022</Text>
                                <Spacer />
                                <Box ml={2} pl={2} mr={1} pr={1}> 
                                    <BasicModal buttonText={'Disclaimer'} modalTitle={'Disclaimer'} modalText={disclaimerText} modalContent={disclaimerData} />
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </VStack>
        </VStack>
    </Container>
)


const BasicModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>{props.buttonText}</Button>
  
        <Modal size={'6xl'} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg={'whiteAlpha.100'} backdropFilter={'blur(10px) hue-rotate(3.3deg)'}/>
          <ModalContent bg={'light'} _dark={{bg:'dark'}} borderColor={'accent'} borderWidth={'1px'}>
            <ModalHeader>{props.modalTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Heading mb={5}>
            {props.modalText}
          </Heading>
            <UnorderedList>
              {props.modalContent.map( (d) => <ListItem> {d} </ListItem>)}
              </UnorderedList>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' onClick={onClose}>Accept</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  const disclaimerText = "IMPORTANT: these disclaimers form part of any contract you enter into with YClub. If you do not agree to these terms you should not offer to purchase any Tokens.";
  const disclaimerData = [
    "In purchasing a non-fungible token (“NFT”) from YCLUB you (the Participant) acknowledge and agree that: YCLUB's NFT is a collection of digital artworks (NFTs) housed and run on the Ethereum Network. Users and collector of these NFTs are solely responsible for the safety and the management of their own private assets, which include but are not limited to YClub Wallets, validating all transactions and contracts generated by this website prior to and after purchases.",
    "YCLUB MAKES NO WARRANTY WHATSOEVER WITH RESPECT TO THE NFTs, INCLUDING ANY (A) WARRANTY OF MERCHANTABILITY; (B) WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE; (C) WARRANTY OF TITLE; OR (D) WARRANTY AGAINST INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS OF A THIRD PARTY; WHETHER EXPRESS OR IMPLIED BY LAW, COURSE OF DEALING, COURSE OF PERFORMANCE, USAGE OF TRADE OR OTHERWISE.",
    "IN NO EVENT SHALL YCLUB BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, WHETHER UNDER ANY TORT, CONTRACT, NEGLIGENCE, STRICT LIABILITY, OR OTHER LEGAL OR EQUITABLE THEORY WHATSOEVER, INCLUDING WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, INTELLECTUAL PROPERTY INFRINGEMENT, PRICE DEPRECIATION, LEGAL OR REGULATORY ENFORCEMENT, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, AND THE LIKE, ARISING OUT OF THIS AGREEMENT, EVEN IF YCLUB HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.",
    "You shall take all advertising, promotions, statements, recommendations, data, opinions, documents, and the like on an as-is basis and rely on your own counsel, third-party service providers and judgment in connection therewith. All information provided by or on behalf of YCLUB is for informational purposes only and should not be construed as professional, accounting or legal advice. Users should not take or refrain from taking any action in reliance on any information provided by or on behalf of YCLUB.",
    "YCLUB does not give any advice or recommendation regarding NFTs, including, but not limited to, the suitability and/or appropriateness of, and investment strategies for, the purchase of the NFTs for financial investment purposes. You are solely responsible for determining the nature, potential value, suitability, and appropriateness of your purchase of the NFTs for yourself for any purpose. The NFTs are not designed for investment purposes and YCLUB does not give any advice or recommendation that the NFTs are to be considered as a type of financial investment by any law, rule, or regulation. With respect to your purchase of the NFTs, you acknowledge and agree that you are not expecting to profit from the NFTs based on any efforts by YCLUB or its affiliates. The purchase of an NFT is a non-reversible and non-refundable event.",
    "YClub shall have no obligation or liability for the secure custody or use of the NFT and any losses arising from such custody or use or solely the purchasers.",
    "If you deposit digital assets or NFTs into an incorrect wallet address, YClub may not have the ability, and are under no obligation or duty, to return such digital assets or NFTs to you. This section applies regardless of whether or not YClub controls the destination address",
    "YClub's NFT sale is not an offering or sale of securities, swaps on either securities or commodities or a financial instrument of any kind as may be determined by any law, rule, or regulation. Purchases and sales of NFTs may not be subject to the protections of any laws governing those types of financial instruments.",
    "By offering to buy one or more NFT’s from YClub, you acknowledge that the price and liquidity of blockchain assets, including NFTs, are extremely volatile and may be subject to large fluctuations; fluctuations in the price of other digital assets could materially and adversely affect NFTs, which may also be subject to significant price volatility; legislative and regulatory changes or actions may adversely affect the use, transfer, exchange, and value of NFTs; transactions in NFTs may be irreversible, and, accordingly, losses due to fraudulent or accidental transactions may not be recoverable; some transactions shall be deemed to be made when recorded on a public ledger, which is not necessarily the date or time that you initiated the transaction; the value of NFTs may be derived from the continued willingness of market participants to exchange fiat currency or digital assets for NFTs, which may result in the potential for permanent and total loss of value of a particular NFT should the market for that NFT disappear; the nature of NFTs may lead to an increased risk of fraud or cyber-attack, and may mean that technological difficulties experienced by YClub may prevent the access to or use of your digital assets and/ or personal information; and changes to any third party sites may create a risk that your access to and use of YClub will suffer.",
    "You are solely responsible for determining the nature, potential value, suitability, and appropriateness of these risks for yourself. You access and use YClub at your own risk; however, you also acknowledge that this brief statement does not disclose all of the risks associated with NFTs and other digital assets. You agree and understand that YClub will not be responsible for any communication failures, disruptions, errors, distortions or delays it may experience when using, selling or promoting NFTs, however caused.",
    "You hereby expressly waive and release any and all claims, now known or hereafter known, against the YClub, its affiliates and their officers, directors, manager(s), employees, agents, shareholders/members (collectively, 'Releasees'), related to the NFTs, whether arising out of the ordinary negligence of YClub or any Releasees or otherwise. You covenant not to make or bring any such claim against YClub or any other Releasee, and forever release and discharge YClub and all other Releasees from liability under such claims.",
    "In the event that the above waiver is held by any court of competent jurisdiction to be void or otherwise unenforceable, you agree to limit YClub’s liability to AED50 (50 UAE Dirhams).",
    "“YClub” means for these purposes Yclub Consulting Limited, a company incorporated in the British Virgin Islands. You agree that the above disclaimers may be relied upon by YClub, its subsidiaries, affiliates, officers, directors, managers, employees, agents, shareholders/ members and any other legal or living persons who may act or have acted on or behalf of YClub. Yclub Consulting Limited is the seller of the NFT’s and your contract is with that company only.",
  ]