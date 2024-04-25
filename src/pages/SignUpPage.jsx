import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import styles from "./SignUpPage.module.css";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import JobDetailNav from "../Components/JobDetailNav";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && name && phone) {
      try {
        const response = await axios.post(
          "http://localhost:4001/api/user/signup",
          {
            name,
            email,
            phoneNo: parseInt(phone),
            password,
          }
        );
        console.log("Sign-up successful", response.data);
        setSuccessMessage("Sign-up successful. Redirecting to sign-in page...");
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000); // Hide the success message after 2 seconds
      } catch (error) {
        setError("Sign-up failed. Please try again."); // Handle errors if any
      }
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <Box maxH="100vh">
      <JobDetailNav />
      <Flex
        alignItems="center"
        justifyContent="center"
        minHeight="90vh"
        className={styles.body}
      >
        <Box
          p={4}
          pl={8}
          pr={8}
          width="50%"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          className={styles.container}
        >
          <Box textAlign="center">
            <Heading color="white">Sign Up</Heading>
          </Box>
          <Box my={4} textAlign="left">
            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
            {successMessage && (
              <Alert status="success">
                <AlertIcon />
                {successMessage}
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel color="white">Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  color="whitesmoke"
                  focusBorderColor="#00dbde"
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel color="white">Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  color="whitesmoke"
                  focusBorderColor="#fc00ff"
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel color="white">Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  color="whitesmoke"
                  focusBorderColor="#00dbde"
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel color="white">Phone number</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  color="whitesmoke"
                  focusBorderColor="#fc00ff"
                />
              </FormControl>
              <Flex w="100%" justifyContent="space-between">
                <Link to="/login">
                  <button className={styles.btn} type="button">
                    Sign In
                  </button>
                </Link>
                <button className={styles.btn} type="submit">
                  Sign Up
                </button>
              </Flex>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUpPage;
