import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch"
import { motion } from "framer-motion"
import { Box } from "@chakra-ui/react"

import "../../Components/Web/Launchpad/swiper_web.css"
import WebSwiper from "../../Components/Web/Launchpad/webSwiper"

const WebLaunchpad = (props) => {
    console.log(props.data)
    return(
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
        <DarkModeSwitch />
        <Box position={'absolute'} width={'60vw'} left={'55vw'}>
            <Box display={'flex'} width={'100%'} height={'100vh'} overflowX={'hidden'} >
                <WebSwiper data={props.data} />
            </Box>
        </Box>
    </motion.div>
)}

export default WebLaunchpad