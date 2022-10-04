import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch"
import { Menu } from "../../Components/Mobile/Menus/MainMenu"
import { MobileLanding } from "../../Components/Mobile/Home/mobileLanding"
import Video from "../../Components/Global/crowdfund"
import { MobileTokenomics } from "../../Components/Mobile/Home/mobileTokenomics"
import { MobileJoin } from "../../Components/Mobile/Home/mobileJoin"
import { MobileFooter } from "../../Components/Mobile/Home/mobileFooter"

import { Box, Show } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"

const Home = () => {
  return(
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
            <img height="1" width="1" style="display:none" 
                src="https://www.facebook.com/tr?id={5162146007173539}&ev=PageView&noscript=1"/>
        </noscript>
      </Helmet>
      <Box position={'absolute'}>
        <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
        <DarkModeSwitch />
        <Show breakpoint='(max-width: 1113px)'>
          <Menu/>
          <MobileLanding />
          <Show breakpoint="(max-height:440px)">
            <Box height={'50vh'} margin={'auto'} padding={10}/>
          </Show>
          <Video />
          <Show breakpoint="(max-height:870px)">
            <Box height={'20vh'} margin={'auto'} padding={10}/>
          </Show>
          <MobileTokenomics />
          <Show breakpoint="(max-height:688px)">
            <Box height={'10vh'} margin={'auto'} padding={10}/>
          </Show>
          <MobileJoin />
          <Show breakpoint="(max-height:688px)">
            <Box height={'10vh'} margin={'auto'} padding={10}/>
          </Show>
          <MobileFooter />
        </Show>
      </Box>
    </>
  )
}

export default Home