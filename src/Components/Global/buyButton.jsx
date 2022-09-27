import { Box, Text, Link, Flex, Spacer, IconButton, useDisclosure, Show, Hide } from "@chakra-ui/react"
import { AiFillCloseCircle } from 'react-icons/ai'

export const BuyButton = (props) => (
    <Box maxWidth={['100vw','350px']} minWidth={'max-content'} layerStyle={'button'} position="relative" maxHeight={'max-content'} margin={1}>
        <Flex minWidth='max-content' justifyContent={'center'} verticalAlign={'center'} alignItems='center' gap='0' direction={props.direction} >
        {props.available ? (
            <Link href={props.link} passHref>
                <IconButton icon={props.icon} variant={'ghost'}
                    rounded={'full'} size={[null,null,null,'md','md','xl']} my={0} mx={2}
                    />
            </Link>
                ) : (
                    <IconButton icon={<AiFillCloseCircle />} variant={'ghost'}
                    fontSize={[null,null,null,'33px','30px','45px']}
                    bg={'whiteAlpha.800'}
                    color={'dark'}
                    _dark = {{
                        color:'accent',
                        bg:'blackAlpha.800'
                    }}
                    rounded={'full'} size={[null,null,null,'md','lg','xl']}
                    />
                )}
            <Text variant={'buy-link'} pl={3} fontSize={[null,null,null,'20px','22px','25px']} lineHeight={[null,null,null,'20px','22px','27px']}>
                {props.regular_text}
            </Text>
        </Flex>
    </Box>
)