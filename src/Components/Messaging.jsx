import {
  Box,
  Flex,
  Text,
  Avatar,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

export default function Messaging() {
  return (
    <Box p="4" maxW="70%">
      <Flex alignItems="center" justifyContent="space-between" mb="4">
        <Flex alignItems="center">
          <Avatar size="md" name="John Doe" mr="2" />
          <Box>
            <Text fontWeight="bold">John Doe</Text>
            <Text fontSize="sm" color="gray.500">
              Online
            </Text>
          </Box>
        </Flex>
        <IconButton aria-label="Settings" icon={<SettingsIcon />} />
      </Flex>
      {/* Dummy messages */}
      <Flex direction="column">
        <MessageItem sender="John Doe" message="Hello" />
        <MessageItem sender="John Doe" message="How are you?" />
        <MessageItem sender="John Doe" message="I'm fine, thanks!" />
      </Flex>
      <InputGroup mt="4">
        <Input placeholder="Type your message..." />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" colorScheme="blue">
            Send
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

function MessageItem({ sender, message }) {
  return (
    <Flex alignItems="center" mb="2">
      <Avatar size="sm" name={sender} />
      <Box
        bg="gray.100"
        p="3"
        borderRadius="md"
        ml="2"
        maxWidth="calc(100% - 40px)"
      >
        {message}
      </Box>
    </Flex>
  );
}

MessageItem.propTypes = {
  sender: PropTypes.string.isRequired, // Ensure sender prop is a string and is required
  message: PropTypes.string.isRequired, // Ensure message prop is a string and is required
};
