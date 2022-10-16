import { Container } from "../../Global/Container";
import MediaContainer from "../../Global/MediaContainer";
import { CustomButton } from "../../Global/customButton";
import { Info } from "../../../Assets/Home/Icons/info";
import { Divider, Box, Image } from "@chakra-ui/react";

import mobilemedia from "../../../Assets/Lifestyle/lanaShowcase.gif";

const iconStyle = {
	stroke: "rgba(5,21,52,0.88)",
	strokeWidth: "0.25px",
	width: "57px",
	height: "57px",
	fill: "white",
};

export const LandingVideo = () => (
	<Box
		position={"relative"}
		display={"block"}
		height={"100%"}
		mb={[null, null, null, null, null]}
	>
		<Container
			width="100%"
			position={"relative"}
			mx={[null]}
			direction={"column"}
		>
			<MediaContainer
				mobilemedia={<Image src={mobilemedia} />}
				webmedia={null}
			/>
			<Divider my={10} width={["50%"]} />
			<Heading></Heading>
			<Divider my={10} width={["50%"]} />
		</Container>
	</Box>
);
