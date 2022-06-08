import React from 'react';
import {
  ChakraProvider,
  theme,
  Heading
} from "@chakra-ui/react"

function Nav() {
  return (
    <ChakraProvider theme={theme}>
      <Heading ml="8" size="md" fontWeight="semibold" color="cyan.default">Dead Good Cycling Club</Heading>
    </ChakraProvider>  
  )
}

export default Nav;