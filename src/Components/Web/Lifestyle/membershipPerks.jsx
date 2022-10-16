import {
	Box,
	Stack,
	HStack,
	Heading,
	Text,
	VStack,
	useColorModeValue,
	List,
	ListItem,
	ListIcon,
	Button,
	Link,
	Flex,
} from "@chakra-ui/react";
import { FaCheckCircle, FaCircleNotch } from "react-icons/fa";

import { MembershipData } from "../../../Data/membershipData";

export const MembershipPerks = () => (
	<Flex width={"100%"} justifyContent={"center"}>
		<VStack width={"100%"}>
			<Heading variant={"WebLanding"}>JOIN YCLUB</Heading>
			<Heading variant={"SubLanding"}>
				The biggest super yacht community in the world.
			</Heading>
			<Text fontSize="20px" color={"light"}>
				Read more on our <Link>whitepaper</Link>
			</Text>
			<TieredPricing />
		</VStack>
	</Flex>
);

function TieredPricing() {
	return (
		<Flex width={"98%"} justifyContent={"center"}>
			<Box py={12}>
				<HStack spacing={2} textAlign="center"></HStack>
				<Stack
					direction={{ base: "column", md: "row" }}
					textAlign="center"
					justify="center"
					spacing={{ base: 1, lg: 4 }}
					py={10}
				>
					<MemberBenefits />
					{tiers.map((d) => (
						<PriceCard {...d} />
					))}
				</Stack>
			</Box>
		</Flex>
	);
}

let tiers = [
	{ rarity: "RARE", availability: "3888/5000", price: "0.12", isMain: true },
	{ rarity: "S.RARE", availability: "COMING SOON", price: "0.28" },
	{ rarity: "EPIC", availability: "SOLD OUT", price: "0.39" },
	{ rarity: "LEGENDARY", availability: "SOLD OUT", price: "1.5" },
];

function MemberBenefits() {
	return (
		<PriceWrapper>
			<Box py={4} px={12}>
				<Text fontWeight="500" fontSize="2xl">
					MEMBERSHIP
				</Text>
				<HStack justifyContent="center">
					{/* <Text fontSize="3xl" fontWeight="600">
							ETH
						</Text> */}
					<Text fontSize="5xl" fontWeight="900">
						BENEFITS
					</Text>
				</HStack>
			</Box>
			<VStack
				bg={useColorModeValue("gray.50", "gray.700")}
				py={4}
				borderBottomRadius={"xl"}
			>
				<List spacing={3} textAlign="start" px={12}>
					{MembershipData.map((d) => (
						<Benefits benefit={d.benefit} />
					))}
				</List>
			</VStack>
		</PriceWrapper>
	);
}

function Benefits(props) {
	return (
		<ListItem>
			<Text>{props.benefit} </Text>
		</ListItem>
	);
}

function PriceCard(props) {
	return (
		<PriceWrapper>
			<Box position="relative">
				<Box
					position="absolute"
					top="-16px"
					left="50%"
					style={{ transform: "translate(-50%)" }}
				>
					<Text
						textTransform="uppercase"
						bg={useColorModeValue("blue.300", "blue.700")}
						px={3}
						py={1}
						color={useColorModeValue("light", "light")}
						fontSize="sm"
						fontWeight="600"
						rounded="xl"
					>
						{props.availability}
					</Text>
				</Box>
				<Box py={4} px={12}>
					<Text fontWeight="500" fontSize="2xl">
						{props.rarity}
					</Text>
					<HStack justifyContent="center">
						<Text fontSize="3xl" fontWeight="600">
							ETH
						</Text>
						<Text fontSize="5xl" fontWeight="900">
							{props.price}
						</Text>
					</HStack>
				</Box>
				<VStack
					bg={useColorModeValue("light", "dark")}
					borderColor={"accent"}
					py={4}
					borderBottomRadius={"xl"}
				>
					<List spacing={3} textAlign="start" px={12}>
						{MembershipData.map((d) => (
							<Value item={d.access[props.rarity]} />
						))}
					</List>
					{props.isMain && (
						<Box w="80%" pt={7}>
							<Button
								w="full"
								bg="dark"
								color="light"
								_hover={{ color: "dark", bg: "light" }}
								borderColor={"accent"}
								borderWidth={"1px"}
							>
								BUY NOW
							</Button>
						</Box>
					)}
				</VStack>
			</Box>
		</PriceWrapper>
	);
}

function Value(props) {
	return (
		<ListItem>
			{String(props.item) === props.item ? (
				<Text>{props.item}</Text>
			) : props.item ? (
				<ListIcon as={FaCheckCircle} color="green.500" />
			) : (
				<ListIcon as={FaCircleNotch} color="gray.500" />
			)}
		</ListItem>
	);
}

function PriceWrapper({ children }) {
	return (
		<Box
			mb={4}
			shadow="base"
			borderWidth="1px"
			alignSelf={{ base: "center", lg: "flex-start" }}
			borderColor={useColorModeValue("gray.200", "gray.500")}
			borderRadius={"xl"}
		>
			{children}
		</Box>
	);
}
