import React from 'react';
import { ColorModeScript, Container } from "@chakra-ui/react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

const theme = extendTheme({
  "colors": {
    "purple": {
      "default": "#3B097C",
    },
    "lightpink": {
      "default": "#fae6fb"
    },
    "cyan": {
      "default": "#06d2d5",
    },
    "lightgreen": {
      "default": "#E7FBE6"
    },
    "green": {
      "default": "#00ecb7",
    },
    "pink": {
      "default": "#ff0380",
    },
    "text": {
      "default": "#404040"
    }
  }
})

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme} background-color="purple.default">
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

