import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      variant="outline"
      rounded="full"
      position="fixed"
      bg={'whiteAlpha.800'}
      color={'dark'}
      _dark = {{
          color:'accent',
          bg:'blackAlpha.800'
      }}
      top={4}
      right={4}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      colorScheme="blue"
      onClick={toggleColorMode}
      style={{zIndex:15}}
    />
  )
}
