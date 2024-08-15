import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, Button, FormControl, useToast, FormLabel, Input, Select, Text, VStack, HStack, Grid } from '@chakra-ui/react';
import * as Yup from 'yup';
import { db } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Confetti from 'react-confetti';
import SuccessPage from '../tick/SucessPage';

// Schema for validation
const DonationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().matches(/^\d+$/, 'Phone Number must be digits').required('Phone Number is required'),
  donationType: Yup.string().required('Donation Type is required'),
  donationItem: Yup.string().required('Donation Item is required'),
  amount: Yup.number().when('donationItem', {
    is: 'money',
    then: (schema) => schema
      .min(100, 'Amount must be at least 100')
      .positive('Amount must be positive')
      .required('Amount is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  dependency: Yup.string().required('Please select a cause'),
});

function Donate() {
  const [showAmount, setShowAmount] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const toast = useToast();
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    donationType: '',
    donationItem: '',
    amount: '',
    dependency: '',
  };

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus('Submitting...');
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const donationData = {
        ...values,
        timestamp: serverTimestamp(),
      };
      console.log('Attempting to submit data:', donationData);
      const docRef = await addDoc(collection(db, 'donations'), donationData);
      console.log('Document written with ID: ', docRef.id);
      
      setStatus('Donation submitted successfully!');
      toast({
        title: 'Donation submitted.',
        description: "Thank you for your generous donation!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
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

  return (
    <>
      {showConfetti && <Confetti />}
      {showSuccessPage ? (
        <SuccessPage />
      ) : (
        <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={6} p={4}>
          <Box maxW="600px" mx="auto">
            <Text fontSize="2xl" mb={4} textAlign="center">
              Make a Donation
            </Text>
            <Formik
              initialValues={initialValues}
              validationSchema={DonationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, status, setFieldValue }) => (
                <Form>
                  <VStack spacing={4} align="stretch">
                    <FormControl>
                      <HStack>
                        <FormLabel htmlFor="firstName" w="20%">
                          First Name
                        </FormLabel>
                        <Field as={Input} id="firstName" name="firstName" placeholder="First Name" width="100%" />
                      </HStack>
                    </FormControl>

                    <FormControl>
                      <HStack>
                        <FormLabel htmlFor="lastName" w="20%">
                          Last Name
                        </FormLabel>
                        <Field as={Input} id="lastName" name="lastName" placeholder="Last Name" width="100%" />
                      </HStack>
                    </FormControl>

                    <FormControl>
                      <HStack>
                        <FormLabel htmlFor="email" w="20%">
                          Email
                        </FormLabel>
                        <Field as={Input} id="email" name="email" type="email" placeholder="Email" width="100%" />
                      </HStack>
                    </FormControl>

                    <FormControl>
                      <HStack>
                        <FormLabel htmlFor="phoneNumber" w="20%">
                          Phone Number
                        </FormLabel>
                        <Field as={Input} id="phoneNumber" name="phoneNumber" placeholder="Phone Number" width="100%" />
                      </HStack>
                    </FormControl>

                    <FormControl>
                      <HStack>
                        <FormLabel htmlFor="donationType" w="20%">
                          Donation Type
                        </FormLabel>
                        <Field as={Select} id="donationType" name="donationType" width="100%">
                          <option value="">Select a donation type</option>
                          <option value="oneTime">One-time donation</option>
                          <option value="monthly">Monthly donation</option>
                          <option value="annual">Annual donation</option>
                        </Field>
                      </HStack>
                    </FormControl>

                    <FormControl>
                      <HStack>
                        <FormLabel htmlFor="donationItem" w="20%">
                          Donation Item
                        </FormLabel>
                        <Field
                          as={Select}
                          id="donationItem"
                          name="donationItem"
                          width="100%"
                          onChange={(e) => {
                            setFieldValue('donationItem', e.target.value);
                            setShowAmount(e.target.value === 'money');
                          }}
                        >
                          <option value="">Select what you want to donate</option>
                          <option value="money">Money</option>
                          <option value="clothes">Clothes</option>
                          <option value="accessories">Accessories</option>
                          <option value="food">Food</option>
                        </Field>
                      </HStack>
                    </FormControl>

                    {showAmount && (
                      <FormControl>
                        <HStack>
                          <FormLabel htmlFor="amount" w="20%">
                            Amount
                          </FormLabel>
                          <Field as={Input} id="amount" name="amount" type="number" min="100" step="0.01" placeholder="Amount" width="100%" />
                        </HStack>
                        <Text fontSize="sm" color="red.500" mt={2}>
                          Amount must be at least 100.
                        </Text>
                      </FormControl>
                    )}

                    <FormControl>
                      <HStack>
                        <FormLabel htmlFor="dependency" w="20%">
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

          <Box p={4} borderWidth={1} borderRadius="md" bg="gray.50">
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              How It Works
            </Text>
            <Text mb={4}>
              1. **Fill Out the Form**: Provide your details and choose what you wish to donate.
            </Text>
            <Text mb={4}>
              2. **Make a Difference**: Your donation will support our cause and help those in need.
            </Text>
            <Text>
              3. **Receive a Thank You**: We'll send you a special thank you message and photo to show our gratitude.
            </Text>
          </Box>
        </Grid>
      )}
    </>
  );
}

export default Donate;
