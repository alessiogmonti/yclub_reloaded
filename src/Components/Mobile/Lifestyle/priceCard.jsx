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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

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
					p={6}
					color={useColorModeValue("gray.800", "white")}
					align={"center"}
				>
					<Text
						fontSize={"sm"}
						fontWeight={500}
						bg={useColorModeValue("green.50", "green.900")}
						p={2}
						px={3}
						color={"green.500"}
						rounded={"full"}
					>
						{props.status}
					</Text>
					<Stack direction={"row"} align={"center"} justify={"center"}>
						<Text fontSize={"3xl"}>ETH</Text>
						<Text fontSize={"6xl"} fontWeight={800}>
							{props.price}
						</Text>
					</Stack>
				</Stack>

				<Box bg={useColorModeValue("gray.50", "gray.900")} px={3} py={5}>
					<List spacing={3}>
						<ListItem>
							<ListIcon as={CheckIcon} color="green.400" />
							5.000 page views
						</ListItem>
						<ListItem>
							<ListIcon as={CheckIcon} color="green.400" />
							50 automation executions
						</ListItem>
						<ListItem>
							<ListIcon as={CheckIcon} color="green.400" />
							50 identified users
						</ListItem>
						<ListItem>
							<ListIcon as={CheckIcon} color="green.400" />
							All features
						</ListItem>
					</List>

					<Button
						mt={10}
						w={"full"}
						bg={"green.400"}
						color={"white"}
						rounded={"xl"}
						boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
						_hover={{
							bg: "green.500",
						}}
						_focus={{
							bg: "green.500",
						}}
					>
						Start your trial
					</Button>
				</Box>
			</Box>
		</Center>
	);
}
