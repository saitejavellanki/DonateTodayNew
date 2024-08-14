import React from 'react';
import { Box, Container, SimpleGrid, Image, Text, Heading, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import food from "../../Assests/food.jpg"
import dist from "../../Assests/IMG_8165.jpg"
import comm from "../../Assests/community.jpg"

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const impactData = [
  
  {
    image: dist,
    title: 'Healthcare Initiatives',
    description: 'Funded medical treatments for patients in need.'
  },
  {
    image: food,
    title: 'Food Distribution',
    description: 'Distributed meals to 500+ families during crisis situations.'
  },
 
  
  {
    image: comm,
    title: 'Community Development',
    description: 'Supported local initiatives for sustainable community growth.'
  }
];

const ImpactCard = ({ image, title, description }) => (
  <MotionBox 
    borderWidth="1px" 
    borderRadius="lg" 
    overflow="hidden" 
    bg="white"
    shadow="md"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <MotionImage 
      src={image} 
      alt={title} 
      height="200px" 
      width="100%"
      objectFit="cover" 
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
    <VStack p={4} align="start" spacing={2}>
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
    </VStack>
  </MotionBox>
);

const OurImpact = () => {
  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <MotionBox
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h1" size="2xl" textAlign="center">
              Our Impact
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize="xl" textAlign="center" maxW="2xl">
              Through the generosity of our donors, we've made significant strides in various areas. Here's a glimpse of the impact we've created together.
            </Text>
          </MotionBox>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {impactData.map((impact, index) => (
              <ImpactCard key={index} {...impact} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default OurImpact;