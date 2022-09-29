import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from '../Pages/Web/home'
import WebRoadmap from '../Pages/Web/webRoadmap'
import WebTeam from '../Pages/Web/webTeam'
import WebLaunchpad from '../Pages/Web/webLaunchpad'

import ContractsData from '../Data/contractsData'

export function WebAnimatedRoutes(){
    const location = useLocation()
      return  (
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="roadmap" element={<WebRoadmap />} />
              <Route path="team" element={<WebTeam />} />
              <Route path="launchpad" element={<WebLaunchpad data={ContractsData}/>} />
               {/* <Route path="*" element={<NoPage />} */}
            </Route>
          </Routes>
        </AnimatePresence>
      )
  }