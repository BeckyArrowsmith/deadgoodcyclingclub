import {
  Container,
  Flex,
  VStack,
} from "@chakra-ui/react"

import Nav from './components/Nav';
import Masthead from './components/Masthead';
import Ethos from './components/Ethos';
import Rides from './components/Rides';
import Contact from './components/Contact';

import Footer from './components/Footer';


export const App = () => (
  <VStack bg="lightpink.default" color="text.default">
      <Nav/>
      <Masthead/>
      <Ethos/>
      <Rides/>
      <Contact/>
      <Footer/>
  </VStack>
)
