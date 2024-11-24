import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  VStack,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Container,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Badge,
  Divider,
  useColorModeValue,
  Skeleton,
  Alert,
  AlertIcon,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../src/components/firebase/firebase';
import ExperienceForm from './experinceform';
import { 
  ChevronRightIcon, 
  TimeIcon, 
  CalendarIcon,
  InfoIcon 
} from '@chakra-ui/icons';
import { FaUser } from 'react-icons/fa';

function ExperiencePage() {
  const { panelId } = useParams();
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Move all useColorModeValue hooks to the top level
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headingColor = useColorModeValue('green.600', 'green.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const iconColor = useColorModeValue('gray.600', 'gray.400');
  const pageBg = useColorModeValue('gray.50', 'gray.900');

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        setIsLoading(true);
        const q = query(
          collection(db, 'experiences'),
          where('panelId', '==', String(panelId)),
          orderBy('timestamp', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const experienceList = [];
        querySnapshot.forEach((doc) => {
          experienceList.push({ id: doc.id, ...doc.data() });
        });
        setExperiences(experienceList);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExperiences();
  }, [panelId]);

  const ExperienceCard = ({ experience }) => {
    const timestamp = experience.timestamp?.toDate();
    const formattedDate = timestamp ? new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : 'Date not available';

    return (
      <Box
        bg={cardBg}
        p={6}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
        shadow="sm"
        _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
        transition="all 0.2s"
      >
        <Flex justify="space-between" align="center" mb={4}>
          <Heading size="md" color={headingColor}>
            {experience.title}
          </Heading>
          <Badge colorScheme="green" fontSize="sm">
            Panel {panelId}
          </Badge>
        </Flex>
        
        <Text fontSize="md" mb={4} color={textColor}>
          {experience.description}
        </Text>
        
        <Divider mb={4} />
        
        <HStack spacing={6} color={iconColor}>
          <Flex align="center">
            <Icon as={FaUser} mr={2} />
            <Text fontSize="sm">{experience.author}</Text>
          </Flex>
          <Flex align="center">
            <Icon as={CalendarIcon} mr={2} />
            <Text fontSize="sm">{formattedDate}</Text>
          </Flex>
        </HStack>
      </Box>
    );
  };

  return (
    <Box bg={pageBg} minH="100vh" py={8}>
      <Container maxW="container.lg">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          mb={6}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Panel {panelId} Experiences</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Header Section */}
        <Box
          bg={bgColor}
          p={6}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={borderColor}
          mb={6}
        >
          <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
            <Box>
              <Heading size="lg" color={headingColor} mb={2}>
                Interview Experiences
              </Heading>
              <Text color={textColor}>
                Panel {panelId} - Share and learn from others' experiences
              </Text>
            </Box>
            <Button
              colorScheme="green"
              size="lg"
              onClick={onOpen}
              leftIcon={<TimeIcon />}
            >
              Share Your Experience
            </Button>
          </Flex>
        </Box>

        {/* Content Section */}
        <VStack spacing={6} align="stretch">
          {isLoading ? (
            [...Array(3)].map((_, i) => (
              <Skeleton key={i} height="200px" borderRadius="lg" />
            ))
          ) : experiences.length === 0 ? (
            <Alert
              status="info"
              borderRadius="lg"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} mb={4} />
              <Text fontSize="lg" mb={2}>No experiences shared yet</Text>
              <Text fontSize="md" color={textColor}>
                Be the first to share your interview experience!
              </Text>
            </Alert>
          ) : (
            experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))
          )}
        </VStack>

        {/* Experience Form Modal */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="xl"
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              bg={headingColor}
              color="white"
              borderTopRadius="md"
            >
              Share Your Interview Experience
            </ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody p={6}>
              <ExperienceForm panelId={String(panelId)} onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}

export default ExperiencePage;