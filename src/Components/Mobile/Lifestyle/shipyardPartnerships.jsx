import { useRef, useEffect } from "react";
import {
	Box,
	Image,
	Flex,
	Heading,
	Divider,
	VStack,
	Text,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

let shipyardData = {
	lurssen: {
		logo: "/Lifestyle/shipyardLogos/lurssen.png",
		image: "/Lifestyle/shipyardPartners/lurssen.png",
		text: `On 27 June 1875 the 24 year-old Friedrich Lürssen set up a 
        boatbuilding workshop in Aumund. Today, Lürssen designs and
        constructs yachts, naval ships and special vessels. Trading as
        Lürssen Yachts, it is one of the leading builders of custom
        superyachts such as Paul Allen's Octopus, David Geffen's Rising Sun,
        Disbar, Flying Fox and Khalifa bin Zayed Al Nahyan's Azzam, the
        second largest private yacht in the world.`,
	},
	feadship: {
		logo: "/Lifestyle/shipyardLogos/feadship.png",
		image: "/Lifestyle/shipyardPartners/feadship.png",
	},
	benetti: {
		logo: "/Lifestyle/shipyardLogos/benetti.png",
		image: "/Lifestyle/shipyardPartners/benetti.png",
	},
	abeking: {
		logo: "/Lifestyle/shipyardLogos/abeking.png",
		image: "/Lifestyle/shipyardPartners/abeking.png",
	},
	oceanco: {
		logo: "/Lifestyle/shipyardLogos/oceanco.png",
		image: "/Lifestyle/shipyardPartners/oceanco.png",
	},
	admiral: {
		logo: "/Lifestyle/shipyardLogos/admiral.png",
		image: "/Lifestyle/shipyardPartners/admiral.png",
	},
	amels: {
		logo: "/Lifestyle/shipyardLogos/amels.png",
		image: "/Lifestyle/shipyardPartners/amels.png",
	},
};

export const ShipyardPartnerships = (props) => {
	return (
		<>
			<Box width={"100vw"}>
				<Flex width={"100%"} justifyContent={"center"}>
					<Box width={"75%"} my={1} mr={3}>
						<Heading
							variant={"Landing"}
							color={"dark"}
							fontSize={["18px", "10px", "15px", "20px", "25px"]}
							letterSpacing={"1px"}
							textTransform={"lowercase"}
							lineHeight={"23px"}
							textAlign={"center"}
						>
							Get access to the makings of some of the most illustrious super
							yachts and the teams behind them by seeing the shipyards where
							they’re born.
						</Heading>
					</Box>
				</Flex>
			</Box>
			<Box height={"50vh"}>
				{/* <Box
					mt={5}
					// padding={4}
					w="100%"
					h={"100%"}
					maxW="900px"
					mx="auto"
					// bg="gray.800"
					overflow={"scroll"}
				> */}
				<Image
					boxSize="100%"
					objectFit={"cover"}
					borderRadius="xl"
					mb={1}
					d="inline-block"
					src={shipyardData[props.path].image}
					alt="Alt"
				/>
				{/* </Box> */}
			</Box>
		</>
	);
};
