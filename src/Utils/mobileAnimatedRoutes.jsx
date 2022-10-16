import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../Pages/Mobile/home";
import MobileRoadmap from "../Pages/Mobile/mobileRoadmap";
import MobileTeam from "../Pages/Mobile/mobileTeam";
import MobileLaunchpad from "../Pages/Mobile/mobileLaunchpad";
import MobileLifestyle from "../Pages/Mobile/mobileLifestyle";

import ContractsData from "../Data/contractsData";

import ReactGA from "react-ga";
import { useEffect } from "react";

export function MobileAnimatedRoutes() {
	const location = useLocation();
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
		console.log(window.location.pathname);
	}, [location.pathname]);
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="roadmap" element={<MobileRoadmap />} />
					<Route path="team" element={<MobileTeam />} />
					<Route
						path="mint"
						element={<MobileLaunchpad data={ContractsData} />}
					/>
					<Route path="lifestyle" element={<MobileLifestyle />} />
					{/* <Route path="*" element={<NoPage />} */}
				</Route>
			</Routes>
		</AnimatePresence>
	);
}
