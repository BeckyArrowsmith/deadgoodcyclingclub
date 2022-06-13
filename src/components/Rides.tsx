
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


function Rides() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Heading id="rides" as="h2" color="pink.default">Rides</Heading>

        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id velit consequat, porttitor diam ut, convallis nisl. Sed non mi sed augue faucibus dignissim. Praesent pretium ligula enim, ac lacinia sapien malesuada non. Quisque quis eros lacinia, pretium quam in, commodo lacus. Maecenas et justo sed mauris auctor egestas vel quis mauris. Suspendisse justo risus, rutrum at viverra sit amet, placerat ut lorem.</Text> 
        
        <Text>Sed faucibus imperdiet neque, non egestas arcu. In pulvinar elit quam. Praesent bibendum fermentum accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec suscipit urna. In vehicula lobortis purus. Fusce tincidunt dapibus porta.</Text>
      </Container>
    </ChakraProvider>  
  )
}

export default Rides;
