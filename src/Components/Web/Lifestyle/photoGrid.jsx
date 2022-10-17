import { Grid, GridItem, Box, Heading, Image } from "@chakra-ui/react";
import { useEffect } from "react";

export const PhotoGrid = (props) => {
	const images = Object.entries(
		import.meta.glob("../../../Assets/Lifestyle/gridImages/**/*.jpg", {
			as: "url",
			eager: true,
		})
	)
		.map((d) => d[0].includes(props.section.replace(" ", "_")) && [d[0], d[1]])
		.filter(Boolean);
	return (
		<Grid
			height={"auto"}
			width={"100%"}
			templateAreas={`
                            'area1 area1 area2 area2 area3'
                            'area1 area1 area4 area5 area6'
                            `}
			gridTemplateColumns="repeat(5, 1fr)"
			gridTemplateRows="repeat(2, 1fr)"
			gap={3}
		>
			{images.map((d, idx) => (
				<GridItem key={d[0]} area={`area${idx + 1}`} maxH={"100%"} minH={0}>
					<Image
						key={d[0]}
						src={d[1]}
						boxSize={"100%"}
						objectFit={"cover"}
						rounded={"5%"}
						fallback
					/>
				</GridItem>
			))}
		</Grid>
	);
};
