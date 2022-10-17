import {
	Flex,
	VStack,
	Box,
	Heading,
	Text,
	Link,
	Divider,
} from "@chakra-ui/react";
import { TieredPricing } from "./tieredPricing";

export const MembershipPerks = () => (
	<>
		<Flex width={"100%"} justifyContent={"center"}>
			<VStack width={"100%"} justifyContent={"center"} position={"relative"}>
				<Heading variant={"WebLanding"} fontSize={"40px"} color={"dark"}>
					JOIN YCLUB
				</Heading>
				<Heading
					variant={"WebLanding"}
					fontSize={"20px"}
					color={"dark"}
					textTransform={"uppercase"}
					textAlign={"center"}
				>
					The biggest super yacht community in the world.
				</Heading>
				<Text fontSize="19px" color={"dark"}>
					Read more on our <Link>whitepaper</Link>
				</Text>
			</VStack>
		</Flex>
		<Flex width={"100%"} justifyContent={"center"}>
			<TieredPricing />
		</Flex>
	</>
);
