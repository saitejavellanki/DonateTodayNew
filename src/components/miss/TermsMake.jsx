// src/components/TermsAndConditions.js

import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, Checkbox, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const TermsAnd = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleButtonClick = () => {
    if (isChecked) {
      navigate('/make'); // Navigate to the donation page
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Terms and Conditions
        </Heading>

        <Box>
          <Text fontSize="lg">
            <strong>Effective Date:</strong> 15-08-2024
          </Text>
          <Text fontSize="lg" mt={4}>
            Welcome to DonateToday! By using our donation services, you agree to the following Terms and Conditions. Please read them carefully.
          </Text>

          <Text fontSize="lg" mt={4}>
            <strong>1. Acceptance of Terms</strong><br />
            By accessing or using the DonateToday website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </Text>

          <Text fontSize="lg" mt={4}>
            <strong>2. Donation Process</strong><br />
            1. <strong>Initiation:</strong> To make a donation, you must complete the donation form provided on our website. You will be required to provide your name, contact details, and the donation amount. You may also specify any particular causes or projects you wish to support.<br />
            2. <strong>Confirmation:</strong> After submitting the form, you will receive a confirmation email with instructions on the next steps.<br />
            3. <strong>Follow-Up:</strong> Our team will contact you via phone to verify your donation details and discuss payment options. Payment will be processed securely once all details are confirmed.<br />
            4. <strong>Acknowledgment:</strong> Upon successful completion of the donation, you will receive an official receipt and a thank you message.
          </Text>

          <Text fontSize="lg" mt={4}>
            <strong>3. Special Occasion Donations</strong><br />
            1. <strong>Feature Overview:</strong> Our platform allows you to make donations in honor of special occasions such as birthdays, anniversaries, or other milestones.<br />
            2. <strong>Personalized Video Messages:</strong> As part of our special occasion feature, you may receive a personalized video message from us, such as a “Happy Birthday” greeting, to celebrate the event and thank you for your contribution.<br />
            3. <strong>Custom Stickers:</strong> For donations that support food relief, custom stickers may be added to food packages to acknowledge the special occasion.<br />
            4. <strong>Opt-In:</strong> Participation in the special occasion features is optional and subject to availability.
          </Text>

          <Text fontSize="lg" mt={4}>
            <strong>4. Use of Personal Information</strong><br />
            1. <strong>Privacy:</strong> We are committed to protecting your privacy. Your personal information will be used only for processing donations and providing related services. For more details, please review our Privacy Policy.<br />
            2. <strong>Communication:</strong> By making a donation, you consent to receive communications from us regarding your donation and related updates.
          </Text>

          <Text fontSize="lg" mt={4}>
            <strong>5. Payment and Fees</strong><br />
            1. <strong>Payment Method:</strong> Payment details will be collected over the phone during the follow-up call. We accept various secure payment methods.<br />
            2. <strong>Fees:</strong> Any transaction fees or charges incurred during the payment process will be communicated to you beforehand.
          </Text>

          <Text fontSize="lg" mt={4}>
            <strong>6. Refunds and Cancellations</strong><br />
            1. <strong>Refunds:</strong> Donations are generally non-refundable. In exceptional cases, you may request a refund, and we will review the request on a case-by-case basis.<br />
            2. <strong>Cancellations:</strong> You may cancel your donation request before payment is processed. Once payment is completed, cancellations will be subject to our refund policy.
          </Text>

          <Text fontSize="lg" mt={4}>
            <strong>7. Changes to Terms</strong><br />
            We may update these Terms and Conditions from time to time. Changes will be effective when posted on our website. It is your responsibility to review these terms periodically.
          </Text>

          <Text fontSize="lg" mt={4}>
            <strong>8. Limitation of Liability</strong><br />
            DonateToday is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services. Our liability is limited to the maximum extent permitted by law.
          </Text>

          

          <Text fontSize="lg" mt={4}>
            <strong>10. Contact Us</strong><br />
            For any questions or concerns regarding these Terms and Conditions, please contact us at:<br />
            **DonateToday**<br />
            Email: donatetoday613@gmail.com<br />
            Address: Gachibowli, Hyderabad, Telangana.
          </Text>

          <Text fontSize="lg" mt={4}>
            By using our services, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
          </Text>
        </Box>

        <FormControl mt={8}>
          <FormLabel>
            <Checkbox isChecked={isChecked} onChange={handleCheckboxChange}>
              I agree to the Terms and Conditions
            </Checkbox>
          </FormLabel>
          <Button
            colorScheme="blue"
            size="lg"
            isDisabled={!isChecked}
            onClick={handleButtonClick}
          >
            Proceed to Make a Wish Donation
          </Button>
        </FormControl>
      </VStack>
    </Container>
  );
};

export default TermsAnd;
