import { BellIcon, SettingsIcon } from "@chakra-ui/icons";
import { Box, Heading, Flex, Avatar, Square } from "@chakra-ui/react";
import { NavLink,Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function FindJobNav({ feature }) {
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        pl="30px"
        pr="30px"
        bg="#212121"
        color="#777"
      >
        <Box>
          <Link to="/findjob">
            <Heading
              bgGradient="linear(to-r, blue.800, purple.300)"
              backgroundClip="text"
            >
              Hirez
            </Heading>
          </Link>
        </Box>
        <Flex gap="12" alignItems="center" justifyContent="space-evenly">
          <Box
            borderBottom={feature === "FindJob" ? "3px solid white" : "none"}
            padding="20px"
          >
            <NavLink to="/findjob">Findjob</NavLink>
          </Box>
          <Box
            borderBottom={feature === "Messages" ? "3px solid white" : "none"}
            padding="20px"
          >
            <NavLink to="/chat">Messages</NavLink>
          </Box>
          <Box
            borderBottom={feature === "Hiring" ? "3px solid white" : "none"}
            padding="20px"
          >
            <NavLink to="/hiring">Hiring</NavLink>
          </Box>
          <Box
            borderBottom={feature === "Community" ? "3px solid white" : "none"}
            padding="20px"
          >
            <NavLink to="/community">Community</NavLink>
          </Box>
          <Box
            borderBottom={feature === "FAQ" ? "3px solid white" : "none"}
            padding="20px"
          >
            <NavLink to="/faq">FAQ</NavLink>
          </Box>
        </Flex>
        <Flex>
          <img src="img/location (1).png" alt="" width="30px" />
          <Box>New Delhi, India</Box>
        </Flex>
        <Flex alignItems="center" gap="15px">
          <Avatar size="xs"></Avatar>

          <Square border="1px solid grey" borderRadius="50%" p="5px">
            <SettingsIcon color="gray"></SettingsIcon>
          </Square>
          <Square border="1px solid grey" padding="5px" borderRadius="50%">
            <BellIcon color="gray.500" fontSize="20px"></BellIcon>
          </Square>
        </Flex>
      </Flex>
    </Box>
  );
}

FindJobNav.propTypes = {
  feature: PropTypes.string.isRequired,
};
