
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
  Text,
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
        <Heading as="h1" mt="50px" mb="50px" fontWeight="semibold" fontStyle="italic" color="cyan.default">Dead Good <Text as="span" fontStyle="normal" color="pink.default">Cycling Club</Text></Heading>
      </Container>
      <Container centerContent>
        <List color="pink.default" fontSize="20px" mb="50">
          <Link pt="2" pr="15" pb="2" pl="15">Ethos</Link>
          <Link pt="2" pr="15" pb="2" pl="15">Rides</Link>
          <Link pt="2" pr="15" pb="2" pl="15">Contact</Link>
        </List>
      </Container>
    </VStack>
        
    </ChakraProvider>  
  )
}

export default Nav;
