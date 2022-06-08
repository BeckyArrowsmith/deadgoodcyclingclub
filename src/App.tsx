import * as React from "react"
import {
  Flex,
  VStack,
} from "@chakra-ui/react"

import Nav from './components/Nav';

export const App = () => (
  <VStack p={5} bg="purple.default">
    <Flex w="100%">
      <Nav/>
    </Flex>
  </VStack>
)
