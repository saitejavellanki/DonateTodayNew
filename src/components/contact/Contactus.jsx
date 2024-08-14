import React, { useRef } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, VStack, HStack, Link, Image, Text, Icon, useToast, Flex, Container } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import logo from "../../Assests/IMG_8152.jpg";
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
      <Container maxW="container.xl" py={8}>
        <MotionHeading
          as="h1"
          size="xl"
          textAlign="center"
          mb={8}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </MotionHeading>

        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems={{ base: "stretch", md: "flex-start" }}
          gap={8}
        >
          <Box flex={{ base: 1, md: 2 }} p={6} borderRadius="md" boxShadow="lg" bg="gray.300">
            <form ref={form} onSubmit={sendEmail}>
              <VStack spacing={4} align="stretch">
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" name="user_name" placeholder="Enter your name" bg="white" />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="user_email" placeholder="Enter your email" bg="white" />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea name="message" placeholder="Enter your message" rows={4} bg="white" />
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

          <Box flex={{ base: 1, md: 1 }} p={6} borderRadius="md" boxShadow="lg" bg="white" maxWidth={{ base: "100%", md: "300px" }}>
            <VStack spacing={4} align="start">
              <Image src={logo} alt="Company Logo" maxWidth="80px" />
              
              <HStack spacing={4}>
                <Link href="https://www.instagram.com/donatetoday984/" isExternal>
                  <Icon as={FaInstagram} boxSize={5} />
                </Link>
                <Link href="https://www.linkedin.com/company/donatetoday/?viewAsMember=true" isExternal>
                  <Icon as={FaLinkedin} boxSize={5} />
                </Link>
                
              </HStack>

              <VStack align="start" spacing={2}>
                <Text fontSize="sm">
                  <Icon as={FaMapMarkerAlt} mr={2} />
                  Gachibowli, Hyderabad, Telangana.
                </Text>
                <Text fontSize="sm">
                  <Icon as={FaEnvelope} mr={2} />
                  donatetoday613@gmail.com
                </Text>
              </VStack>
            </VStack>
          </Box>
        </Flex>
      </Container>
      <Footer/>
    </>
  );
};

export default Contactus;