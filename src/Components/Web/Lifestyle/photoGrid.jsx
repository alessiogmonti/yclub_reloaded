import { Grid, GridItem, Box, Heading, Image } from "@chakra-ui/react";
import { useEffect } from "react";

import { LifestyleImages } from "../../../Data/lifestyleImages";

// const urlPrivate = "../../../Assets/Lifestyle/gridImages/Monaco/*.jpg";
// const urlPublic = "/Lifestyle/gridImages/Monaco/*.jpg";
// const modules = import.meta.glob(
// 	"../../../Assets/Lifestyle/gridImages/Monaco/*.jpg",
// 	{ as: "url", eager: true }
// );

// console.log(modules);
// const imagePaths = [];
// for (const path in modules) {
// 	const p = new URL(path, import.meta.url).href;
// 	console.log(p);
// 	imagePaths.push(p);
// 	// modules[path]().then(() => {
// 	// 	const p = new URL(path, import.meta.url);
// 	// 	const data = {
// 	// 		path: p.pathname,
// 	// 		// area: p.pathname.split("!")[1].split(".")[0],
// 	// 	};
// 	// 	console.log(imagePaths);
// 	// 	imagePaths.push(data);
// 	// });
// }

// const modules = import.meta.glob(
// 	"../../../Assets/Lifestyle/gridImages/Monaco/*.jpg",
// 	{ as: "url", eager: true }
// );

// let imagePaths = [];
// for (const path in modules) {
// 	console.log(`path "${path}" => ${modules[path]}`);
// 	imagePaths.push[(path, modules[path])];
// }

const images = Object.entries(
	import.meta.glob("../../../Assets/Lifestyle/gridImages/Monaco/*.jpg", {
		as: "url",
		eager: true,
	})
).map(([path, src]) => [path, src]);

console.log(images);

export const PhotoGrid = (props) => {
	// useEffect(() => {
	// 	(async () => {
	// 		return;
	// 	})();
	// }, []);
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
					/>
				</GridItem>
			))}
		</Grid>
	);
};
