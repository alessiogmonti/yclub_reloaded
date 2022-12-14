import { Show, Box } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"

import { WebAnimatedRoutes } from "./Utils/webAnimatedRoutes"
import { MobileAnimatedRoutes } from "./Utils/mobileAnimatedRoutes"
import { LandingLogo } from "./Components/Web/nav_web"

const App = () => (
  <>
    <Show breakpoint='(max-width: 1113px)'>
      <BrowserRouter>
        <MobileAnimatedRoutes />
      </BrowserRouter>
    </Show>


    <Show breakpoint='(min-width: 1114px)'>
      <BrowserRouter>
        <Box display={'flex'} height={'100vh'}>
          <LandingLogo />
          <WebAnimatedRoutes />
        </Box>
      </BrowserRouter>
    </Show>

  </>
)

export default App