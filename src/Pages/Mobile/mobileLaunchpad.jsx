import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch"
import { Menu } from "../../Components/Mobile/Menus/MainMenu"
import { Swiper } from "../../Components/Mobile/Launchpad/swiper_mobile"
import { MobileFooter } from "../../Components/Mobile/Home/mobileFooter"

import { Box, Center, Heading,} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"

const MobileLaunchpad = (props) => (
    <>
        <Helmet>
            <title>Super Yacht Lana NFT Collection Mint</title>
            <meta name="description" content="Gain access to a world of extravagance through the premier YCLUB collection. The first digital collection of the breath taking Benetti Super Yacht “Lana” will be the dNFT that unlocks the unending benefits for holders, from rewards, metaverse experiences, and a complete DeFi suite, to once in a lifetime IRL experiences. "/>
        </Helmet>
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
            <MobileFooter/>
        </motion.div>
    </>
)

export default MobileLaunchpad