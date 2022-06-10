
import React from 'react';

import {
  ChakraProvider,
  extendTheme,
  Text,
} from "@chakra-ui/react"


const theme = extendTheme({
  "colors": {
    "purple": {
      "default": "#3B097C",
    },
    "lightpurple": {
      "default": "#9529ff",
    },
    "cyan": {
      "default": "#06d2d5",
    },
    "green": {
      "default": "#00ecb7",
    },
    "pink": {
      "default": "#ff0380",
    }
  }
})


function Rides() {
  return (
    <ChakraProvider theme={theme}>
        <Text color="pink.default">Rides</Text>
    </ChakraProvider>  
  )
}

export default Rides;
