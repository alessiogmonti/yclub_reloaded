import { HStack, Heading, IconButton, Box } from "@chakra-ui/react";
import { AiOutlineDownCircle } from "react-icons/ai";

export const Subtitle = (props) => (
	<Box with={"100%"} my={"5%"}>
		<HStack
			position={"relative"}
			width={"100%"}
			left={["2%", "5%", "18%", "34%", "61%"]}
		>
			<Heading
				variant={"Landing"}
				color={"light"}
				fontSize={["25px", "25px", "25px", "28px", "35px"]}
				letterSpacing={"5px"}
			>
				{props.content}
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
);
