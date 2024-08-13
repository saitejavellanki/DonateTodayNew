import React from 'react';
import { Box, Container, Heading, Text, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import Footer from '../footer/Footer';
import sai from "../../Assests/21BCB7042_Sai Teja Vellanki (1).png";
import vys from "../../Assests/IMG-20240620-WA0005.jpg";


const founders = [
  {
    name: "Sai Teja Vellanki",
    role: "Co-Founder / Technical Director",
    image: sai,
    bio: "As co-founder of DonateToday, I'm committed to revolutionizing philanthropy through innovative technology. My focus is on making giving easier and more impactful for everyone involved."
  },
  {
    name: "Vyshnav Jambhapuram",
    role: "Co-Founder / Lead Designer",
    image: vys,
    bio: "Dedicated to transforming charitable giving with cutting-edge solutions. My goal is to streamline the donation process and maximize the impact of every gift."
  }
];

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Developer",
    image: "",
  },
  {
    name: "Team Member 2",
    role: "Designer",
    image: "",
  },
  {
    name: "Team Member 3",
    role: "Marketing Specialist",
    image: "",
  }
];

const FoundersPage = () => {
  return (
    <>
      <Box bg="gray.200" minHeight="100vh" py={12}>
        <Container maxW="container.xl">
          <Heading as="h1" size="2xl" textAlign="center" mb={10}>
            Our Founders
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={16}>
            Meet the team behind DonateToday. We're passionate about making a difference.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} justifyContent="center" mb={16}>
            {founders.map((founder) => (
              <VStack
                key={founder.name}
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="md"
                align="center"
                spacing={4}
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  boxSize="200px"
                  objectFit="cover"
                  borderRadius="full"
                />
                <Heading as="h2" size="lg">{founder.name}</Heading>
                <Text fontWeight="bold" color="blue.500">{founder.role}</Text>
                <Text>{founder.bio}</Text>
              </VStack>
            ))}
          </SimpleGrid>

          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Our Team
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} justifyContent="center">
            {teamMembers.map((member) => (
              <VStack
                key={member.name}
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="md"
                align="center"
                spacing={4}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  boxSize="150px"
                  objectFit="cover"
                  borderRadius="full"
                />
                <Heading as="h3" size="md">{member.name}</Heading>
                <Text fontWeight="bold" color="blue.500">{member.role}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default FoundersPage;