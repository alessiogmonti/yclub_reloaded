import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch";
import { Menu } from "../../Components/Mobile/Menus/MainMenu";

import { Box, Center, Heading } from "@chakra-ui/react";
import { Hero } from "../../Components/Mobile/Hero";

import { LandingVideo } from "../../Components/Mobile/Lifestyle/landingVideo";

const MobileLifestyle = () => {
	return (
		<>
			<Box layerStyle={"background"} sx={{ filter: "blur(38px)" }} />
			<Menu />
			<DarkModeSwitch />
			<Center
				width={"100vw"}
				position={"absolute"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Hero subtitle={"SUPER YACHT LIFESTYLE"} />
			</Center>
			<LandingVideo />
		</>
	);
};

export default MobileLifestyle;
