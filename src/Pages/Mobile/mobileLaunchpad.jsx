import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch"
import { Menu } from "../../Components/Mobile/Menus/MainMenu"
import { Swiper } from "../../Components/Mobile/Launchpad/swiper_mobile"

import { Box, Center, Heading,} from "@chakra-ui/react"
import { motion } from "framer-motion"

const MobileLaunchpad = (props) => (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
        <Menu/>
        <DarkModeSwitch />
        <Center width={'100vw'} position={'absolute'} alignItems={'center'} justifyContent={'center'}>
            <Heading variant={'Menu'} position={'relative'} top={14}
            fontSize={'35px'} letterSpacing={'3px'} fontWeight={700} color={'light'}>LANA SUPERYACHT</Heading>
        </Center>
        <Box width={'100vw'} height={'100vh'} >
            <Swiper data={props.data} />
        </Box>
    </motion.div>
)

export default MobileLaunchpad