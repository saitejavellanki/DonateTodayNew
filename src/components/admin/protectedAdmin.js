import React, { useState, useEffect } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import Admin from './Admin';

const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

function ProtectedAdmin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ADMIN_PASSWORD === undefined) {
      console.error('Admin password is not set in environment variables');
      alert('Server configuration error. Please contact the administrator.');
      return;
    }
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true'); // Persist authentication
    } else {
      alert('Incorrect password');
    }
  };

  if (isAuthenticated) {
    return <Admin />;
  }

  return (
    <Box maxW="400px" mx="auto" mt={8}>
      <Text fontSize="xl" mb={4}>Enter Admin Password</Text>
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          mb={4}
        />
        <Button type="submit" colorScheme="blue">Submit</Button>
      </form>
    </Box>
  );
}

export default ProtectedAdmin;
