import { Heading, Checkbox, Text, Flex } from "@chakra-ui/react";

export default function FindJobSecSideBar() {
  return (
    <Flex w="15%" flexDir="column" borderRight="1px solid grey">
      <Heading size="lg" mb="20px">
        Filters
      </Heading>
      <Text mb="10px">Working Schedule</Text>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Full Time
        </Text>
      </Checkbox>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Part Time
        </Text>
      </Checkbox>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Internship
        </Text>
      </Checkbox>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Project work
        </Text>
      </Checkbox>
      <Text mb="10px" mt="10px">Employment Type</Text>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Full Time
        </Text>
      </Checkbox>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Part Time
        </Text>
      </Checkbox>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Internship
        </Text>
      </Checkbox>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Project work
        </Text>
      </Checkbox>
      <Text mb="10px" mt="10px">Lorem ki mkc</Text>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Full Time
        </Text>
      </Checkbox>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Part Time
        </Text>
      </Checkbox>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Internship
        </Text>
      </Checkbox>
      <Checkbox colorScheme="red" defaultChecked>
        <Text fontSize="18px" fontWeight="500">
          Project work
        </Text>
      </Checkbox>
    </Flex>
  );
}
