import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import styles from "./LandingSec.module.css";
import { useEffect, useState } from "react";

export default function LandingSec() {
  const navigate = useNavigate(); // Initialize navigate function
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };

  useEffect(() => {
    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleGetStarted = () => {
    navigate("/findjob"); // Navigate to the FindJob page
  };

  return (
    <Box display="flex">
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexDir="column"
        mt={{base:"50px",md:"30px",lg:"10px"}}
        gap="10px"
      >
        <Box
          fontSize="xs"
          bg="#f0f0f0"
          pl="5px"
          pr="5px"
          borderRadius="10px"
          w="fit-content"
        >
          Lorem ipsum dolor sit amet . Job seeker
        </Box>
        <Box maxW="70%" textAlign="center">
          <Heading
            bgGradient="linear(to-r, blue.800, purple.300)"
            backgroundClip="text"
            mb="20px"
            size={{ base: "lg", md: "lg", lg: "xl" }}
          >
            A regular job seeker app, but better in every aspect
          </Heading>
          <Text
            color="gray"
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
            voluptatum! Dolorem Lorem ipsum dolor sit amet. Lorem ipsum dolor.
          </Text>
        </Box>
        <Box
          w={{base:"80%",md:"75%",lg:"60%"}}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          border="1px solid #f0f0f0"
          padding="20px"
          borderRadius="10px"
        >
          <Text>
            <Heading size={{ base: "lg", md: "lg", lg: "xl" }}>60.5+</Heading>
            <Text
              fontSize={{ base: "14px", md: "18px", lg: "20px" }}
              color="gray"
            >
              Million Users
            </Text>
          </Text>
          <Text>
            <Heading size={{ base: "lg", md: "lg", lg: "xl" }}>7.2B+</Heading>
            <Text
              color="gray"
              fontSize={{ base: "14px", md: "18px", lg: "20px" }}
            >
              Job Posted
            </Text>
          </Text>
          <Text>
            <Heading size={{ base: "lg", md: "lg", lg: "xl" }}>219.1B</Heading>
            <Text
              color="gray"
              fontSize={{ base: "14px", md: "18px", lg: "20px" }}
            >
              Proposal Sent
            </Text>
          </Text>
        </Box>
        <Button
          borderRadius="40px"
          colorScheme="purple"
          onClick={handleGetStarted}
        >
          Get started &#8594;
        </Button>
      </Box>
      {isLargeScreen && (
        <Box>
          <img
            className={styles.img}
            height="800px"
            width="800px"
            src="./img/Resume-amico.png"
            alt=""
          />
        </Box>
      )}
    </Box>
  );
}
