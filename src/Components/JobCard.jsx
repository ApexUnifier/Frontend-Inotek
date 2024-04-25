import { Box, Flex, Button, Text, Badge, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function JobCard({
  company_name,
  job_role,
  company_logo,
  tags,
  salary,
  location,
  bg,
}) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="20px"
      overflow="hidden"
      border="1px solid gray"
      boxShadow="lg"
      bg={bg}
      p="4"
      height="100%" // Ensure all cards have the same height
      display="flex" // Make the card flex container
      flexDirection="column" // Arrange children vertically
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="semibold">
          {job_role}
        </Text>
        <Button colorScheme="blue" variant="outline" mr="2">
          Save
        </Button>
      </Flex>
      <Flex alignItems="center" mt="2" >
        {company_logo && (
          <Image src={company_logo} alt={company_name} boxSize="50px" mr="2" />
        )}
        <Text fontSize="lg" fontWeight="bold">
          {company_name}
        </Text>
      </Flex>
      <Text mt="2" color="gray.600">
        Location: {location}
      </Text>
      <Text mt="2" color="gray.600">
        Salary: {salary}
      </Text>
      <Flex mt="2">
        {tags.map((tag, index) => (
          <Badge key={index} colorScheme={bg} mr="2">
            {tag}
          </Badge>
        ))}
      </Flex>
      <Flex justifyContent="flex-end" mt="auto">
        {" "}
        {/* Push buttons to bottom */}
        <Button colorScheme="gray" variant="solid" mr="2">
          <Link to="/jobdetails">Details</Link>
        </Button>
        <Button colorScheme="gray" variant="outline">
          Save for Later
        </Button>
      </Flex>
    </Box>
  );
}

JobCard.propTypes = {
  company_name: PropTypes.string.isRequired,
  job_role: PropTypes.string.isRequired,
  company_logo: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  salary: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
