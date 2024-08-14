import React from 'react';
import { Box, Text, Button, VStack, Container, Flex, useMediaQuery } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Navbar from '../navbar/Navbar';
import AboutUs from '../aboutUs/AboutUs';
import StatsPage from '../stats/StatsPage';
import Footer from '../footer/Footer';
import OurImpact from '../impact/Impact';

const Home = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      
      <Box className="home-page" minHeight="100vh">
        <Flex direction="column" height="100%" pt={[16, 20, 24]} px={[4, 6, 8]}>
          <Container maxW="container.xl" flex="1" display="flex" flexDirection="column" justifyContent="center">
            <VStack spacing={[8, 12]} align="center">
              <Text
                className='text-container'
                fontSize={["3xl", "4xl", "5xl", "6xl"]}
                fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
                color="white"
                textAlign="center"
              >
                Small Acts, Big Impact.
              </Text>
              <Flex 
                className="button-container" 
                justifyContent="center"
                flexDirection={isLargerThan768 ? "row" : "column"}
                width="100%"
                gap={4}
              >
                <NavLink to="/donate" style={{ width: isLargerThan768 ? 'auto' : '100%' }}>
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
                    _hover={{ transform: "scale(1.05)" }}
                    transition="transform 0.3s"
                    width={isLargerThan768 ? 'auto' : '100%'}
                  >
                    Donate Now
                  </Button>
                </NavLink>
                <NavLink to="/make" style={{ width: isLargerThan768 ? 'auto' : '100%' }}>
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
                    _hover={{ transform: "scale(1.05)" }}
                    transition="transform 0.3s"
                    width={isLargerThan768 ? 'auto' : '100%'}
                  >
                    Make a Wish
                  </Button>
                </NavLink>
              </Flex>
            </VStack>
          </Container>
          
          <Box
            bg="rgba(255, 255, 255, 0.7)"
            borderRadius="xl"
            boxShadow="xl"
            p={[4, 6, 8]}
            maxWidth="800px"
            width={["95%", "90%", "80%"]}
            mx="auto"
            my={[8, 12]}
          >
            <Text
              fontSize={["sm", "md", "lg"]}
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