import {
	Box,
	Heading,
	Image,
	Flex,
	Divider,
	HStack,
	ButtonGroup,
	Button,
	IconButton,
} from "@chakra-ui/react";
import lanaCaribbean from "../../../Assets/Mission/lanaCaribbean.png";
import lanaNorway from "../../../Assets/Mission/lanaNorway.png";
import lanaArctic from "../../../Assets/Mission/lanaArctic.png";

import ship from "../../../Assets/Mission/shipinyard.png";
import { GiAnchor } from "react-icons/gi";

export const Content = () => (
	<>
		<Flex width={"100%"} justifyContent={"center"} my={10}>
			<Heading variant={"SubLanding"} width={"85%"} textAlign={"center"}>
				Bringing the luxury and extravagance of the Super Yacht Industry to the
				next generation.
			</Heading>
			<Divider orientation="vertical" />
		</Flex>
		<HStack overflow={"scroll"}>
			<Box
				borderWidth={"1px"}
				borderRadius={"100px"}
				borderColor={"light"}
				height={"100%"}
				minWidth={"100%"}
				p={5}
			>
				<Image
					src={lanaCaribbean}
					boxSize={"100%"}
					objectFit={"contain"}
					rounded={"150px"}
				/>
				<Heading p={5} fontSize={"20px"}>
					Here at YCLUB, we believe the industry is poised for innovation that
					improves the charter process from end-to-end while welcoming the next
					generation of indulgence seekers.
				</Heading>
			</Box>
			<Box
				borderWidth={"1px"}
				borderRadius={"100px"}
				borderColor={"light"}
				height={"100%"}
				minWidth={"100%"}
				p={5}
			>
				<Image
					src={lanaArctic}
					boxSize={"100%"}
					objectFit={"contain"}
					rounded={"150px"}
				/>
				<Heading p={5} fontSize={"20px"}>
					Through our team of industry veterans and Web3 integrated ecosystem,
					we’re bringing ground breaking levels of revenue generation, ownership
					verification, asset management, and lifestyle experiences to the new
					global audience.
				</Heading>
			</Box>
			<Box
				borderWidth={"1px"}
				borderRadius={"100px"}
				borderColor={"light"}
				height={"100%"}
				minWidth={"100%"}
				p={5}
			>
				<Image
					src={lanaNorway}
					boxSize={"100%"}
					objectFit={"contain"}
					rounded={"150px"}
				/>
				<Heading p={5} fontSize={"20px"}>
					Super Yachts represent the highest levels of luxury and extravagance
					for anyone with access to them. Unfortunately, the Super Yachting
					industry has been without true innovation for decades which has left
					generations locked out of these experiences.
				</Heading>
			</Box>
		</HStack>
		<Flex width={"100%"} justifyContent={"center"} my={20}>
			<Heading
				variant={"SubLanding"}
				width={"85%"}
				textAlign={"center"}
				textTransform={"lowercase"}
				fontSize={"20px"}
				lineHeight={"25px"}
			>
				We see an opportunity to disrupt the traditional methods of the industry
				and forge new paths forward to the benefit of the overall chartering
				ecosystem.
			</Heading>
		</Flex>
		<Image src={ship} boxSize={"100%"} />
		<Flex width={"100%"} justifyContent={"center"} my={20}>
			<Heading
				variant={"SubLanding"}
				width={"85%"}
				textAlign={"center"}
				textTransform={"lowercase"}
				fontSize={"20px"}
				lineHeight={"25px"}
			>
				Through a focus on community, Web3, and lifestyle management, we are
				transforming the Super Yachting industry by increasing revenue
				opportunities, simplifying and updated latent processes, and providing
				access to the next generation.
			</Heading>
		</Flex>
		<Flex width={"100%"} justifyContent={"center"} my={20} pb={20}>
			<ButtonGroup isAttached position={"fixed"} bottom={3}>
				<Button
					rounded={"xl"}
					bg={"light"}
					_dark={{ bg: "black" }}
					borderColor={"accent"}
					borderWidth={"1px"}
				>
					<Heading bgGradient={"radial( #008AFF,#FF3EFF)"} bgClip={"text"}>
						JOIN YCLUB
					</Heading>
				</Button>
				<IconButton
					bg={"light"}
					_dark={{ bg: "black" }}
					icon={<GiAnchor fontSize={"25px"} />}
				/>
			</ButtonGroup>
		</Flex>
	</>
);
