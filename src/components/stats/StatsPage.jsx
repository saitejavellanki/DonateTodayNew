import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from '../footer/Footer';

const MotionBox = motion(Box);

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    let interval;
    if (inView) {
      const stepTime = Math.abs(Math.floor(2000 / end)); // Changed to 2000ms (2 seconds)
      interval = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount + 1;
          if (newCount === end) {
            clearInterval(interval);
          }
          return newCount > end ? end : newCount;
        });
      }, stepTime);
    } else {
      setCount(0);
    }
    return () => clearInterval(interval);
  }, [end, inView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const StatBox = ({ title, value, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      borderWidth={1}
      borderRadius="lg"
      p={6}
      textAlign="center"
      boxShadow="md"
    >
      <VStack>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          {typeof value === 'number' ? (
            <CountUp end={value} duration={2} />
          ) : (
            value
          )}
        </Text>
      </VStack>
    </MotionBox>
  );
};

const StatsPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <Container bg="gray.200"maxW="container.xl" py={10} ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <Heading as="h1" size="xl" textAlign="center" mb={10}>
          Our Stats
        </Heading>
      </motion.div>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <StatBox title="Total Served" value={3000} delay={0.0001} />
        <StatBox title="Donations Per Month" value="2Lakhs+" delay={0.4} />
        <StatBox title="Partnerships" value={15} delay={0.6} />
      </SimpleGrid>
    </Container>
  );
};

export default StatsPage;