import { Box} from "@chakra-ui/react";
import { LandingContent } from "../../Components/Web/Mission/landingContent";

const WebMission = () => (
	<Box position={"absolute"} width={"100vw"}>
		<Box layerStyle={"background"} sx={{ filter: "blur(38px)" }} />
		<Box position={"relative"} height={"100vh"} />
		<LandingContent />
	</Box>
);

export default WebMission;
