import { Box, Text, Link, Flex, Spacer, IconButton, useDisclosure, Show, Hide } from "@chakra-ui/react"
import { AiFillCloseCircle } from 'react-icons/ai'

export const BuyButton = (props) => {
    return(
    <Box maxWidth={['60%',null,null,null,null,'350px']} minWidth={[null,null,null,'max-content','max-content',"max-content"]} width={'100%'} display={'flex'} verticalAlign={'center'} align={'center'} layerStyle={'button'} position="relative" height={'59px'} maxHeight={'100px'} minHeight={'max-content'} margin={1}>
        <Flex minWidth={'max-content'} align={'center'} justifyContent={'center'} verticalAlign={'center'} minHeight={'max-content'} alignItems='center' gap='0' direction={props.direction} margin={'auto'}>
        {props.available ? (
                <IconButton 
                    onClick={props.click}
                    icon={props.icon} variant={'ghost'}
                    rounded={'full'} size={'xs'} my={2} ml={[0,1,4,4,4]}
                    />
                ) : (
                    <IconButton icon={<AiFillCloseCircle />} variant={'ghost'}
                    fontSize={[null,null,null,'33px','30px','45px']}
                    bg={'whiteAlpha.800'}
                    color={'dark'}
                    _dark = {{
                        color:'accent',
                        bg:'blackAlpha.800'
                    }}
                    rounded={'full'} size={['xs',null,null,'sm','md','xl']}
                    />
                )}
            <Text width={['38%',null,null,'50%','55%','90%']} maxWidth={'max-content'} variant={'buy-link'} pl={[0,null,null,1,2,3]} fontSize={['15px',null,null,'20px','22px','25px']} lineHeight={[null,null,null,'25px','25px','25px']} margin={'auto'}>
                {props.regular_text}
            </Text>
        </Flex>
    </Box>
)}