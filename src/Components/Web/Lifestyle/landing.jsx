import {
	Box,
	Heading,
	HStack,
	IconButton,
	Image,
	Flex,
	Center,
	Divider,
	Text,
	VStack,
	Link,
} from "@chakra-ui/react";
import { AiOutlineDownCircle } from "react-icons/ai";
import {
	FaTwitter,
	FaTelegram,
	FaInstagram,
	FaMedium,
	FaCheckDouble,
} from "react-icons/fa";

import lana from "../../../Assets/Lifestyle/lanaShowcase.gif";
import { Subtitle } from "./subtitle";
import { YachtingDestinations } from "./yachtingDestinations";
import { ShipyardPartnerships } from "./shipyardPartnerships";
import { MembershipPerks } from "./membershipPerks";
import FormManager from "../../../Utils/form";
import { Email } from "../../../Assets/Home/Icons/email";

export const Landing = () => (
	<Box width={"100vw"}>
		<LandingContent />
		<Subtitle content={"YACHTING DESTINATIONS"} />
		<YachtingDestinations />
		<Subtitle content={"SHIPYARD PARTNERSHIPS"} />
		<ShipyardPartnerships />
		<Subtitle content={"MEMBERSHIP PERKS"} />
		<MembershipPerks />
		<Socials />
		<SignUp />
	</Box>
);

const socialLinks = [
	{
		icon: <FaTwitter />,
		link: "https://twitter.com/yclub_io",
	},
	{ icon: <FaTelegram />, link: "https://t.me/yclub_official" },
	{ icon: <FaInstagram />, link: "https://www.instagram.com/yclub.io/" },
	{ icon: <FaMedium />, link: "https://medium.com/@yclub" },
];

const Socials = () => (
	<Flex width={"100%"} justifyContent={"center"}>
		<Box
			height={"25%"}
			width={"30%"}
			bg={"light"}
			_dark={{ bg: "dark", borderColor: "accent" }}
			borderColor={"white"}
			borderWidth={"1px"}
			rounded={"50px"}
		>
			<HStack
				width={"100%"}
				height={"100%"}
				justifyContent={"space-between"}
				p={2}
				px={5}
			>
				{socialLinks.map((d, idx) => (
					<Link isExternal href={d.link}>
						<IconButton
							variant={"ghost"}
							color={"accent"}
							isRound
							size={"xl"}
							p={1}
							fontSize={"70px"}
							aria-label={"medium"}
							icon={d.icon}
						/>
					</Link>
				))}
			</HStack>
		</Box>
	</Flex>
);

const SignUp = () => (
	<Flex width={"100%"} justifyContent={"center"}>
		<Box
			position={"relative"}
			width={[null, "27vw", "25vw", "25vw", "50%"]}
			p={5}
			mt={"10%"}
			rounded={"lg"}
			borderWidth={"1px"}
			borderColor={"accent"}
			bg={"light"}
			_dark={{ bg: "dark" }}
			zIndex={1}
			my={"5%"}
		>
			<FormManager
				CTA_accent={"EMAIL"}
				CTA_reg={"ME"}
				CTA_icon={<Email />}
				buttonWidth={[null, "23vw", "22vw", "21vw", "21vw"]}
			/>
		</Box>
	</Flex>
);

const LandingContent = () => (
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
