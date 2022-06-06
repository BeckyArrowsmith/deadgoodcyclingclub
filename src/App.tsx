import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

import Nav from './components/Nav';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Nav/>
  </ChakraProvider>
)
