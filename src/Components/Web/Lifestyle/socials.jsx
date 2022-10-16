import { Box, HStack, IconButton, Flex, Link } from "@chakra-ui/react";
import {
	FaTwitter,
	FaTelegram,
	FaInstagram,
	FaMedium,
	FaCheckDouble,
} from "react-icons/fa";

import FormManager from "../../../Utils/form";
import { Email } from "../../../Assets/Home/Icons/email";

const socialLinks = [
	{
		icon: <FaTwitter />,
		link: "https://twitter.com/yclub_io",
	},
	{ icon: <FaTelegram />, link: "https://t.me/yclub_official" },
	{ icon: <FaInstagram />, link: "https://www.instagram.com/yclub.io/" },
	{ icon: <FaMedium />, link: "https://medium.com/@yclub" },
];

export const Socials = () => (
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

export const SignUp = () => (
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
