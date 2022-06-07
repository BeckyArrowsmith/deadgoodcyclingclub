import * as React from "react"
import {
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

import Nav from './components/Nav';

export const App = () => (
  // <ChakraProvider theme={theme}>
  //   <Nav/>
  // </ChakraProvider>
  <VStack p={5} backgroundColor="green">
    <Flex w="100%">
      <Nav/>
    </Flex>
  </VStack>
)
