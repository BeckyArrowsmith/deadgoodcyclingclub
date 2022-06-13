
import React from 'react';

import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
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


function Contact() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Heading id="contact" as="h2" color="pink.default">Contact</Heading>
      </Container>
    </ChakraProvider>  
  )
}

export default Contact;
