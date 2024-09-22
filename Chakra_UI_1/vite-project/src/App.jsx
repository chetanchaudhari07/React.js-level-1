import { useState } from 'react'
import { ChakraProvider, Box, Heading, Button, Input, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

import './App.css'

function App() {



  return (


    <ChakraProvider>
      <Box maxW="md" mx="auto" mt="10" p="6" boxShadow="lg" borderRadius="md">

        <Heading as="h1" size="xl" mb="6" textAlign="center">
          Enter Your Name
        </Heading>


        <Input placeholder="Enter some text" mb="4" />


        <Button colorScheme="teal" size="lg" mb="6">
          Enter
        </Button>


        <Card>
          <CardHeader>
            <Heading size="md">Your Name</Heading>
          </CardHeader>
          <CardBody>
            
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">Learn More</Button>
          </CardFooter>
        </Card>
      </Box>
    </ChakraProvider>


  )
}

export default App
