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
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Services</Link>
            
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>+91 9652553176</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legit</ListHeader>
            <Link href={'#'}>Policy</Link>
            
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <Button
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
              >
                Subscribe
              </Button>
            </Stack>
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
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} onClick={() => window.open('https://www.linkedin.com/your-profile', '_blank')} />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} onClick={() => window.open('https://www.instagram.com/your-profile', '_blank')} />
            <IconButton aria-label="Email" icon={<FaEnvelope />} onClick={() => window.location.href = 'mailto:donatetoday613@gmail.com'} />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} onClick={() => window.open('https://twitter.com/your-profile', '_blank')} />
            <IconButton aria-label="Facebook" icon={<FaFacebook />} onClick={() => window.open('https://facebook.com/your-profile', '_blank')} />
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