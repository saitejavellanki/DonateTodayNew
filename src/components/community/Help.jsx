// src/components/HelpCenter.js
import React from 'react';
import {
  Container,
  Heading,
  Box,
  Text,
  List,
  ListItem,
  Divider,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

const HelpCenter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.md" py={6}>
      <Heading as="h1" size="xl" mb={6}>
        Help Center
      </Heading>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          Frequently Asked Questions (FAQs)
        </Heading>
        <List spacing={4}>
          <ListItem>
            <Heading as="h3" size="md">1. How can I donate?</Heading>
            <Text mt={2}>
              You can donate through our website by visiting the 'Donate' section and following the instructions.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h3" size="md">2. What are your accepted donation methods?</Heading>
            <Text mt={2}>
              We accept donations through credit/debit cards, PayPal, and bank transfers.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h3" size="md">3. How can I volunteer?</Heading>
            <Text mt={2}>
              To volunteer, please visit our 'Volunteer' page and fill out the application form.
            </Text>
          </ListItem>
          {/* Add more FAQs as needed */}
        </List>
      </Box>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          Contact Us
        </Heading>
        <Text mb={4}>
          If you have any other questions or need further assistance, feel free to reach out to us.
        </Text>
        <Button colorScheme="teal" onClick={onOpen}>
          Contact Support
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Support</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Your Name" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Your Email" />
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Your Message" />
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Send
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={4}>
          Additional Resources
        </Heading>
        <List spacing={4}>
          <ListItem>
            <Text>
              <a href="/privacy-policy" style={{ color: 'teal', textDecoration: 'underline' }}>Privacy Policy</a>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <a href="/terms-of-service" style={{ color: 'teal', textDecoration: 'underline' }}>Terms of Service</a>
            </Text>
          </ListItem>
          {/* Add more resources as needed */}
        </List>
      </Box>
    </Container>
  );
};

export default HelpCenter;
