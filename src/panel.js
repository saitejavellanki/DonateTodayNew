import React from 'react';
import { SimpleGrid, Box, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Panels() {
  const panels = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <Box p={8} bg="gray.50" minH="100vh">
      <Box maxW="7xl" mx="auto">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          mb={8}
          color="gray.800"
        >
          Interview Panels
        </Text>
        
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
          spacing={6}
        >
          {panels.map((panel) => (
            <Link
              key={panel}
              as={RouterLink}
              to={`/experiences/${panel}`}
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                p={6}
                bg="white"
                borderRadius="lg"
                boxShadow="sm"
                transition="all 0.2s"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'md',
                  borderColor: 'blue.200',
                }}
                border="1px solid"
                borderColor="gray.200"
              >
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="gray.800"
                  mb={2}
                >
                  Panel {panel}
                </Text>
                <Text color="gray.500" fontSize="sm">
                  Interview Session #{String(panel).padStart(3, '0')}
                </Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Panels;