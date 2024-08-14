// src/components/CommunityGuidelines.js
import React from 'react';
import {
  Container,
  Heading,
  Box,
  Text,
  List,
  ListItem,
  Divider,
} from '@chakra-ui/react';

const CommunityGuidelines = () => {
  return (
    <Container maxW="container.md" py={6}>
      <Heading as="h1" size="xl" mb={6}>
        Community Guidelines
      </Heading>
      <Text fontSize="lg" mb={4}>
        Welcome to DonateToday! To ensure a positive and supportive community experience, please adhere to the following guidelines:
      </Text>

      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2}>
          1. Be Respectful
        </Heading>
        <Text>
          We expect all members to treat each other with respect and kindness. Harassment, discrimination, or hate speech will not be tolerated.
        </Text>
      </Box>

      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2}>
          2. Stay On-Topic
        </Heading>
        <Text>
          Keep discussions relevant to our mission of supporting and empowering communities. Off-topic posts may be removed to keep the focus on our goals.
        </Text>
      </Box>

      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2}>
          3. No Spam
        </Heading>
        <Text>
          Promotional content, spam, or self-advertising is not allowed. If you have relevant information to share, please do so in a way that contributes to the community.
        </Text>
      </Box>

      <Box mb={4}>
        <Heading as="h2" size="lg" mb={2}>
          4. Protect Privacy
        </Heading>
        <Text>
          Do not share personal information or private messages without consent. Respect everyone’s privacy and maintain confidentiality.
        </Text>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={2}>
          5. Report Issues
        </Heading>
        <Text>
          If you encounter any issues or see behavior that violates these guidelines, please report it to our team. We are here to help and maintain a positive environment.
        </Text>
      </Box>

      <Divider my={6} />
      
      <Text>
        Thank you for being a part of DonateToday. Together, we can create a supportive and impactful community!
      </Text>
    </Container>
  );
};

export default CommunityGuidelines;
