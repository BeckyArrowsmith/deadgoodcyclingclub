
import React from 'react';

import {
  Box,
  Container,
  ChakraProvider,
  extendTheme,
  Heading,
  Link,
  List,
  Spacer,
  VStack
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


function Nav() {
  return (
    <ChakraProvider theme={theme}>
    <VStack>
      <Container centerContent>
        <Heading as="h1" fontWeight="semibold" color="cyan.default">Dead Good Cycling Club</Heading>
      </Container>
      <Container centerContent>
        <List color="pink.default" >
          <Link pr="2">Ethos</Link>
          <Link pr="2">Rides</Link>
          <Link>Contact</Link>
        </List>
      </Container>
    </VStack>
        
    </ChakraProvider>  
  )
}

export default Nav;
