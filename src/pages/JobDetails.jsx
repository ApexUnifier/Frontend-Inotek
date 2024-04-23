import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  VStack,
  StackDivider,
  Center,
  UnorderedList,
  ListItem,
  Tag,
} from "@chakra-ui/react";
import PropTypes from "prop-types"; // Import PropTypes library
import JobDetailNav from "../Components/JobDetailNav";

const jobs = [
  {
    id: 1,
    company: "Company A",
    logo: "https://via.placeholder.com/50",
    jobName: "Job Title 1",
    tags: ["Part-time", "Remote", "expert"],
    salary: "$50,000 - $70,000",
    datePosted: "April 20, 2024",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.",
    responsibilities: [
      "Responsibility 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
    ],
    requiredSkills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    companyDetails: {
      name: "Company A",
      logo: "https://via.placeholder.com/100",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius justo vitae neque efficitur fringilla.",
      location: "New York, NY",
      website: "https://www.companya.com",
    },
  },
  {
    id: 1,
    company: "Company A",
    logo: "https://via.placeholder.com/50",
    jobName: "Job Title 1",
    tags: ["Part-time", "Remote", "expert"],
    salary: "$50,000 - $70,000",
    datePosted: "April 20, 2024",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.",
    responsibilities: [
      "Responsibility 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
    ],
    requiredSkills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    companyDetails: {
      name: "Company A",
      logo: "https://via.placeholder.com/100",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius justo vitae neque efficitur fringilla.",
      location: "New York, NY",
      website: "https://www.companya.com",
    },
  },
  {
    id: 1,
    company: "Company A",
    logo: "https://via.placeholder.com/50",
    jobName: "Job Title 1",
    tags: ["Part-time", "Remote", "expert"],
    salary: "$50,000 - $70,000",
    datePosted: "April 20, 2024",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.",
    responsibilities: [
      "Responsibility 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
    ],
    requiredSkills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    companyDetails: {
      name: "Company A",
      logo: "https://via.placeholder.com/100",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius justo vitae neque efficitur fringilla.",
      location: "New York, NY",
      website: "https://www.companya.com",
    },
  },
  {
    id: 1,
    company: "Company A",
    logo: "https://via.placeholder.com/50",
    jobName: "Job Title 1",
    tags: ["Part-time", "Remote", "expert"],
    salary: "$50,000 - $70,000",
    datePosted: "April 20, 2024",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat, ac laoreet massa vestibulum.",
    responsibilities: [
      "Responsibility 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
      "Responsibility 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia turpis nec augue placerat",
    ],
    requiredSkills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    companyDetails: {
      name: "Company A",
      logo: "https://via.placeholder.com/100",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius justo vitae neque efficitur fringilla.",
      location: "New York, NY",
      website: "https://www.companya.com",
    },
  },
  // Add more job objects here if needed
];
let colors = ["green", "orange", "purple", "pink"];
const JobCard = ({ job }) => (
  <Box
    p="4"
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="0 2px 6px rgba(0,0,0,0.1)"
  >
    <Flex alignItems="center">
      <Image src={job.logo} alt={job.company} boxSize="50px" />
      <VStack gap="0">
        <Text ml="2" fontWeight="bold">
          {job.jobName}
        </Text>
        <Text fontSize="12px">{job.datePosted}</Text>
      </VStack>
    </Flex>
    <Text mt="2" fontSize="sm" mb="4">
      <Flex gap="2">
        {job.tags.map((tag) => (
          <Tag
            size="sm"
            key={tag}
            colorScheme={colors[jobs[0].tags.indexOf(tag)]}
          >
            {tag}
          </Tag>
        ))}
      </Flex>
    </Text>
    <hr></hr>
    <Text mt="2" fontSize="sm">
      Salary: {job.salary}
    </Text>
  </Box>
);

const JobDetails = () => {
  return (
    <Box>
      <JobDetailNav />
      <Box p="10px">
        <Flex>
          <Box w="25%">
            <VStack spacing="2" divider={<StackDivider borderColor="#fff" />}>
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </VStack>
          </Box>
          <Box w="50%" p="4">
            <Flex alignItems="center" justifyContent="space-between">
              <Heading as="h2" size="lg" mb="4">
                Plumber
              </Heading>
              <Flex gap="2">
                {jobs[0].tags.map((tag) => (
                  <Tag
                    key={tag}
                    colorScheme={colors[jobs[0].tags.indexOf(tag)]}
                  >
                    {tag}
                  </Tag>
                ))}
              </Flex>
            </Flex>
            {jobs.length > 0 && (
              <>
                <Text mb="2">
                  <strong>About the role:</strong>
                </Text>
                <Text align="justify" mb="4">
                  {" "}
                  {jobs[0].jobDescription}
                </Text>
                <Text mb="2">
                  <strong>Responsibilities:</strong>
                </Text>
                <UnorderedList mb="4">
                  {jobs[0].responsibilities.map((responsibility, index) => (
                    <ListItem key={index} textAlign="justify">
                      {responsibility}
                    </ListItem>
                  ))}
                </UnorderedList>
                <Text mb="2">
                  <strong>Required Skills:</strong>{" "}
                </Text>
                <Flex gap="5">
                  {jobs[0].requiredSkills.map((skill) => (
                    <Tag
                      key={skill}
                      colorScheme={
                        colors[jobs[0].requiredSkills.indexOf(skill)]
                      }
                    >
                      {skill}
                    </Tag>
                  ))}
                </Flex>
              </>
            )}
          </Box>
          <Flex w="25%" p="4" flexDir="column">
            <Center mb="4">
              <Flex alignItems="center" gap="5" width="100%" justifyContent="space-between">
                <Flex flexDir="column">
                  <Text mb="4">
                    <strong>
                      {jobs.length > 0 ? jobs[0].companyDetails.name : ""}
                    </strong>
                  </Text>
                  <strong>Founded</strong>
                  <Text>January 69,1969</Text>
                </Flex>
                <Image
                  src={jobs.length > 0 ? jobs[0].companyDetails.logo : ""}
                  alt={jobs.length > 0 ? jobs[0].companyDetails.name : ""}
                  boxSize="100px"
                />
              </Flex>
            </Center>

            <Text mb="4">
              <strong>About:</strong>{" "}
              {jobs.length > 0 ? jobs[0].companyDetails.about : ""}
            </Text>
            <Text mb="4">
              <strong>Location:</strong>{" "}
              {jobs.length > 0 ? jobs[0].companyDetails.location : ""}
            </Text>
            <Button
              colorScheme="messenger"
              borderRadius="30"
              onClick={() =>
                window.open(
                  jobs.length > 0 ? jobs[0].companyDetails.website : ""
                )
              }
            >
              Apply Now
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    jobName: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    salary: PropTypes.string.isRequired,
    datePosted: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    requiredSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
    companyDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default JobDetails;
