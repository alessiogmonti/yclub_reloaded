import { Box, Text, Link, Flex, Spacer, IconButton, useDisclosure, Show, Hide } from "@chakra-ui/react"
import { AiFillCloseCircle } from 'react-icons/ai'

export const BuyButton = (props) => {
    return(
    <Box minWidth={[null,null,null,'max-content','max-content',"max-content"]} width={'100%'} display={'flex'} verticalAlign={'center'} align={'center'} layerStyle={'button'} position="relative" margin={0}>
        <Flex minWidth={'100%'} justifyContent={'space-between'} alignItems={'center'} verticalAlign={'center'}  gap='0' direction={props.direction} mr={5}>
                <IconButton onClick={props.click} icon={props.icon} variant={'ghost'} rounded={'full'} size={'xs'} />
            <Text m={0} width={['60%',null,null,'100%']} variant={'buy-link'} pl={[2,null,null,1,2,0]} fontSize={['18px',null,null,'20px','22px','20px']} lineHeight={[null,null,null,'25px','25px','23px']} margin={'auto'} pr={[1,2,2,null,null,null]}>
                {props.regular_text}
            </Text>
        </Flex>
    </Box>
)}