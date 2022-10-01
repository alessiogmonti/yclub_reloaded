import { Box, Text, Link, Flex, Spacer, IconButton, useDisclosure, Show, Hide } from "@chakra-ui/react"
import { AiFillCloseCircle } from 'react-icons/ai'

export const BuyButton = (props) => {
    return(
    <Box maxWidth={['80%',null,null,null,null,'450px']} minWidth={[null,null,null,'max-content','max-content',"200px"]} width={'100%'} display={'flex'} verticalAlign={'center'} align={'center'} layerStyle={'button'} position="relative" height={'59px'} maxHeight={'100px'} minHeight={'max-content'} margin={1}>
        <Flex width={'100%'} maxWidth={'max-content'} justifyContent={'space-between'} alignItems={'center'} verticalAlign={'center'}  minHeight={'max-content'} gap='0' direction={props.direction} margin={'auto'}>
        {/* {props.available ? ( */}
                <IconButton 
                    onClick={props.click}
                    icon={props.icon} variant={'ghost'}
                    rounded={'full'} size={'xs'} p={1} ml={[0,1,4,4,4]}
                    />
                {/* ) : (
                    <IconButton icon={<AiFillCloseCircle />} variant={'ghost'}
                    fontSize={['null',null,null,'33px','30px','45px']}
                    bg={'whiteAlpha.800'}
                    color={'dark'}
                    _dark = {{
                        color:'accent',
                        bg:'blackAlpha.800'
                    }}
                    rounded={'full'} size={['xs',null,null,'sm','md','xl']}
                    /> */}
                {/* )} */}
            <Text mx={1} width={['60%',null,null,'50%','55%','90%']} maxWidth={'max-content'} variant={'buy-link'} pl={[2,null,null,1,2,3]} fontSize={['18px',null,null,'20px','22px','25px']} lineHeight={[null,null,null,'25px','25px','25px']} margin={'auto'} pr={[1,2,2,null,null,null]}>
                {props.regular_text}
            </Text>
        </Flex>
    </Box>
)}