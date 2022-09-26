import { extendTheme, ThemeConfig } from '@chakra-ui/react'
// import { Button } from './theming/button'
import { Heading, Text } from './theming/textstyles'
import { BoxStyles } from './theming/boxstyles'
import { Input } from './theming/input'

const fonts = { heading: "Space Grotesk",
                button: "Space Grotesk" }

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const config : ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: 'rgba(5,21,52,0.99)',
    dark: 'rgba(5,21,52,0.88)',
    light : 'rgba(228,228,228,0.99)',
    accent: '#2491EB',
  },
  fonts,
  breakpoints,
  components: {
    Input,
    Heading,
    Text,
  },
  layerStyles: BoxStyles,
})

export default theme
