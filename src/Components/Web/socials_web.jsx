import { IconButton, Box, Stack, Link } from '@chakra-ui/react'
import { FaTelegram, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa';

const socialLinks = [ {
    icon: <FaTwitter/>, link:"https://twitter.com/yclub_io"},
    {icon: <FaTelegram/>, link:"https://t.me/yclub_official" }, 
    {icon: <FaInstagram/>, link:"https://www.instagram.com/yclub.io/" },
    {icon: <FaMedium/>, link:"https://medium.com/@yclub"}  ]

export const Socials = () => (
    <Box layerStyle={'button'} width={'auto'} height={'auto'} px={3} py={1} m={5}>
        <Stack direction={'row'} spacing={3} verticalAlign={'center'} zIndex={5}>
            {socialLinks.map(
                (d, idx) => 
                <Link isExternal key={idx} href={d.link}>
                    <IconButton key={idx} fontSize={'20px'} size={'sm'} variant={'ghost'} rounded={'full'} href={'#'} color={'#2491EB'} icon={d.icon} />
                </Link>
                )
            }
        </Stack>
    </Box>
)