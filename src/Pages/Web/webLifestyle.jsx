import { Box } from "@chakra-ui/react"
import { Landing } from "../../Components/Web/Lifestyle/landing"

const WebLifestyle = () => {

    return (
        <Box position={'absolute'}>
            <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
            <Box position={'relative'} height={'100vh'}/>
            <Landing />
        </Box>
    )
}

export default WebLifestyle