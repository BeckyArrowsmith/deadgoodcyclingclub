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
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Dead Good Cycling Club</Heading>
      </ChakraProvider>      
      )
  }
}

export default Nav;