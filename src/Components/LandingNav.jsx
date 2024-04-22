import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  Slide,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function LandingNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container
      maxW="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      fontFamily="Roboto"
    >
      <Flex alignItems="center">
        <Button onClick={toggleSidebar} variant="outline" borderRadius="30px">
          <HamburgerIcon />
        </Button>
        <Box p="20px" pl="4">
          <Heading
            bgGradient="linear(to-r, blue.800, purple.300)"
            backgroundClip="text"
            fontSize="4xl" // Adjust font size as needed
          >
            Hirez
          </Heading>
        </Box>
      </Flex>
      <Box
        gap="20px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          border="1px solid #cfcfcf"
          bg="white"
          borderRadius="30px"
      
        >
          Login
        </Button>
        <Button colorScheme="purple" borderRadius="30px">
          Signup
        </Button>
      </Box>
      <Slide  direction="left" in={isOpen} style={{ zIndex: 10 }}>
        <VStack
          pos="fixed"
          top="0"
          left="0"
          h="100vh"
          w={{base:"100%",md:"300px",lg:"300px"}}
          bg="gray.200"
          spacing="4"
          p="4"
        >
          <Button onClick={toggleSidebar} alignSelf="flex-end">
            Close
          </Button>
          <Box>Link 1</Box>
          <Box>Link 2</Box>
          <Box>Link 3</Box>
          <Box>Link 4</Box>
          {/* Add more links as needed */}
        </VStack>
      </Slide>
    </Container>
  );
}
