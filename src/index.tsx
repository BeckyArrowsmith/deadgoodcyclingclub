import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
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
      // "50": "#F1E7FD",
      // "100": "#D7BCFA",
      // "200": "#BE92F7",
      // "300": "#A467F4",
      // "400": "#8B3CF1",
      // "500": "#7111EE",
      // "600": "#5A0EBE",
      // "700": "#440A8F",
      // "800": "#2D075F",
      // "900": "#170330"
    },
    "lightpurple": {
      "default": "#9529ff",
      // "50": "#F2E5FF",
      // "100": "#DCB8FF",
      // "200": "#C58AFF",
      // "300": "#AE5CFF",
      // "400": "#972EFF",
      // "500": "#8100FF",
      // "600": "#6700CC",
      // "700": "#4D0099",
      // "800": "#330066",
      // "900": "#1A0033"
    },
    "cyan": {
      "default": "#06d2d5",
      // "50": "#E6FEFE",
      // "100": "#BAFCFD",
      // "200": "#8DFAFC",
      // "300": "#60F8FB",
      // "400": "#34F6F9",
      // "500": "#07F5F8",
      // "600": "#06C4C6",
      // "700": "#049395",
      // "800": "#036263",
      // "900": "#013132"
    },
    "green": {
      "default": "#00ecb7",
      // "50": "#E5FFF9",
      // "100": "#B8FFEF",
      // "200": "#8AFFE5",
      // "300": "#5CFFDA",
      // "400": "#2EFFD0",
      // "500": "#00FFC6",
      // "600": "#00CC9E",
      // "700": "#009977",
      // "800": "#00664F",
      // "900": "#003328"
    },
    "pink": {
      "default": "#ff0380",
      // "50": "#FFE5F2",
      // "100": "#FFB8DB",
      // "200": "#FF8AC4",
      // "300": "#FF5CAD",
      // "400": "#FF2E96",
      // "500": "#FF007E",
      // "600": "#CC0065",
      // "700": "#99004C",
      // "800": "#660033",
      // "900": "#330019"
    }
  }
})

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
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

