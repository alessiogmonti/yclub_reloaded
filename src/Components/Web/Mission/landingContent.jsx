import {
	Box,
	Heading,
	HStack,
	IconButton,
	Flex,
	VStack,
	Image,
} from "@chakra-ui/react";
import { AiOutlineDownCircle } from "react-icons/ai";

import ship from "../../../Assets/Mission/shipinyard.png";
import lanaGold from "../../../Assets/Mission/lanaGold.png";

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
				WHO WE ARE
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
					Bringing the luxury and extravagance of the Super Yacht Industry to
					the next generation.
				</Heading>
			</Box>
		</Flex>
		<Flex width={"100%"} justifyContent={"center"}>
			<div style={{ position: "relative", paddingTop: "56.60377358490566%" }}>
				<iframe
					src="https://iframe.mediadelivery.net/embed/67633/6ff902d1-6b13-4ec3-b333-13820f64cd52?autoplay=true&muted=true"
					loading="lazy"
					style={{
						border: "none",
						position: "absolute",
						top: "0",
						height: "100%",
						width: "100%",
					}}
					allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
					allowFullScreen={true}
				></iframe>
			</div>
		</Flex>
		<Box position={"relative"} width={"100vw"} height={"300vh"}>
			<Flex width={"100%"} justifyContent={"center"} zIndex={2}>
				<Image
					src={lanaGold}
					minH={"100%"}
					boxSize={"100%"}
					objectFit={"contain"}
					position={"absolute"}
					zIndex={-1}
					rounded={"150px"}
				/>
				<VStack
					width={"90%"}
					height={"150%"}
					borderColor="white"
					borderRadius="50px"
					borderWidth={"1px"}
					position={"absolute"}
					top={"10%"}
					p={"10%"}
					zIndex={5}
				/>
			</Flex>
			<Box position={"absolute"} top={"15%"} width={"100vw"} height={"100%"}>
				<Box
					position={"relative"}
					width={"80%"}
					bg={"dark"}
					rounded={"50px"}
					roundedStart={0}
					left={0}
					p={3}
				>
					<Heading
						my={3}
						ml={"15%"}
						p={5}
						width={"85%"}
						fontSize={"25px"}
						fontWeight={300}
						lineHeight={"40px"}
						letterSpacing={"5%"}
						color={"light"}
						zIndex={2}
						border={"1px solid white"}
						borderRadius={"50px"}
						borderWidth={"1px"}
						overflow={"visible"}
					>
						Super Yachts represent the highest levels of luxury and extravagance
						for anyone with access to them. Unfortunately, the Super Yachting
						industry has been without true innovation for decades which has left
						generations locked out of these experiences.
					</Heading>
				</Box>
				<Box
					position={"absolute"}
					width={"80%"}
					bg={"dark"}
					rounded={"50px"}
					roundedEnd={0}
					right={0}
					top={"25%"}
				>
					<Heading
						my={3}
						ml={"2%"}
						p={5}
						width={"82%"}
						fontSize={"25px"}
						fontWeight={300}
						lineHeight={"40px"}
						letterSpacing={"5%"}
						color={"light"}
						zIndex={2}
						border={"1px solid white"}
						borderRadius={"50px"}
						borderWidth={"1px"}
						overflow={"visible"}
					>
						Here at YCLUB, we believe the industry is poised for innovation that
						improves the charter process from end-to-end while welcoming the
						next generation of indulgence seekers.
					</Heading>
				</Box>
				<Flex width={"100%"} justifyContent={"center"}>
					<Box
						bottom={"-20%"}
						position={"absolute"}
						width={"80%"}
						bg={"dark"}
						rounded={"50px"}
						justifyContent={"center"}
						height={"55%"}
					>
						<Flex width={"100%"} justifyContent={"center"}>
							<Heading
								my={3}
								textAlign={"center"}
								p={5}
								width={"82%"}
								fontSize={"25px"}
								fontWeight={300}
								lineHeight={"40px"}
								letterSpacing={"5%"}
								color={"light"}
								zIndex={2}
								border={"1px solid white"}
								borderRadius={"50px"}
								borderWidth={"1px"}
								overflow={"visible"}
							>
								Through our team of industry veterans and Web3 integrated
								ecosystem, we’re bringing ground breaking levels of revenue
								generation, ownership verification, asset management, and
								lifestyle experiences to the new global audience.
							</Heading>
							<Box position={"absolute"} bottom={"1%"}>
								<Flex justifyContent={"center"}>
									<Heading
										width={"80%"}
										fontSize={"30px"}
										fontWeight={500}
										lineHeight={"45px"}
										letterSpacing={"%5"}
										color={"light"}
									>
										We see an opportunity to disrupt the traditional methods of
										the industry and forge new paths forward to the benefit of
										the overall chartering ecosystem.
									</Heading>
								</Flex>
							</Box>
						</Flex>
					</Box>
				</Flex>
				<Box position={"absolute"} bottom={"-12%"}>
					<Image src={ship} boxSize={"100%"} objectFit={"contain"} />
				</Box>
			</Box>
			<Box position={"absolute"} bottom={"-50%"}>
				<Flex width={"100%"} justifyContent={"center"}>
					<Heading
						width={"80%"}
						fontSize={"40px"}
						fontWeight={500}
						lineHeight={"45px"}
						letterSpacing={"%5"}
						color={"light"}
					>
						Through a focus on community, Web3, and lifestyle management, we are
						transforming the Super Yachting industry by increasing revenue
						opportunities, simplifying and updated latent processes, and
						providing access to the next generation.
					</Heading>
				</Flex>
			</Box>
		</Box>
	</>
);
