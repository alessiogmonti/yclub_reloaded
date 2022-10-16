import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const MediaContainer = (props) => {
	let size = useWindowSize();
	return (
		<Box width={"95%"} height={"95%"}>
			{size.width < 500 ? props.mobilemedia : props.webmedia}
		</Box>
	);
};

function useWindowSize() {
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
}

export default MediaContainer;
