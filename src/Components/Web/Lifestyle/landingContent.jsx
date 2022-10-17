import lana from "/Lifestyle/lanaShowcase.gif";
import { AiOutlineDownCircle } from "react-icons/ai";
import {
	Box,
	Heading,
	HStack,
	IconButton,
	Flex,
	Image,
} from "@chakra-ui/react";

export const LandingContent = () => (
	<>
		<Box position={"absolute"} right={"5%"} top={200} zIndex={3}>
			<Heading variant={"WebLanding"}>YCLUB</Heading>
			<Heading
				position={"relative"}
				float={"right"}
				variant={"Landing"}
				color={"light"}
				fontSize={"50px"}
				letterSpacing={"5px"}
			>
				Lifestyle
			</Heading>
		</Box>
		<Box
			position={"relative"}
			bottom={90}
			left={["2%", "5%", "18%", "34%", "51%"]}
		>
			<HStack width={"100%"}>
				<Heading
					variant={"Landing"}
					color={"light"}
					fontSize={["25px", "25px", "25px", "28px", "35px"]}
					letterSpacing={"5px"}
				>
					YCLUB'S SUPER YACHT LIFESTYLE
				</Heading>
				<IconButton
					size={"xl"}
					variant={"outline"}
					rounded={"full"}
					color={"light"}
					_hover={{ color: "white", bg: "accent" }}
					icon={<AiOutlineDownCircle fontSize={"50px"} />}
					onClick={() => window.scrollBy(0, 1000)}
				/>
			</HStack>
		</Box>
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
					Enjoy exclusive benefits, access to events, amenities, and programs in
					the super yacht industry and around the world starting today!
				</Heading>
			</Box>
		</Flex>
		<Flex width={"100%"} justifyContent={"center"}>
			<Image src={lana} maxW={"90%"} borderRadius={"5%"} />
		</Flex>
	</>
);
