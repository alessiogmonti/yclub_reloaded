import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from '../Pages/Mobile/home'
import MobileRoadmap from '../Pages/Mobile/mobileRoadmap'
import MobileTeam from '../Pages/Mobile/mobileTeam'
import MobileLaunchpad from '../Pages/Mobile/mobileLaunchpad'

import ContractsData from '../Data/contractsData'

export function MobileAnimatedRoutes(){
    const location = useLocation()
      return  (
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="roadmap" element={<MobileRoadmap />} />
              <Route path="team" element={<MobileTeam />} />
              <Route path="launchpad" element={<MobileLaunchpad data={ContractsData}/>} />
               {/* <Route path="*" element={<NoPage />} */}
            </Route>
          </Routes>
        </AnimatePresence>
      )
  }