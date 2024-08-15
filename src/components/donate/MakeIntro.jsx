import React, { useState } from 'react';
import { Box, Button, Text, VStack, Heading, Container, List, ListItem, Checkbox, FormControl, FormLabel } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function MakeIntro() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our Donation Page
        </Heading>
        
        <Box>
          <Heading as="h2" size="xl" mb={4} textAlign="center">
            About Donations
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your generosity can make a real difference. Whether you choose to donate money, clothes, accessories, or food, 
            your contribution will help support various causes including education, healthcare, environmental protection, 
            animal welfare, and disaster relief.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4} textAlign="center">
            Make a Wish Donation
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Celebrate special occasions with a meaningful donation. Whether it's a birthday, anniversary, or any other milestone, 
            you can choose to make a donation in honor of the event. We offer a unique way to mark these moments:
          </Text>
          <List spacing={4} mt={4} textAlign="center">
            <ListItem>
              <Text fontWeight="bold">Personalized Video Messages:</Text> 
              On special occasions, you’ll receive a personalized video message from us, such as a “Happy Birthday” greeting, to celebrate the event and thank you for your contribution.
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Custom Stickers on Food Donations:</Text> 
              If your donation supports food relief, we’ll add custom stickers to the food packages to recognize the occasion and make the gift even more special.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4} textAlign="center">
            How the Donation Process Works
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Here’s a step-by-step guide to our donation process:
          </Text>
          <List spacing={4} mt={4} textAlign="center">
            <ListItem>
              <Text fontWeight="bold">1. Initiate Your Donation:</Text> 
              Fill out our donation form with your name, contact details, and the amount you wish to donate. You can also specify if you want to support any particular cause or project.
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">2. Form Submission:</Text> 
              After submitting the form, you'll receive a confirmation email with details about the next steps.
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">3. Personal Follow-Up:</Text> 
              Our team will call you to confirm your donation details and discuss payment options. We’ll ensure everything is accurate and answer any questions you might have.
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">4. Finalize Your Donation:</Text> 
              Complete the payment process securely with guidance from our team.
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">5. Receive Confirmation and Acknowledgment:</Text> 
              You'll get an official receipt and a thank you message acknowledging your generous contribution.
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">6. Stay Engaged:</Text> 
              We’ll keep you updated on the impact of your donation through regular reports and newsletters.
            </ListItem>
          </List>
        </Box>

        <Box textAlign="center" mt={6}>
          <FormControl display="flex" alignItems="center" justifyContent="center">
            <Checkbox id="terms" isChecked={isChecked} onChange={handleCheckboxChange} />
            <FormLabel htmlFor="terms" ml={2} fontSize="lg">
              I agree to the <RouterLink to="/termsMake" style={{ color: 'blue', textDecoration: 'underline' }}>Terms and Conditions</RouterLink>.
            </FormLabel>
          </FormControl>
        </Box>

        <Box textAlign="center" mt={6}>
          <Button 
            as={RouterLink} 
            to="/make" 
            colorScheme="blue" 
            size="lg"
            isDisabled={!isChecked}
          >
            Proceed to Make a Wish Donation Form
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}

export default MakeIntro;
