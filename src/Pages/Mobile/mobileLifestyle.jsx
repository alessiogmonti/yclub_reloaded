import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch";
import { Menu } from "../../Components/Mobile/Menus/MainMenu";

import { Box, Center, Heading, Flex } from "@chakra-ui/react";
import { Hero } from "../../Components/Mobile/Hero";

import { LandingVideo } from "../../Components/Mobile/Lifestyle/landingVideo";

const MobileLifestyle = () => {
	return (
		<>
			<Box layerStyle={"background"} sx={{ filter: "blur(38px)" }} />
			<Menu />
			<DarkModeSwitch />
			<Box height={"40vh"}>
				<Flex
					width={"100vw"}
					position={"absolute"}
					alignItems={"center"}
					justifyContent={"center"}
					margin={0}
				>
					<Hero subtitle={"SUPER YACHT LIFESTYLE"} />
				</Flex>
			</Box>
			<LandingVideo />
		</>
	);
};

export default MobileLifestyle;
