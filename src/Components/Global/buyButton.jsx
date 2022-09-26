import { Box, Text, Link, Flex, Spacer, IconButton, useDisclosure, Show, Hide } from "@chakra-ui/react"
import { AiFillCloseCircle } from 'react-icons/ai'

export const BuyButton = (props) => (
    <Box maxWidth={['100vw','400px']} minWidth='max-content' layerStyle={'button'} position="relative" maxHeight={'max-content'} ml={[null,null,null,null,5]}>
        <Flex minWidth='max-content' justifyContent={'center'} verticalAlign={'center'} alignItems='center' gap='0' direction={props.direction} >
        {props.available ? (
            <Link href={props.link} passHref>
                <IconButton icon={props.icon} variant={'ghost'}
                    rounded={'full'} size={'lg'} m={1}
                    />
            </Link>
                ) : (
                    <IconButton icon={<AiFillCloseCircle />} variant={'ghost'}
                    fontSize={'55px'}
                    bg={'whiteAlpha.800'}
                    color={'dark'}
                    _dark = {{
                        color:'accent',
                        bg:'blackAlpha.800'
                    }}
                    rounded={'full'} size={'xl'}
                    />
                )}
            <Text variant={'buy-link'} mx={3} fontSize={'25px'}>
                {props.regular_text}
            </Text>
        </Flex>
    </Box>
)