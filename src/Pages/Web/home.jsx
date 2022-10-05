import { WebLanding } from "../../Components/Web/Home/webLanding"
import WebTokenomics from "../../Components/Web/Home/webTokenomics"
import { WebJoin } from "../../Components/Web/Home/webJoin"
import Video from "../../Components/Global/crowdfund"
import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch"

import { Box, Show } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"

const Home = () => (
    <>
        <Helmet>
        <title>Next Generation Super Yacht Experiences brought to you by YCLUB</title>
        <meta name="description" content="Chartering Super Yachts? The exclusive Web3 community that brings next gen metaverse experiences, events, tokens, NFTs, and marketplaces for the super yachting industry" />
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
        <Box position={'absolute'}>
            <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
            <DarkModeSwitch />
            <Show breakpoint='(min-width: 1114px)'> 
                <Box width={'100vw'}>
                <Box position={'relative'} height={'100vh'}/>
            <WebLanding />
                        <Box height={'15vh'} margin={'auto'} padding={10}/>
            <Video />
                <Box height={'15vh'} margin={'auto'} padding={10}/>
                        <Show breakpoint="(max-height:600px)">
                        <Box height={'100vh'} margin={'auto'} padding={10}/>
                        </Show>
            <WebTokenomics />
                <Box height={'15vh'} margin={'auto'} padding={10}/>
                        <Show breakpoint="(max-height:600px)">
                        <Box height={'60vh'} margin={'auto'} padding={10}/>
                        </Show>
            <WebJoin />
            </Box>
            </Show>
        </Box>
    </>
)

export default Home