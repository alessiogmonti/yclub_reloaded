import { Grid, GridItem, Box, Heading, Image } from "@chakra-ui/react";

// import { LifestyleImages } from "../../../Data/lifestyleImages";

const urlPrivate = "../../../Assets/Lifestyle/gridImages/Monaco/*.jpg";
const urlPublic = "/Lifestyle/gridImages/Monaco/*.jpg";
const modules = import.meta.glob(
	"../../../Assets/Lifestyle/gridImages/Monaco/*.jpg"
);
const imagePaths = [];
console.log(modules);
for (const path in modules) {
	modules[path]().then(() => {
		const p = new URL(path, import.meta.url);
		const data = {
			path: p.pathname,
			// area: p.pathname.split("!")[1].split(".")[0],
		};
		console.log(imagePaths);
		imagePaths.push(data);
	});
}

export const PhotoGrid = (props) => {
	// const imagePaths = LifestyleImages[props.section];
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
			{imagePaths.map((d, idx) => (
				<GridItem area={`area${idx + 1}`} maxH={"100%"} minH={0}>
					<Image
						src={d.path}
						boxSize={"100%"}
						objectFit={"cover"}
						rounded={"5%"}
					/>
				</GridItem>
			))}
		</Grid>
	);
};
