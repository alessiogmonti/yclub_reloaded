import { Box } from "@chakra-ui/react";
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
			<Subtitle content={"YACHTING DESTINATIONS"} />
			<YachtingDestinations />
			<Subtitle content={"SHIPYARD PARTNERSHIPS"} />
			<ShipyardPartnerships />
			<Subtitle content={"MEMBERSHIP PERKS"} />
			<MembershipPerks />
			<Socials />
			<SignUp />
		</Box>
	);
};

export default WebLifestyle;
