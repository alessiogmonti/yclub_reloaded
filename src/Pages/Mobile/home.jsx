import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch"
import { Menu } from "../../Components/Mobile/Menus/MainMenu"
import { MobileLanding } from "../../Components/Mobile/Home/mobileLanding"
import Video from "../../Components/Global/crowdfund"
import { MobileTokenomics } from "../../Components/Mobile/Home/mobileTokenomics"
import { MobileJoin } from "../../Components/Mobile/Home/mobileJoin"
import { MobileFooter } from "../../Components/Mobile/Home/mobileFooter"

import { Box, Show } from "@chakra-ui/react"

const Home = () => {
  return(
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
        <Show breakpoint="(max-height:688px)">
          <Box height={'30vh'} margin={'auto'} padding={10}/>
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
  )
}

export default Home