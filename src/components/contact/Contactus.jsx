import React, { useRef } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, VStack, HStack, Link, Image, Text, Icon, useToast, Flex } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import logo from "../../Assests/IMG_8152.jpg" 
import Footer from '../footer/Footer';

const MotionHeading = motion(Heading);

export const Contactus = () => {
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    // ... (emailjs code remains the same)
  };

  return (
    <>
    <Flex
      direction="column"
      minHeight="100vh"
      
      p={4}
    >
      <MotionHeading
        as="h1"
        size="xl"
        textAlign="center"
        mb={6}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </MotionHeading>
      
      <Flex
        direction={{ base: "column", md: "row" }}
        width="100%"
        maxWidth="1200px"
        justifyContent="center"
        alignItems="flex-start"
        gap={8}
      >
        <Box flex={2} p={6} borderRadius="md" boxShadow="lg" bg="gray.300">
          <form ref={form} onSubmit={sendEmail}>
            <VStack spacing={3} align="stretch">
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="user_name" maxWidth="600px" placeholder="Enter your name" size="sm" bg="white" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="user_email" maxWidth="600px" placeholder="Enter your email" size="sm" bg="white" />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea name="message" maxWidth="600px" placeholder="Enter your message" size="sm" rows={4} bg="white" />
              </FormControl>
              <Button
                type="submit"
                colorScheme="red"
                size="md"
                _hover={{ bg: 'red.600' }}
              >
                Send
              </Button>
            </VStack>
          </form>
        </Box>

        <Box flex={1} p={6} borderRadius="md" boxShadow="lg" bg="white">
          <VStack spacing={4} align="start">
            <Image src={logo} alt="Company Logo" maxWidth="100px" />
            
            <HStack spacing={4}>
              <Link href="https://www.instagram.com/yourcompany" isExternal>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link href="https://www.linkedin.com/company/yourcompany" isExternal>
                <Icon as={FaLinkedin} boxSize={6} />
              </Link>
              <Link href="https://twitter.com/yourcompany" isExternal>
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
            </HStack>

            <Text fontSize="sm">
              <Icon as={FaMapMarkerAlt} mr={2} />
              123 Main St, City, State 12345
            </Text>
            <Text fontSize="sm">
              <Icon as={FaEnvelope} mr={2} />
              contact@yourcompany.com
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Flex>
    <Footer/>
    </>
  );
};

export default Contactus;