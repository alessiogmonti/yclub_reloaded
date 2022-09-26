import {Image, Box, Text, HStack, Container} from "@chakra-ui/react"
import yClub from "/Team/companies/YCLUB.png"

export const DataContainer = (props) => {
    return (
        <Box px={1} pb={5} transformOrigin={'top center'}>
            <Text fontWeight={'700'} position={'relative'} left={190} mb={4}> {props.fullName} </Text>
            <Container>
                <Image top={[0,0,0,0,-10]} src={props.profileImg? props.profileImg : yClub} boxSize={['80px','80px','80px','100px','100px']} objectFit={'cover'} borderRadius={'full'} float={['left']} mr={[3,3,3,10,10]} display={'inline-flex'} bg={'light'} position={'relative'} borderWidth={'3px'} borderColor={'accent'}  />
                <Text variant={'main-link'} fontFamily={'Helvetica'} fontSize={'15px'} lineHeight={'24px'} >
                    {props.bio}
                </Text>
            </Container>
            <HStack mt={5} alignItems={'center'} justifyContent={'center'}>
            { props.companyImg && props.companyImg.map( (d) =>
                        <Image src={d} boxSize={'40px'} objectFit={'cover'} borderRadius={'full'} display={'inline-flex'} bg={'light'} position={'relative'} borderWidth={'3px'} borderColor={'accent'}  />  
                        )}
            </HStack>
        </Box>
    )  
}