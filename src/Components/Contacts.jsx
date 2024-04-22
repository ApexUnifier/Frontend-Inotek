import {
  Box,
  Flex,
  Text,
  Avatar,
} from "@chakra-ui/react";

export default function Contacts() {
  return (
    <Box p="4" borderRight="1px" borderColor="gray.200">
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Contacts
      </Text>
      {/* Dummy contacts list */}
      <Flex alignItems="center" mb="4">
        <Avatar size="md" name="John Doe" mr="2" />
        <Text>John Doe</Text>
      </Flex>
      <Flex alignItems="center" mb="4">
        <Avatar size="md" name="Jane Smith" mr="2" />
        <Text>Jane Smith</Text>
      </Flex>
      {/* Add more contacts here */}
    </Box>
  );
}
