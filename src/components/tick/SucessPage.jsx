import React from 'react';
import { Box, Text, VStack, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

// Define the animated variants for different elements
const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.175, 0.885, 0.32, 1.275], // Custom easing for a bouncy effect
    },
  },
};

const tickVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      delay: 0.2, // Delay the tick animation
    },
  },
};

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: 'easeOut',
  },
};

const SuccessPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Use useEffect to trigger confetti effect on component mount
  React.useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      {isOpen && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <VStack
        spacing={8}
        align="center"
        justify="center"
        height="100vh"
        bgGradient="linear(to-r, teal.300, blue.400)"
        p={6}
        position="relative"
        overflow="hidden"
      >
        <Box
          as={motion.div}
          initial="hidden"
          animate="visible"
          width="200px"
          height="200px"
          mb={8}
        >
          <motion.svg
            viewBox="0 0 50 50"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, delay: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="25"
              cy="25"
              r="23"
              stroke="#4CAF50"
              strokeWidth="2"
              fill="none"
              variants={circleVariants}
            />
            <motion.path
              d="M15 25 L22 32 L35 18"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={tickVariants}
            />
          </motion.svg>
        </Box>

        <motion.div
          animate={{ y: ['0%', '-10%', '0%'] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          <Text
            fontSize="3xl"
            fontWeight="bold"
            color="white"
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            Thank you for your donation!
          </Text>
        </motion.div>

        <Text
          fontSize="xl"
          color="white"
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          We’ll get back to you shortly, within the hour.
        </Text>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)',
          }}
        />
      </VStack>
    </>
  );
};

export default SuccessPage;
