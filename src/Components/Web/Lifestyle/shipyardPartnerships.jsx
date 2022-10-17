import {
	Box,
	Image,
	Text,
	Heading,
	Flex,
	Divider,
	HStack,
	Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
		text: `Feadship is a cooperative venture between two shipyards Royal Van Lent Shipyard and Koninklijke De Vries Scheepsbouw. Feadship designs and constructs high-end luxury yachts and is one of the leading builders of custom superyachts such as Aquarius, Symphony, Savannah and Venus.`,
	},
	benetti: {
		logo: "/Lifestyle/shipyardLogos/benetti.png",
		image: "/Lifestyle/shipyardPartners/benetti.png",
		text: `Benetti is an Italian shipbuilding and boat building company based in Viareggio, Livorno, and Fano, owned by Azimut. Benetti designs and constructs motoryachts, and is one of the leading builders of custom superyachts, having won the Showboats International magazine "shipyard number 1" award six times in a row, the only yard to have done so.`,
	},
	abeking: {
		logo: "/Lifestyle/shipyardLogos/abeking.png",
		image: "/Lifestyle/shipyardPartners/abeking.png",
		text: "Abeking & Rasmussen (A&R) is a shipyard situated in Lemwerder, near Bremen in the German state of Lower Saxony. As of late five highly modern production hangars, a new dock, a syncrolift as well as diverse workshops for processing wood, steel and aluminium have been erected at the shipyard. A&R is now able to launch yachts of up to 125 m length. An enormous increase in possibilities for the shipyard, but also for all those interested that previously lacked just those few meters to pure bliss.",
	},
	oceanco: {
		logo: "/Lifestyle/shipyardLogos/oceanco.png",
		image: "/Lifestyle/shipyardPartners/oceanco.png",
		text: "Oceanco has built 29 custom superyachts up to 117 m length. Several 100 m+ yachts are currently under construction. The company has the ability to simultaneously build five yachts in the 80 m+ category (at various stages of design, engineering and construction), delivering approximately two superyachts per year. In 2008 the company acquired more land adjacent to the present yard, and in 2010 they set about demolishing the old buildings and slips, to make way for a new covered dry dock, which now allows them to construct yachts up to 140 metres.",
	},
	admiral: {
		logo: "/Lifestyle/shipyardLogos/admiral.png",
		image: "/Lifestyle/shipyardPartners/admiral.png",
		text: `The Italian Sea Group is a global operator in the nautical industry. The Group features the capability to offer a total luxurious experience, made of quality, attention to detail, design, art, and innovation that represent the real essence of made in Italy.`,
	},
	amels: {
		logo: "/Lifestyle/shipyardLogos/amels.png",
		image: "/Lifestyle/shipyardPartners/amels.png",
		text: `Damen Yachting has a rich history in luxury yacht building. In 2018 we celebrated 100 years of Amels and we can trace the maritime DNA at our yards back for centuries. Damen Yachting, a division within the Damen Shipyards Group, was created in 2019. The division combines the pedigree and heritage of our Amels yachts with our growing portfolio of SeaXplorer yachts and Yacht Support vessels.`,
	},
};

const shipyards = [
	["Lurssen", "lurssen"],
	["Amels", "amels"],
	["Benetti", "benetti"],
	["Feadship", "feadship"],
	["Abeking & Rasmussen", "abeking"],
	["Admiral", "admiral"],
	["Oceanco", "oceanco"],
];

export const ShipyardPartnerships = (props) => {
	const [partner, setPartner] = useState("lurssen");
	return (
		<Box position={"relative"}>
			<Flex width={"100%"} justifyContent={"center"}>
				<Box
					position={"relative"}
					width={"90%"}
					my={5}
					borderColor={"accent"}
					borderWidth={"1px"}
					bg={"dark"}
					rounded={"20px"}
					p={2}
					top={"80px"}
				>
					<Divider width={"100%"} />
					<HStack justifyContent={"space-between"} margin={3}>
						{shipyards.map((d) => (
							<Button
								onClick={() => setPartner(d[1])}
								variant={"outline"}
								_hover={{ borderColor: "whiteAlpha.200" }}
							>
								<Text variant={"info"} textTransform={"uppercase"}>
									{d[0]}
								</Text>
							</Button>
						))}
					</HStack>
					<Divider width={"100%"} />
				</Box>
			</Flex>
			<Box position={"absolute"} left={"3%"} top={"37%"}>
				<Box width={"15%"} height={"auto"} position={"relative"}>
					{/* <Image
						src={shipyardData[props.path].logo}
						boxSize={"100%"}
						objectFit={"contain"}
						margin={"auto"}
					/> */}
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
						{shipyardData[partner].text}
					</Text>
				</Box>
			</Box>
			<Image
				src={shipyardData[partner].image}
				boxSize={"100%"}
				margin={"auto"}
			/>
		</Box>
	);
};
