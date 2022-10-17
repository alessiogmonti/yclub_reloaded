import { Box, Flex, Heading } from "@chakra-ui/react";
import { Menu } from "../../Components/Mobile/Menus/MainMenu";
import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch";
import { Hero } from "../../Components/Mobile/Hero";
import { Content } from "../../Components/Mobile/Mission/content";
import { motion } from "framer-motion";

const MobileMission = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
	>
		<Box layerStyle={"background"} sx={{ filter: "blur(38px)" }} />
		<Menu />
		<DarkModeSwitch />
		<Box height={"35vh"}>
			<Flex
				width={"100vw"}
				position={"absolute"}
				alignItems={"center"}
				justifyContent={"center"}
				margin={0}
				top={0}
			>
				<Hero subtitle={"OUR MISSION"} />
			</Flex>
		</Box>
		<Content />
	</motion.div>
);

export default MobileMission;
