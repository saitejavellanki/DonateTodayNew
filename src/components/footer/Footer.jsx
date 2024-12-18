import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Heading,
  Button,
  Input,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}></Link>
            <Link href={'#'}></Link>
            <NavLink to="/our-team" >About Us</NavLink>
            <NavLink to="/services" >Services</NavLink>
            <NavLink to="/contact-us" >Contact Us</NavLink>
            
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <NavLink to="/helpcenter" >Help Center</NavLink>
           
            <NavLink to="/community" >Community Guidelines</NavLink>
            
          </Stack>

          
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2024 DonateToday. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} onClick={() => window.open('https://www.linkedin.com/company/donatetoday/?viewAsMember=true', '_blank')} />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} onClick={() => window.open('https://www.instagram.com/donatetoday984/', '_blank')} />
            <IconButton aria-label="Email" icon={<FaEnvelope />} onClick={() => window.location.href = 'mailto:donatetoday613@gmail.com'} />
            
          </Stack>
        </Container>
      </Box>

      <Box py={4} textAlign="center" bg={useColorModeValue('gray.50', 'gray.900')}>
        <Text>Gachibowli, Hyderabad, Telangana</Text>
        <Link href="mailto:donatetoday613@gmail.com" color="blue.500">
          donatetoday613@gmail.com
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;