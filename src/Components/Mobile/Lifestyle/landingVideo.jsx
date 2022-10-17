import { Container } from "../../Global/Container";
import MediaContainer from "../../Global/MediaContainer";
import { CustomButton } from "../../Global/customButton";
import { Info } from "../../../Assets/Home/Icons/info";
import { Divider, Box, Image, Heading, Flex } from "@chakra-ui/react";

import mobilemedia from "/Lifestyle/lanaShowcase.gif";

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
		width={"100%"}
	>
		<Box height={"40vh"}>
			<MediaContainer
				mobilemedia={
					<Image
						src={mobilemedia}
						rounded={"xl"}
						objectFit={"cover"}
						boxSize={"100%"}
					/>
				}
				webmedia={null}
			/>
		</Box>
		<Container
			width="100%"
			position={"relative"}
			mx={[null]}
			direction={"column"}
		>
			{/* <Divider
				my={5}
				width={["50%"]}
				colorScheme={"black"}
				_dark={{ color: "light" }}
			/> */}
			<Flex width={"100%"} justifyContent={"center"} px={5}>
				<Heading
					variant={"Landing"}
					color={"dark"}
					_dark={{ color: "light" }}
					fontSize={["19px", "10px", "15px", "20px", "25px"]}
					letterSpacing={"2px"}
					textTransform={"lowercase"}
					lineHeight={"25px"}
					textAlign={"center"}
				>
					Enjoy exclusive benefits, access to events, amenities, and programs in
					the super yacht industry and around the world starting today!
				</Heading>
			</Flex>
			{/* <Divider
				my={10}
				width={["50%"]}
				color={"black"}
				_dark={{ color: "light" }}
			/> */}
		</Container>
	</Box>
);

//sign up today and enjoy international access to exclusive benefits,
//events and programs in the super yacht industry!

//JOIN THE SUPER YACHT INDUSTRY
