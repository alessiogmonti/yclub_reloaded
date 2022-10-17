import {
	Box,
	Divider,
	Flex,
	HStack,
	Button,
	Text,
	Heading,
} from "@chakra-ui/react";
import { LandingContent } from "../../Components/Web/Lifestyle/landingContent";
import { Subtitle } from "../../Components/Web/Lifestyle/subtitle";
import { YachtingDestinations } from "../../Components/Web/Lifestyle/yachtingDestinations";
import { ShipyardPartnerships } from "../../Components/Web/Lifestyle/shipyardPartnerships";
import { MembershipPerks } from "../../Components/Web/Lifestyle/membershipPerks";
import { Socials, SignUp } from "../../Components/Web/Lifestyle/socials";

const WebLifestyle = () => {
	return (
		<Box position={"absolute"}>
			<Box layerStyle={"background"} sx={{ filter: "blur(38px)" }} />
			<Box position={"relative"} height={"100vh"} />
			<LandingContent />
			{/* <Flex width={"100%"} justifyContent={"center"}>
				<Divider width={"70%"} my={10} />
			</Flex> */}
			<YachtingDestinations />
			<Flex width={"100%"} justifyContent={"center"}>
				<Divider width={"70%"} my={10} />
			</Flex>
			<Box position={"relative"}>
				<Flex width={"100%"} justifyContent={"center"}>
					<Heading
						variant={"Landing"}
						color={"light"}
						fontSize={["15px", "10px", "15px", "20px", "25px"]}
						letterSpacing={"2px"}
						textTransform={"lowercase"}
						lineHeight={"28px"}
						width={"80%"}
					>
						Get access to the makings of some of the most illustrious super
						yachts and the teams behind them by seeing the shipyards where
						they’re born.
					</Heading>
				</Flex>
				<ShipyardPartnerships />
			</Box>
			<Flex width={"100%"} justifyContent={"center"}>
				<Divider width={"70%"} my={10} />
			</Flex>{" "}
			<MembershipPerks />
			<Flex width={"100%"} justifyContent={"center"}>
				<Divider width={"70%"} my={10} />
			</Flex>{" "}
			<Socials />
			<SignUp />
		</Box>
	);
};

export default WebLifestyle;
