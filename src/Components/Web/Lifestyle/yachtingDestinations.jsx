import { PhotoGrid } from "./photoGrid";
import {
	Box,
	Heading,
	HStack,
	Flex,
	Divider,
	Text,
	Button,
} from "@chakra-ui/react";
import { useState } from "react";

let locations = [
	"Monaco",
	"St Tropez",
	"Capri",
	"St Barths",
	"Mykonos",
	"Porto Cervo",
];

export const YachtingDestinations = () => {
	const [location, setLocation] = useState("Monaco");
	return (
		<Flex width={"100%"} justifyContent={"center"} height={"100%"}>
			<Box
				width={"100%"}
				height={"100%"}
				position={"relative"}
				display={"block"}
			>
				<Box height={"10%"} position={"relative"} margin={5} display={"block"}>
					<Flex justifyContent={"center"} width={"100%"}>
						<Box width={"82%"} my={5}>
							<Heading
								variant={"Landing"}
								color={"light"}
								fontSize={["15px", "10px", "15px", "20px", "25px"]}
								letterSpacing={"2px"}
								textTransform={"lowercase"}
								lineHeight={"28px"}
							>
								Travel to the alluring coasts of some of the most enchanting
								countries around the world. Adventures await you ahead!
							</Heading>
						</Box>
					</Flex>
					<Flex justifyContent={"center"} width={"100%"}>
						<Box width={"80%"}>
							<Divider width={"100%"} />
							<HStack justifyContent={"space-between"} margin={3}>
								{locations.map((d) => (
									<Button
										onClick={() => setLocation(d)}
										variant={"outline"}
										_hover={{ borderColor: "whiteAlpha.200" }}
									>
										<Text variant={"info"} textTransform={"uppercase"}>
											{d}
										</Text>
									</Button>
								))}
							</HStack>
							<Divider width={"100%"} />
						</Box>
					</Flex>
					<Box
						display={"block"}
						height={"90vh"}
						position={"relative"}
						margin={"auto"}
					>
						<Flex
							width={"100%"}
							justifyContent={"center"}
							height={"90vh"}
							margin={"auto"}
							pt={"2%"}
						>
							<PhotoGrid section={location} />
						</Flex>
					</Box>
				</Box>
			</Box>
		</Flex>
	);
};
