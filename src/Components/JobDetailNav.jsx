import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function JobDetailNav() {
  return (
    <Flex bg="#131E25" alignItems="center" justifyContent="space-evenly" p="2">
      <Link to="/findjob">
        <Heading
          bgGradient="linear(to-r, blue.800, purple.300)"
          backgroundClip="text"
        >
          Hirez
        </Heading>
      </Link>
      <Heading
        bgGradient="linear(to-r, blue.800, purple.300)"
        backgroundClip="text"
      >
        Find Your Dream Job Here
      </Heading>
    </Flex>
  );
}
