import { Grid, GridItem, Box, Heading, Image } from "@chakra-ui/react";

const modules = import.meta.glob(
	"../../../Assets/Lifestyle/gridImages/Monaco/*.jpg"
);

const imagePaths = [];

for (const path in modules) {
	modules[path]().then(() => {
		const p = new URL(path, import.meta.url);
		const data = {
			url: p.pathname,
			area: p.pathname.split("!")[1].split(".")[0],
		};
		console.log(data);
		imagePaths.push(data);
	});
}

export const PhotoGrid = () => {
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
			{imagePaths.map((d) => (
				<GridItem area={d.area} maxH={"100%"} minH={0}>
					<Image
						src={d.url}
						boxSize={"100%"}
						objectFit={"cover"}
						rounded={"5%"}
					/>
				</GridItem>
			))}
		</Grid>
	);
};
