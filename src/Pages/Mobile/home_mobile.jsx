import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch"
import { Menu } from "../../Components/Mobile/Menus/MainMenu"
import { MobileLanding } from "../../Components/Mobile/Home/landing_mobile"
import Video from "../../Components/Global/crowdfund"
import { MobileTokenomics } from "../../Components/Mobile/Home/tokenomics_mobile"
import { MobileJoin } from "../../Components/Mobile/Home/join_mobile"

import { Box, Show } from "@chakra-ui/react"

const Home = () => {
  return(
    <Box position={'absolute'}>
      <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
      <DarkModeSwitch />
      <Show breakpoint='(max-width: 1113px)'>
        <Menu/>
        <MobileLanding />
        <Show breakpoint="(max-height:400px)">
          <Box height={'50vh'} margin={'auto'} padding={10}/>
        </Show>
        <Video />
        <Show breakpoint="(max-height:688px)">
          <Box height={'30vh'} margin={'auto'} padding={10}/>
        </Show>
        <MobileTokenomics />
        <Show breakpoint="(max-height:400px)">
          <Box height={'190vh'} margin={'auto'} padding={10}/>
        </Show>
        <Show breakpoint="(max-height:688px)">
          <Box height={'10vh'} margin={'auto'} padding={10}/>
        </Show>
        <MobileJoin />
        <Show breakpoint="(max-height:688px)">
          <Box height={'10vh'} margin={'auto'} padding={10}/>
        </Show>
      </Show>
    </Box>
  )
}

export default Home