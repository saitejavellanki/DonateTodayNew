import React, { useState } from 'react';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './components/firebase/firebase';

function ExperienceForm({ panelId, onClose }) {
  const toast = useToast();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'experiences'), {
        ...formData,
        panelId,
        timestamp: serverTimestamp(),
      });
      toast({
        title: 'Experience shared successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      console.error('Error adding experience:', error);
      toast({
        title: 'Error sharing experience',
        description: 'Please try again later',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter a title for your experience"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Share your interview experience"
            rows={6}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Your Name</FormLabel>
          <Input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </FormControl>

        <Button 
          type="submit" 
          colorScheme="blue" 
          width="full"
          isLoading={isSubmitting}
          loadingText="Submitting"
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
}

export default ExperienceForm;