import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from '../Pages/Mobile/home_mobile'
import MobileRoadmap from '../Pages/Mobile/roadmap_mobile'
import MobileTeam from '../Pages/Mobile/team_mobile'
import MobileLaunchpad from '../Pages/Mobile/launchpad_mobile'

export function MobileAnimatedRoutes(){
    const location = useLocation()
      return  (
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="roadmap" element={<MobileRoadmap />} />
              <Route path="team" element={<MobileTeam />} />
              <Route path="launchpad" element={<MobileLaunchpad />} />
               {/* <Route path="*" element={<NoPage />} */}
            </Route>
          </Routes>
        </AnimatePresence>
      )
  }