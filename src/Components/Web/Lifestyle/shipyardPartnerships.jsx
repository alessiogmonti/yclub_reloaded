import { Box, Image, Text, Heading, Flex } from "@chakra-ui/react";
import { useEffect } from "react";

// function moduleImport(glob) {
// 	const imagePaths = [];
// 	for (const path in glob) {
// 		glob[path]().then(() => {
// 			const p = new URL(path, import.meta.url);
// 			imagePaths.push(p.pathname);
// 		});
// 	}
// 	return imagePaths;
// }
// let images = import.meta.glob(
// 	"../../../Assets/Lifestyle/shipyardPartners/*.png"
// );
// let logos = import.meta.glob("../../../Assets/Lifestyle/shipyardLogos/*.png");

let shipyardData = {
	lurssen: {
		logo: "/Lifestyle/shipyardLogos/lurssen.png",
		image: "/Lifestyle/shipyardPartners/lurssen.png",
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
	return (
		<Box position={"relative"}>
			<Flex width={"100%"} justifyContent={"center"}>
				<Box
					position={"relative"}
					width={"80%"}
					my={5}
					borderColor={"accent"}
					borderWidth={"1px"}
					bg={"dark"}
					rounded={"20px"}
					p={2}
					top={"80px"}
				>
					<Heading
						variant={"Landing"}
						color={"light"}
						fontSize={["15px", "10px", "15px", "20px", "25px"]}
						letterSpacing={"2px"}
						textTransform={"lowercase"}
						lineHeight={"28px"}
					>
						Get access to the makings of some of the most illustrious super
						yachts and the teams behind them by seeing the shipyards where
						they’re born.
					</Heading>
				</Box>
			</Flex>
			<Box position={"absolute"} left={"3%"} top={"37%"}>
				<Box width={"15%"} height={"auto"} position={"relative"}>
					<Image
						src={shipyardData.lurssen.logo}
						boxSize={"100%"}
						objectFit={"contain"}
						margin={"auto"}
					/>
				</Box>
				<Box
					position={"relative"}
					width={"50%"}
					my={5}
					borderColor={"accent"}
					borderWidth={"1px"}
					bg={"dark"}
					rounded={"20px"}
					p={2}
				>
					<Text variant={"info"} color={"light"} fontSize={"25px"}>
						On 27 June 1875 the 24 year-old Friedrich Lürssen set up a
						boatbuilding workshop in Aumund. Today, Lürssen designs and
						constructs yachts, naval ships and special vessels. Trading as
						Lürssen Yachts, it is one of the leading builders of custom
						superyachts such as Paul Allen's Octopus, David Geffen's Rising Sun,
						Disbar, Flying Fox and Khalifa bin Zayed Al Nahyan's Azzam, the
						second largest private yacht in the world.
					</Text>
				</Box>
			</Box>
			<Image
				src={shipyardData.lurssen.image}
				boxSize={"100%"}
				margin={"auto"}
			/>
		</Box>
	);
};
