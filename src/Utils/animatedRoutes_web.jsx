import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from '../Pages/Web/home_web'
import WebRoadmap from '../Pages/Web/roadmap_web'
import WebTeam from '../Pages/Web/team_web'
import WebLaunchpad from '../Pages/Web/launchpad_web'


export function WebAnimatedRoutes(){
    const location = useLocation()
      return  (
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="roadmap" element={<WebRoadmap />} />
              <Route path="team" element={<WebTeam />} />
              <Route path="launchpad" element={<WebLaunchpad />} />
               {/* <Route path="*" element={<NoPage />} */}
            </Route>
          </Routes>
        </AnimatePresence>
      )
  }