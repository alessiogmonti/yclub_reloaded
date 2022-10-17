import {
	HStack,
	Image,
	Box,
	Text,
	Flex,
	Divider,
	Heading,
} from "@chakra-ui/react";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const textVariants = {
	offscreen: {
		opacity: 0,
	},
	onscreen: {
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.1,
			duration: 0.4,
		},
	},
};

const locations = [
	"capri",
	"monaco",
	"mykonos",
	"porto cervo",
	"st barths",
	"st tropez",
];

export const YachtingDestinations = (props) => {
	const images = Object.entries(
		import.meta.glob("../../../Assets/Lifestyle/gridImages/**/*.jpg", {
			as: "url",
			eager: true,
		})
	)
		.map((d) => d[0].includes(props.section.replace(" ", "_")) && [d[0], d[1]])
		.filter(Boolean);

	const imgRef = useRef(null);
	const rootRef = useRef(null);
	const inView = useInView(imgRef, { root: rootRef, once: false });

	return (
		<>
			<Box width={"100vw"}>
				<Flex width={"100%"} justifyContent={"center"}>
					<Box width={"75%"} my={1} mr={3}>
						<Heading
							variant={"Landing"}
							color={"dark"}
							fontSize={["18px", "10px", "15px", "20px", "25px"]}
							letterSpacing={"1px"}
							textTransform={"lowercase"}
							lineHeight={"23px"}
							textAlign={"center"}
						>
							Travel to the alluring coasts of some of the most enchanting
							countries around the world. Adventures await you ahead!
						</Heading>
					</Box>
				</Flex>
			</Box>
			<Box height={"55vh"}>
				<Box
					mt={5}
					// padding={4}
					w="100%"
					h={"100%"}
					maxW="900px"
					mx="auto"
					// bg="gray.800"
					sx={{ columnCount: [2], columnGap: "1px", rowCount: [4] }}
					overflow={"scroll"}
				>
					{images.map((src) => (
						<Image
							key={src}
							boxSize="100%"
							objectFit={"cover"}
							borderRadius="xl"
							mb={1}
							d="inline-block"
							src={src[1]}
							alt="Alt"
						/>
					))}
				</Box>
			</Box>
		</>
	);
};
