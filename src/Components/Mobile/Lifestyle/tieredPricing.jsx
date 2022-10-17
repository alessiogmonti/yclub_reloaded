import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Center,
	HStack,
	Box,
	IconButton,
} from "@chakra-ui/react";

import { AiFillInfoCircle } from "react-icons/ai";

import { PriceCard } from "./priceCard";

export const TieredPricing = () => {
	return (
		<Tabs variant="soft-rounded" colorScheme="blue" minH={"60vh"}>
			<TabPanels
				borderColor={"dark"}
				borderRadius={"lg"}
				borderWidth={"1px"}
				bg={"light"}
			>
				<TabPanel>
					<PriceCard
						rarity={"RARE"}
						price={"0.12"}
						status={"70% Sold Out"}
						available={true}
					/>
				</TabPanel>
				<TabPanel>
					<PriceCard
						rarity={"S.RARE"}
						price={"0.28"}
						status={"coming soon"}
						available={false}
					/>
				</TabPanel>
				<TabPanel>
					<PriceCard
						rarity={"EPIC"}
						price={"0.32"}
						status={"sold out"}
						available={false}
					/>
				</TabPanel>
				<TabPanel>
					<PriceCard
						rarity={"LEGENDARY"}
						price={"1.5"}
						status={"sold out"}
						available={false}
					/>
				</TabPanel>
			</TabPanels>
			<TabList
				position={"relative"}
				bg={"light"}
				p={1}
				rounded={"lg"}
				borderColor={"dark"}
				borderRadius={"lg"}
				borderWidth={"1px"}
				my={2}
				top={1}
			>
				<Tab>RARE</Tab>
				<Tab>S.RARE</Tab>
				<Tab>EPIC</Tab>
				<Tab>LEGENDARY</Tab>
			</TabList>
		</Tabs>
	);
};
