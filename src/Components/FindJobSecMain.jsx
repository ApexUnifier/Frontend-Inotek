import  { useState, useEffect } from "react";
import { Box, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import JobCard from "./JobCard";

export default function FindJobSecMain() {
  const [jobs, setJobs] = useState([]);
  const colors = [
    "#E0FFFF", // Light Cyan
    "#F0E68C", // Khaki
    "#FFE4C4", // Bisque
    "#F0FFF0", // Honeydew
    "#FFF8DC", // Cornsilk
    "#FFDAB9", // Peach Puff
    "#F5DEB3", // Wheat
    "#FAFAD2", // Light Goldenrod Yellow
    "#FFEFDB", // Pale Goldenrod
    "#F0F8FF", // Alice Blue
    "#F0FFFF", // Azure
    "#F5F5DC", // Beige
  ];
  const getindex = ()=>{
    return Math.floor(Math.random()*12)
  }
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:4001/api/vacancy/");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data.vacancies);
        console.log(data.vacancies);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

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
            {jobs.length}
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
            {
              job.company && 
              <JobCard
                company_name={job.company.name}
                job_role={job.title}
                company_logo={job.company.logo}
                tags={job.skillsRequired}
                salary={`${job.expectedSalary.minSalary} - ${job.expectedSalary.maxSalary}`}
                location={job.location}
                bg={colors[getindex()]}
              />
            }
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
