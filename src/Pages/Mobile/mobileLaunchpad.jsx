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
                {/* twitter */}
            <script>
                {`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
                },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
                a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
                twq('config','ocbbh');`}
            </script>
            {/* facebook */}
            <script>
                {`!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '5162146007173539');
                fbq('track', 'PageView');`}
            </script>
            <noscript>
                {<img height="1" width="1" style="display:none" 
                    src="https://www.facebook.com/tr?id={5162146007173539}&ev=PageView&noscript=1"/>}
            </noscript>
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