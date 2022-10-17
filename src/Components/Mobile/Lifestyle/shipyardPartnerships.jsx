import { useRef, useEffect } from "react";
import { Box, Image, Flex, Heading, Divider, VStack, Text } from "@chakra-ui/react";
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

export const ShipyardPartnerships = () => {
	const imgRef = useRef(null);
	const rootRef = useRef(null);
	const inView = useInView(imgRef, { root: rootRef, once: false });
	return (
		<>
			<Box width={"100vw"} my={10}>
				<Flex justifyContent={"center"} width={"100%"}>
					<Box width={"82%"} my={5}>
						<Heading
							variant={"Landing"}
							color={"light"}
							fontSize={["19px", "10px", "15px", "20px", "25px"]}
							letterSpacing={"2px"}
							textTransform={"lowercase"}
							lineHeight={"25px"}
							textAlign={"center"}
						>
							Get access to the makings of some of the most illustrious super
							yachts and the teams behind them by seeing the shipyards where
							they’re born.
						</Heading>
					</Box>
				</Flex>
				<Flex width={"100%"} justifyContent={"space-around"}>
					<Box width={"80%"}>
						<Divider width={"100%"} my={5} />
						{/* <HStack>
							{locations.map((d) => (
								<Heading
									fontSize={"15px"}
									textTransform={"uppercase"}
									width={"100%"}
								>
									{d}
								</Heading>
							))}
						</HStack> */}
						<Divider width={"90%"} my={5} />
					</Box>
				</Flex>
			</Box>
			<Box
				position={"relative"}
				width={"99vw"}
				maxWidth={"100vw"}
				height={"60vh"}
				overflow={"scroll"}
			>
				<VStack
					position={"relative"}
					overflow={"scroll"}
					ref={rootRef}
					height={"95%"}
					maxW={"99%"}
					maxH={"95%"}
				>
					{Object.entries(shipyardData).map((key, value) => (
						<Box
							ref={imgRef}
							minWidth={"100%"}
							height={"100%"}
							border={"1px solid white"}
							display={"flex"}
						>
							<Image
								src={key[1].image}
								boxSize={"100%"}
								objectFit={"contain"}
								rounded={"lg"}
							/>
							<Text position={"absolute"}>{key[1].text}</Text>
						</Box>
					))}
				</VStack>
			</Box>
		</>
	);
};
