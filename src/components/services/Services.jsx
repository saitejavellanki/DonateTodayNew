import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon } from '@chakra-ui/react';
import { FaHeart, FaGraduationCap, FaHandHoldingMedical, FaGlobe, FaHome, FaLeaf } from 'react-icons/fa';
import Footer from '../footer/Footer';

const ServiceBox = ({ title, description, icon }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    p={6}
    textAlign="center"
    bg="white"
    boxShadow="md"
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
  >
    <Icon as={icon} w={10} h={10} color="red.500" mb={4} />
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Text fontSize="sm" color="gray.600">
      {description}
    </Text>
  </Box>
);

const Services = () => {
  const services = [
    {
      title: "General Donations",
      description: "Support our overall mission and contribute to various causes.",
      icon: FaHeart
    },
    {
      title: "Education",
      description: "Help provide educational resources and scholarships.",
      icon: FaGraduationCap
    },
    {
      title: "Healthcare",
      description: "Support medical treatments and healthcare initiatives.",
      icon: FaHandHoldingMedical
    },
    {
      title: "Global Aid",
      description: "Contribute to international relief efforts and global causes.",
      icon: FaGlobe
    },
    {
      title: "Housing",
      description: "Help provide shelter and housing for those in need.",
      icon: FaHome
    },
    {
      title: "Environment",
      description: "Support environmental conservation and sustainability projects.",
      icon: FaLeaf
    }
  ];

  return (
    <>
    <Box bg="gray.50" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              Our Services
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              At DonateToday, we facilitate various types of donations to make a positive impact on lives around the world. Here's how you can contribute:
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {services.map((service, index) => (
              <ServiceBox key={index} {...service} />
            ))}
          </SimpleGrid>

          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>
              What We Do
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
              DonateToday is committed to connecting generous donors with verified causes and individuals in need. We ensure transparency, security, and efficiency in the donation process, allowing you to make a meaningful difference with confidence. Our platform supports a wide range of causes, from local community projects to global humanitarian efforts.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
    <Footer/>
    </>
  );
};

export default Services;