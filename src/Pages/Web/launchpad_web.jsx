import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch"
import { motion } from "framer-motion"
import { Box } from "@chakra-ui/react"

import "../../Components/Web/Launchpad/swiper_web.css"
import WebSwiper from "../../Components/Web/Launchpad/swiper_web"

//move these up the chain
const data = [ 
    {price: '1.5', rarity:'LEGENDARY', stock:100, stock_num:150, stock_amt:150, access:'whitelist', time:'SOLD OUT', active:false},
    {price: '0.12', rarity:'RARE', stock:100, stock_num:5000, stock_amt:5000, access:'whitelist', time:'SOLD OUT', active:false},
    {price: '0.12', rarity:'RARE', stock:23, stock_num:1159, stock_amt:5000, access:'public mint', time:'7D 09H 11M', active:true},
    {price: '0.39', rarity: 'EPIC', stock:false, stock_num: 650, stock_amt:650, access:'whitelist', time: 'OCTOBER', active:false},
    {price: '0.28', rarity: 'S.RARE', stock:false, stock_num: 1200, stock_amt:1200, access:'whitelist', time: 'NOVEMBER', active:false},
]

const WebLaunchpad = (props) => (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
        <DarkModeSwitch />
        <Box position={'absolute'} width={'100vw'} right={"-48%"}>
            <Box display={'flex'} width={'100%'} height={'100vh'} >
                <WebSwiper data={data} />
            </Box>
        </Box>
    </motion.div>
)

export default WebLaunchpad