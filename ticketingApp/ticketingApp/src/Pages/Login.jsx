import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext'; 
import Home from './Home'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { login, isAuthenticated } = useAuth(); // Add isAuthenticated state
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        title: 'Login Failed.',
        description: 'Please fill in all fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email: email,
        password: password,
      });
      login(response.data.token);
      toast({
        title: 'Login Successful.',
        description: `Welcome, ${email}!`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setLoggedIn(true);
    } catch (error) {
      toast({
        title: 'Login Failed.',
        description: 'Please check your email and password.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // Implement logout functionality here
    // For example:
    // logout();
    toast({
      title: 'Logged out successfully.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setLoggedIn(false);
  };

  return (
    <>
      {loggedIn ? ( 
        <Home />
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.100">
          <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
            <VStack spacing={4} align="stretch">
              <Heading as="h1" size="lg" textAlign="center">Login</Heading>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </FormControl>
              {isAuthenticated ? ( // Display logout button if authenticated
                <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
              ) : (
                <Button colorScheme="teal" onClick={handleLogin} isLoading={isLoading}>Login</Button>
              )}
            </VStack>
          </Box>
        </Box>
      )}
    </>
  );
}
