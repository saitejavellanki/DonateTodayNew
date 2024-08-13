import React from 'react';
import { Box, Text, Button, VStack, HStack, Container, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Contactus from '../contact/Contactus';
import AboutUs from '../aboutUs/AboutUs';
import StatsPage from '../stats/StatsPage';
import Footer from '../footer/Footer';
import FoundersPage from '../founders/Founders';
import OurImpact from '../impact/Impact';

const Home = () => {
  
  return (
    <>
      <Box className="home-page" minHeight="100vh" position="relative">
        <Flex direction="column" height="100%">
          <Container maxW="container.xl" flex="1" display="flex" flexDirection="column" justifyContent="center" mb={-10}>
            <VStack spacing={12} align="center">
              <Text
                className='text-container'
                fontSize={["3xl", "4xl", "5xl", "70px"]}
                fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
                color="white"
                textAlign="center"
                px={4}
              >
                Small Acts, Big Impact.
              </Text>
              <HStack spacing={8} className="button-container">
                <NavLink to="/donate">
                  <Button
                    className="button button-blue"
                    size="lg"
                    px={8}
                    py={6}
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                    bg="#a01010"
                    borderRadius="25px"
                    _hover={{ transform: "scale(1.2)" }}
                    transition="transform 0.3s"
                  >
                    Donate Now
                  </Button>
                </NavLink>
                <NavLink to="/make">
                  <Button
                    className="button button-white btn"
                    size="lg"
                    px={8}
                    py={6}
                    fontSize="xl"
                    fontWeight="bold"
                    color="black"
                    bg="white"
                    borderRadius="25px"
                    _hover={{ transform: "scale(1.2)" }}
                    transition="transform 0.3s"
                  >
                    Make a Wish
                  </Button>
                </NavLink>
              </HStack>
            </VStack>
          </Container>
          
          <Box
            bg="rgba(255, 255, 255, 0.7)"
            borderRadius="xl"
            boxShadow="xl"
            p={8}
            maxWidth="800px"
            width="90%"
            mx="auto"
            mb={20}
          >
            <Text
              fontSize={["md", "lg", "xl"]}
              fontWeight="medium"
              color="gray.700"
              lineHeight="1.8"
              textAlign="center"
            >
              At DonateToday, we prioritize transparency, security, and integrity in every donation. Your contributions are directed to verified, impactful causes, with our commitment to safeguarding your data and ensuring a positive impact. Trust us to make your giving experience seamless and meaningful.
            </Text>
          </Box>
          
          <Text
            fontSize="sm"
            color="white"
            textAlign="center"
            mb={4}
            fontWeight="medium"
          >
            Powered by Care Club Foundation
          </Text>
        </Flex>
      </Box>
      <AboutUs/>
      <StatsPage/>
      <OurImpact/>
      <Footer/>
    </>
  );
};

export default Home;