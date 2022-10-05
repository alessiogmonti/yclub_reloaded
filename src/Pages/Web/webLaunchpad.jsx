import { motion } from "framer-motion"
import { Box } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"

import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch"
import "../../Components/Web/Launchpad/swiper_web2.css"
import WebSwiper from "../../Components/Web/Launchpad/webSwiper"
import { WebFooter } from "../../Components/Web/Home/webFooter"

const WebLaunchpad = (props) => {
    return(
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
                {`<img height="1" width="1" style="display:none" 
                    src="https://www.facebook.com/tr?id={5162146007173539}&ev=PageView&noscript=1"/>`}
            </noscript>
        </Helmet>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} style={{position:'absolute', left:'50%', width:'50vw'}}>
            <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
            <DarkModeSwitch/>
            <Box position={'absolute'} width={'100%'} height={'100vh'} margin={'auto'} marginTop={'1vh'}>
                <Box display={'flex'} width={'100%'} height={'100vh'} overflowX={'hidden'}>
                    <WebSwiper data={props.data} />
                </Box>
            </Box>
            <WebFooter/>
        </motion.div>
    </>
)}

export default WebLaunchpad