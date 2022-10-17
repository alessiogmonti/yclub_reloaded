import { DarkModeSwitch } from "../../Components/Global/DarkModeSwitch";
import { Menu } from "../../Components/Mobile/Menus/MainMenu";

import { Hero } from "../../Components/Mobile/Hero";

import { LandingVideo } from "../../Components/Mobile/Lifestyle/landingVideo";
import { YachtingDestinations } from "../../Components/Mobile/Lifestyle/yachtingDestinations";
import { motion } from "framer-motion";
import { ShipyardPartnerships } from "../../Components/Mobile/Lifestyle/shipyardPartnerships";
import { MembershipPerks } from "../../Components/Mobile/Lifestyle/membershipPerks";

import { useState } from "react";
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Center,
	HStack,
	IconButton,
	Box,
	Button,
	Flex,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";

const locations = [
	"Monaco",
	"Capri",
	"Porto Cervo",
	"St Tropez",
	"St Barths",
	"Mykonos",
];

const shipyards = [];

const MobileLifestyle = () => {
	const [filter, setFilter] = useState("Monaco");
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
			<Tabs
				variant="soft-rounded"
				colorScheme="blue"
				position={"fixed"}
				bottom={0}
				maxW={"100%"}
			>
				<TabPanels
					borderColor={"dark"}
					borderRadius={"lg"}
					borderWidth={"1px"}
					bg={"whiteAlpha.900"}
					_dark={{ bg: "dark" }}
				>
					<TabPanel>
						<LandingVideo />
					</TabPanel>
					<TabPanel>
						<Box py={1}>
							<YachtingDestinations section={filter} />
						</Box>
						<Wrap maxW={"90vw"}>
							{locations.map((d) => (
								<WrapItem>
									<Button onClick={() => setFilter(d)}>{d}</Button>
								</WrapItem>
							))}
						</Wrap>
					</TabPanel>
					<TabPanel>
						<ShipyardPartnerships />
						<Wrap maxW={"90vw"}>
							{shipyards.map((d) => (
								<WrapItem>
									<Button onClick={() => setFilter(d)}>{d}</Button>
								</WrapItem>
							))}
						</Wrap>
					</TabPanel>
					<TabPanel>
						<MembershipPerks />
					</TabPanel>
				</TabPanels>
				<TabList
					overflow={"scroll"}
					bg={"light"}
					p={2}
					rounded={"lg"}
					borderColor={"dark"}
					borderRadius={"lg"}
					borderWidth={"1px"}
					my={2}
					maxWidth={"100vw"}
				>
					<Tab>LANA</Tab>
					<Tab>DESTINATIONS</Tab>
					<Tab>PARTNERS</Tab>
					<Tab>MEMBERSHIP</Tab>
				</TabList>
			</Tabs>
		</>
	);
};

export default MobileLifestyle;
