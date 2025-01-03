import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, Button, FormControl, FormLabel, Input, Select, Text, VStack, HStack, FormErrorMessage, useToast, Grid, GridItem, Flex, useBreakpointValue } from '@chakra-ui/react';
import * as Yup from 'yup';
import { db } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Confetti from 'react-confetti';
import SuccessPage from '../tick/SucessPage'; // Assuming you have this component in a separate file

// Schema for validation
const DonationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  donationItem: Yup.string().required('Donation Item is required'),
  amount: Yup.number()
    .min(100, 'Amount must be at least 100')
    .positive('Amount must be positive')
    .required('Amount is required'),
  dependency: Yup.string().required('Please select a cause'),
  occasion: Yup.string().optional(),
  photo: Yup.mixed().nullable().optional(),
});

function Make() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const toast = useToast();
  
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    donationItem: '',
    amount: '',
    dependency: '',
    occasion: '',
    photo: null,
  };

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus('Submitting...');
    try {
      let photoURL = null;
      if (values.photo) {
        photoURL = URL.createObjectURL(values.photo); // For demonstration
      }

      const donationData = {
        ...values,
        photo: photoURL,
        timestamp: serverTimestamp(),
      };

      console.log('Attempting to submit data:', donationData);
      const docRef = await addDoc(collection(db, 'donations'), donationData);
      console.log('Document written with ID: ', docRef.id);

      toast({
        title: 'Donation submitted.',
        description: "Thank you for your generous donation! We will send you a special thank-you photo soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setStatus('Donation submitted successfully!');
      resetForm();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 10000);
      setShowSuccessPage(true); // Show the success page
    } catch (error) {
      console.error('Error submitting donation:', error);
      setStatus(`Error submitting donation: ${error.message}`);
      toast({
        title: 'Submission Error',
        description: `There was an error: ${error.message}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    setSubmitting(false);
  };

  const gridTemplateColumns = useBreakpointValue({
    base: '1fr',
    md: '1fr 300px',
  });

  if (showSuccessPage) {
    return <SuccessPage />;
  }

  return (
    <Flex direction="column" minHeight="100vh">
      {showConfetti && <Confetti />}
      <Grid templateColumns={gridTemplateColumns} gap={6} p={4} flex="1" maxW="1200px" mx="auto">
        <GridItem>
          <Box>
            <Text fontSize={{ base: 'xl', md: '2xl' }} mb={4} textAlign="center">
              Make a Wish Donation
            </Text>
            <Formik
              initialValues={initialValues}
              validationSchema={DonationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, status, setFieldValue, errors, touched }) => (
                <Form>
                  <VStack spacing={4} align="stretch">
                    <FormControl isInvalid={touched.firstName && errors.firstName}>
                      <HStack spacing={{ base: 2, md: 4 }}>
                        <FormLabel htmlFor="firstName" w={{ base: '30%', md: '20%' }}>
                          First Name
                        </FormLabel>
                        <Field as={Input} id="firstName" name="firstName" placeholder="First Name" width="100%" />
                        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                      </HStack>
                    </FormControl>

                    <FormControl isInvalid={touched.lastName && errors.lastName}>
                      <HStack spacing={{ base: 2, md: 4 }}>
                        <FormLabel htmlFor="lastName" w={{ base: '30%', md: '20%' }}>
                          Last Name
                        </FormLabel>
                        <Field as={Input} id="lastName" name="lastName" placeholder="Last Name" width="100%" />
                        <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                      </HStack>
                    </FormControl>

                    <FormControl isInvalid={touched.email && errors.email}>
                      <HStack spacing={{ base: 2, md: 4 }}>
                        <FormLabel htmlFor="email" w={{ base: '30%', md: '20%' }}>
                          Email
                        </FormLabel>
                        <Field as={Input} id="email" name="email" type="email" placeholder="Email" width="100%" />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </HStack>
                    </FormControl>

                    <FormControl isInvalid={touched.phoneNumber && errors.phoneNumber}>
                      <HStack spacing={{ base: 2, md: 4 }}>
                        <FormLabel htmlFor="phoneNumber" w={{ base: '30%', md: '20%' }}>
                          Phone Number
                        </FormLabel>
                        <Field as={Input} id="phoneNumber" name="phoneNumber" type="tel" placeholder="Phone Number" width="100%" />
                        <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
                      </HStack>
                    </FormControl>

                    <FormControl isInvalid={touched.donationItem && errors.donationItem}>
                      <HStack spacing={{ base: 2, md: 4 }}>
                        <FormLabel htmlFor="donationItem" w={{ base: '30%', md: '20%' }}>
                          Donation Item
                        </FormLabel>
                        <Field
                          as={Select}
                          id="donationItem"
                          name="donationItem"
                          width="100%"
                        >
                          <option value="">Select what you want to donate</option>
                          <option value="money">Money</option>
                          <option value="clothes">Clothes</option>
                          <option value="accessories">Accessories</option>
                          <option value="food">Food</option>
                        </Field>
                        <FormErrorMessage>{errors.donationItem}</FormErrorMessage>
                      </HStack>
                    </FormControl>

                    <FormControl isInvalid={touched.amount && errors.amount}>
                      <HStack spacing={{ base: 2, md: 4 }}>
                        <FormLabel htmlFor="amount" w={{ base: '30%', md: '20%' }}>
                          Amount
                        </FormLabel>
                        <Field as={Input} id="amount" name="amount" type="number" min="100" step="0.01" placeholder="Amount" width="100%" />
                        <FormErrorMessage>{errors.amount}</FormErrorMessage>
                      </HStack>
                      <Text color="red.500" mt={1}>
                        Amount must be at least 100.
                      </Text>
                    </FormControl>

                    <FormControl isInvalid={touched.dependency && errors.dependency}>
                      <HStack spacing={{ base: 2, md: 4 }}>
                        <FormLabel htmlFor="dependency" w={{ base: '30%', md: '20%' }}>
                          Donation For
                        </FormLabel>
                        <Field as={Select} id="dependency" name="dependency" width="100%">
                          <option value="">Select a cause</option>
                          <option value="education">Education</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="environment">Environment</option>
                          <option value="animalWelfare">Animal Welfare</option>
                          <option value="disasterRelief">Disaster Relief</option>
                        </Field>
                        <FormErrorMessage>{errors.dependency}</FormErrorMessage>
                      </HStack>
                    </FormControl>

                    <FormControl>
                      <HStack spacing={{ base: 2, md: 4 }}>
                        <FormLabel htmlFor="occasion" w={{ base: '30%', md: '20%' }}>
                          Occasion (optional)
                        </FormLabel>
                        <Field as={Input} id="occasion" name="occasion" placeholder="Occasion" width="100%" />
                      </HStack>
                    </FormControl>

                    <FormControl>
                      <HStack spacing={{ base: 2, md: 4 }}>
                        <FormLabel htmlFor="photo" w={{ base: '30%', md: '20%' }}>
                          Upload a Photo (optional)
                        </FormLabel>
                        <Field name="photo">
                          {({ field }) => (
                            <Input
                              id="photo"
                              type="file"
                              accept="image/*"
                              onChange={(event) => {
                                setFieldValue('photo', event.currentTarget.files[0]);
                              }}
                            />
                          )}
                        </Field>
                      </HStack>
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      isLoading={isSubmitting}
                      type="submit"
                      width="full"
                    >
                      Donate
                    </Button>
                  </VStack>
                  {status && <Text mt={4} textAlign="center">{status}</Text>}
                </Form>
              )}
            </Formik>
          </Box>
        </GridItem>
        <GridItem>
          <Flex direction="column" h="100%" justify="flex-start" align="stretch">
            <Box p={4} border="1px" borderColor="gray.200" borderRadius="md" mb={4}>
              <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mb={2}>
                How It Works
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} mb={2}>
                On special occasions like birthdays, you can make a donation to support our cause. Upload a photo with your donation, and we will create a special thank-you photo featuring your loved ones and our orphans.
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }}>
                Your donation not only celebrates your special moment but also brings joy to those in need. Thank you for making a difference!
              </Text>
            </Box>
            <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
              <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mb={2}>
                Plans We Offer
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} mb={2}>
                Veg Meals: ₹80 per plate
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }}>
                Non-Veg Meals: ₹150 per plate
              </Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Make;
