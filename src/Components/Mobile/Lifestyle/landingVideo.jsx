import { Container } from "../Global/Container";
import MediaContainer from "../../Components/Global/MediaContainer";
import { CustomButton } from "./customButton";
import { Info } from "../../Assets/Home/Icons/info";
import { Details } from "../../Components/Mobile/Menus/Home/CrowdfundDetails";
import { Divider, Box } from "@chakra-ui/react";

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
		height={"100vh"}
		mb={[null, null, null, null, null]}
	>
		<Container
			width="100%"
			position={"relative"}
			mx={[null]}
			direction={"column"}
		>
			<MediaContainer mobilemedia={mobilemedia} webmedia={null} />
			<Divider my={10} width={["50%"]} />
			<CustomButton
				bg={"rgba(5,21,52,0.96)"}
				zVal={6}
				variant={"main-link"}
				accent_text={"learn"}
				regular_text={"more"}
				icon={<Info {...iconStyle} />}
				content={<Details />}
			/>
			<Divider my={10} width={["50%"]} />
		</Container>
	</Box>
);
