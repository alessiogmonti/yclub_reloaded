import { motion } from "framer-motion"
import { Box } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"

import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch"
import "../../Components/Web/Launchpad/swiper_web.css"
import WebSwiper from "../../Components/Web/Launchpad/webSwiper"
import { WebFooter } from "../../Components/Web/Home/webFooter"

const WebLaunchpad = (props) => {
    return(
    <>
        <Helmet>
            <title>Super Yacht Lana NFT Collection Mint</title>
            <meta name="description" content="Gain access to a world of extravagance through the premier YCLUB collection. The first digital collection of the breath taking Benetti Super Yacht “Lana” will be the dNFT that unlocks the unending benefits for holders, from rewards, metaverse experiences, and a complete DeFi suite, to once in a lifetime IRL experiences. "/>
        </Helmet>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
            <DarkModeSwitch/>
            <Box position={'absolute'} width={'60vw'} left={'55vw'}>
                <Box display={'flex'} width={'100%'} height={'100vh'} overflowX={'hidden'} >
                    <WebSwiper data={props.data} />
                </Box>
            </Box>
            <WebFooter/>
        </motion.div>
    </>
)}

export default WebLaunchpad