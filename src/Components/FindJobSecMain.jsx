import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
export default function FindJobSecMain() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      async function fetchJobs() {
        try {
          const response = await fetch("db/db.json");
          const data = await response.json();
          setJobs(data);
        } catch (error) {
          console.error("Error fetching jobs:", error);
        }
      }

      fetchJobs();
    }, []);


  return (
    <Box w="85%" p="20px" pt="0">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex gap="20px" alignItems="center">
          <Heading size="lg">Recommended jobs</Heading>
          <Box
            border="1px solid grey"
            p="5px 10px"
            borderRadius="20px"
            fontWeight="bold"
          >
            69
          </Box>
        </Flex>
        <Flex alignItems="center" gap="20px">
          <Text color="gray" fontSize="16px">
            Sort by
          </Text>
          <Text>Last Updated</Text>
          <img src="/img/filter.png" alt="filter_icon" width="20px"></img>
        </Flex>
      </Flex>
      <Grid
        templateColumns={[
          "repeat(auto-fill, minmax(300px, 1fr))",
          "repeat(auto-fill, minmax(300px, 1fr))",
          "repeat(auto-fill, minmax(300px, 1fr))",
        ]}
        gap={6}
        p={4}
      >
        {jobs.map((job, index) => (
          <Box key={index}>
            <JobCard
              company_name={job.company_name}
              job_role={job.job_role}
              company_logo={job.company_logo}
              tags={job.tags}
              salary={job.salary}
              location={job.location}
              bg={job.bg}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
