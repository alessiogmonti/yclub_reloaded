import { motion } from "framer-motion"
import { Box, Heading, Center } from "@chakra-ui/react"
import { Scroller } from "../../Components/Web/scroller_web"
import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch"
import { DataContainer } from "../../Components/Web/Roadmap/dataContainer_web"
import { WebFooter } from "../../Components/Web/Home/webFooter"

const data = [
    { title : 'Drakar', date: 'Q1 2022', content: <DataContainer hasPassed data={ ['Research & Development', 'Concept Development'] } />},
    { title : 'Cog', date: 'Q2 2022', content: <DataContainer hasPassed data={['Roadmap', 'Funding', 'Tokenomics', 'Whitepaper', 'Website', 'NFT Art', 'Video', 'Smart Contract', 'Audit']} />},
    { title : 'Caravel', date: 'Q3 2022', content: <DataContainer hasPassed data={['Lana Collection Mint', 'Token Launch', 'Decentraland YCLUB', 'NFT Airdrop', 'Token Airdrop', 'Sandbox YCLUB', 'Yacht charter/sales Marketplace Development' ]}/>},
    { title : 'Carrack', date: 'Q4 2022', content: <DataContainer data={['$100 Million Mega Yacht Crowdfunding Mint ', 'Live From Monaco Yacht Show', 'Monaco YCLUB Megaparty', 'DEX', 'Liquidity Pools', 'NFT Marketplace', 'Yacht charter/sales Marketplace launch', 'PFP Collection Airdrop', 'Web3.0 eCommerce marketplace launch']}/>},
    { title : 'Galleon', date: 'Q1 2023', content: <DataContainer data={['YCLUB Wallet', 'Debit Visa to cash rewards', 'Mega Yacht Collection Mint', 'Mega Yacht Collection Mint', 'PFP Collection Airdrop']}/>},
    { title : 'Frigate', date: 'Q2 2023', content: <DataContainer data={['2nd Mega Yacht Crowdfunding mint', 'YCLUB Metaverse Beta launch', 'PFP Collection Airdrop']}/>},
    { title : 'Clipper', date: 'Q3 2023', content: <DataContainer data={['Crowdfunded SuperYacht Inauguration Party', 'Creation of the Mega Yacht Owner’s Club']}/>}
]

const WebRoadmap = () => (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
        <DarkModeSwitch />
        <Center width={'100vw'} position={'absolute'} alignItems={'center'} justifyContent={'center'}>
            <Heading variant={'Landing'} position={'relative'} 
            fontSize={'50px'} color={'light'}>ROADMAP</Heading>
        </Center>
        <Box position={'absolute'} width={'100vw'} right={'-85%'}>
            <Box display={'flex'} width={'100%'} height={'100vh'} >
                <Scroller width={'35vw'} data={data} component={<DataContainer />}/>
            </Box>
        </Box>
        <WebFooter />
    </motion.div>
)

export default WebRoadmap