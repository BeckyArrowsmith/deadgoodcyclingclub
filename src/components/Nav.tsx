import React, { Component } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
  theme,
  Heading
} from "@chakra-ui/react"

export class Nav extends Component {
  render() {
    return(
      <ChakraProvider theme={theme}>
        Nav bar
      </ChakraProvider>      
      )
  }
}

export default Nav;