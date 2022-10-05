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
import { WebFooter } from "./webFooter";

export const WebJoin = () => (
    <Box position={'relative'} display={'block'} mt={'15%'}>
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
            <VStack width={'100%'} justifyContent={'space-around'} pt={'10%'} gap={10} pb={'20%'}>
                {/* <HStack alignItems={'top'} width={'100%'} justifyContent={'space-between'}> */}
                    <Heading variant="special" fontWeight={700}>
                        JOIN THE YACHT CLUB
                    </Heading>
                    <Text variant="info" textAlign={'right'} >
                        earn passively and <br/> support our oceans
                    </Text>
                {/* </HStack> */}
                <Divider width={'35%'}/>
                <Box position={'relative'} width={[null, '27vw','25vw','25vw','50%']} p={5} mt={'10%'} rounded={'lg'} borderWidth={"1px"} borderColor={'accent'} bg={'light'} _dark={{bg:'dark'}} zIndex={1} my={10}>
                    <FormManager CTA_accent={'EMAIL'} CTA_reg={'ME'} CTA_icon={<Email/>} buttonWidth={[null, '23vw','22vw','21vw','21vw']}/>
                </Box>
            </VStack>
        </VStack>
    </Container>
    </Box>
)