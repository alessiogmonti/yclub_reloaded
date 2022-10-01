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