import {
	Box,
	Center,
	Text,
	Stack,
	List,
	ListItem,
	ListIcon,
	Button,
	useColorModeValue,
	HStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { MembershipData } from "../../../Data/membershipData";
import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";

export function PriceCard(props) {
	return (
		<Center>
			<Box
				// maxW={"330px"}
				w={"90%"}
				bg={useColorModeValue("light", "dark")}
				boxShadow={"sm"}
				rounded={"md"}
				overflow={"scroll"}
			>
				<Stack
					textAlign={"center"}
					p={1}
					color={useColorModeValue("gray.800", "white")}
					align={"center"}
				>
					<Text
						fontSize={"sm"}
						fontWeight={500}
						bg={useColorModeValue("green.50", "green.900")}
						p={0}
						px={3}
						color={"green.500"}
						rounded={"full"}
					>
						{props.status}
					</Text>
					<Stack direction={"row"} align={"center"} justify={"center"}>
						<Text fontSize={"1xl"}>ETH</Text>
						<Text fontSize={"2xl"} fontWeight={800}>
							{props.price}
						</Text>
					</Stack>
				</Stack>

				<Box bg={useColorModeValue("gray.50", "gray.900")} px={3} py={5}>
					<Box overflow={"scroll"} maxH={"16vh"}>
						<List spacing={3}>
							{MembershipData.map((d) => (
								<HStack justifyContent={"space-between"}>
									<ListItem> {d.benefit}</ListItem>
									<Value item={d.access[props.rarity]} />
								</HStack>
							))}
						</List>
					</Box>
					{props.available ? (
						<Button
							mt={10}
							w={"full"}
							bg={"blue.400"}
							color={"white"}
							rounded={"xl"}
							boxShadow={"0 5px 20px 0px rgb(172 187 120 / 43%)"}
							_hover={{
								bg: "blue.500",
							}}
							_focus={{
								bg: "blue.500",
							}}
						>
							Buy Now
						</Button>
					) : (
						<Button
							mt={10}
							w={"full"}
							bg={"gray.400"}
							color={"white"}
							rounded={"xl"}
							boxShadow={"0 5px 20px 0px rgb(222 222 222 / 43%)"}
							_hover={{
								bg: "gray.400",
							}}
							_focus={{
								bg: "gray.400",
							}}
						>
							{props.status}
						</Button>
					)}
				</Box>
			</Box>
		</Center>
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
				<ListIcon as={FaRegTimesCircle} color="gray.500" />
			)}
		</ListItem>
	);
}
