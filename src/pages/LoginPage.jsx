import { useState } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Alert,
  AlertIcon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import JobDetailNav from "../Components/JobDetailNav";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4001/api/user/login",
        {
          email,
          password,
        }
      );

      const data = response.data;

      if (response.status === 200) {
        localStorage.setItem("userId", data.user._id);
        setSuccessMessage(data.message);
        setError("");
        setIsLoginSuccess(true);

        // Show modal after successful login
        setShowModal(true);
      } else {
        setError(data.message);
        setSuccessMessage("");
        setIsLoginSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while logging in.");
      setSuccessMessage("");
      setIsLoginSuccess(false);
    }
  };

  return (
    <Box maxHeight="100vh">
      <JobDetailNav />
      <Flex
        alignItems="center"
        justifyContent="center"
        minHeight="90vh"
        className={styles.body}
      >
        <Box
          p={8}
          width="40%"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          className={styles.container}
        >
          <Box textAlign="center">
            <Heading color="white">Login</Heading>
          </Box>
          <Box my={4} textAlign="left">
            {error && (
              <Alert status="error" colorScheme="red">
                <AlertIcon />
                {error}
              </Alert>
            )}
            {successMessage && (
              <Alert
                status="success"
                colorScheme={isLoginSuccess ? "green" : "red"}
                color="white"
              >
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
              <Flex w="100%" justifyContent="space-between">
                <button className={styles.btn} type="submit">
                  Sign In
                </button>
                <Link to="/signup">
                  <button className={styles.btn} type="submit">
                    Sign Up
                  </button>
                </Link>
              </Flex>
            </form>
          </Box>
        </Box>
      </Flex>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>You have successfully logged in.</p>
            <Link to="/findjob">
              <Button colorScheme="blue" mt={4}>
                Go to Find Job
              </Button>
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LoginPage;
