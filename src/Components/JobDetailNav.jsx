import { Flex, Heading } from "@chakra-ui/react";

export default function JobDetailNav() {
  return (
    <Flex
      bg="#242424"
      alignItems="center"
      justifyContent="space-evenly"
      p="2"
      mb="2"
    >
      <Heading
        bgGradient="linear(to-r, blue.800, purple.300)"
        backgroundClip="text"
      >
        Hirez
      </Heading>
      <Heading
        bgGradient="linear(to-r, blue.800, purple.300)"
        backgroundClip="text"
      >
        Find Your Dream Job Here
      </Heading>
    </Flex>
  );
}
