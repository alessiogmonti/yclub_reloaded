import { Center, VStack, Heading, Divider, Box } from '@chakra-ui/react'

export const Details = () => (
    <Center>
    <VStack mt={14} p={2} align={'center'} justifyContent={'center'}>
      <Heading variant="Landing" textAlign={'center'} lineHeight={'65px'} >
        $SYC
      </Heading>
      <VStack spacing={'40px'} align={'center'}>
        <Divider width={'60%'} mt={8}/> 
        <Box>
            <Heading variant="Menu" textAlign={'center'}> STARTING SUPPLY </Heading>
            <Heading variant="Menu" m={5} color={'accent'} textAlign={'center'}
                bgGradient={'linear-gradient(92.55deg, #008AFF -19.47%, #FF3EFF 106.44%);'}
                bgClip="text"
                > 50 000 000 </Heading> 
        </Box>
        <Box>
            <Heading variant="Menu" textAlign={'center'}> MAX SUPPLY </Heading>
            <Heading variant="Menu" mt={5} color={'accent'} textAlign={'center'}
                bgGradient={'linear-gradient(92.55deg, #008AFF -19.47%, #FF3EFF 106.44%);'}
                bgClip="text"
                > 1 000 000 000 </Heading> 
        </Box>
        <Heading variant="Landing" pt={10} textAlign={'center'}> 0% TAX </Heading>
      </VStack>
    </VStack>
  </Center>
)