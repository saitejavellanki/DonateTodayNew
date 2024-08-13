import React from 'react';
import logo from "../../Assests/IMG_8152.jpg";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Image,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const AboutUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Container maxW="container.xl" py={10}>
      <MotionHeading
        as="h1"
        size="xl"
        textAlign="center"
        mb={10}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </MotionHeading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        gap={8}
        ref={ref}
      >
        <MotionBox
          flex={1}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <MotionImage
            src={logo}
            alt="About Us"
            borderRadius="md"
            objectFit="cover"
            
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </MotionBox>
        <VStack
          flex={1}
          align="stretch"
          spacing={4}
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <MotionHeading as="h2" size="lg" variants={itemVariants}>
            DonateToday.
          </MotionHeading>
          <MotionText variants={itemVariants}>
            Innovative donation application designed to make giving back to those in need easier than ever. Set to release on August 15, this application allows users to donate used clothes, food, and accessories effortlessly.
          </MotionText>
          <MotionText variants={itemVariants}>
            DonateToday offers a unique feature for celebrating your special moments. You can now mark your birthday by helping those less fortunate, and even plan face-to-face meetings to truly make an impact.
          </MotionText>
          <MotionText variants={itemVariants}>
            By joining forces with Care Club Foundation, we are combining our efforts and resources to amplify our reach and enhance the support we provide to those in need. Together, we aim to drive even greater change and create more opportunities for meaningful contributions.
          </MotionText>
        </VStack>
      </Flex>
    </Container>
  );
};

export default AboutUs;