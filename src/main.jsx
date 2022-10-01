import '@fontsource/space-grotesk'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { HelmetProvider } from 'react-helmet-async';

const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <CacheProvider value={emotionCache} >
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </CacheProvider>
    </HelmetProvider>
  </React.StrictMode>
)
