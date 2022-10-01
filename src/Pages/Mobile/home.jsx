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