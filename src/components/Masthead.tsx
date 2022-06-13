
import React from 'react';

import {
  ChakraProvider,
  extendTheme,
  Container,
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


function Masthead() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Text color="pink.default">Masthead</Text>
      </Container>
    </ChakraProvider>  
  )
}

export default Masthead;
