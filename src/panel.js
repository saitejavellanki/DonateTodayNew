import React from 'react';
import { SimpleGrid, Box, Text, Link, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';

function Panels() {
  const panels = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <Box p={8} bg="gray.100" minH="100vh">
      <Box maxW="7xl" mx="auto" textAlign="center">
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          mb={4}
          color="green.600"
        >
          Explore TCS Interview Panels
        </Text>
        <Text
          fontSize="lg"
          color="gray.600"
          mb={10}
        >
          A comprehensive list of interview panels to guide you through the process.
        </Text>
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          mb={1}
          color="gray.600"
        >
          Unofficial
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
                bgGradient="linear(to-br, green.50, white)"
                borderRadius="lg"
                boxShadow="lg"
                transition="all 0.3s"
                _hover={{
                  transform: 'scale(1.05)',
                  boxShadow: 'xl',
                  borderColor: 'green.400',
                }}
                border="1px solid"
                borderColor="green.200"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={4}
                  bg="green.100"
                  borderRadius="full"
                  p={4}
                  w={12}
                  h={12}
                >
                  <Icon
                    as={MdOutlineScreenSearchDesktop}
                    w={6}
                    h={6}
                    color="green.600"
                  />
                </Box>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color="green.700"
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
