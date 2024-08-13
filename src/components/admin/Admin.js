import React, { useState, useEffect, useRef } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text, Input, Image, Link, Button, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import { db } from '../firebase/firebase';
import { collection, getDocs, query, orderBy, deleteDoc, doc, writeBatch } from 'firebase/firestore';

function Admin() {
  const [donations, setDonations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deletingId, setDeletingId] = useState(null);
  const [isDeleteAllOpen, setIsDeleteAllOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  useEffect(() => {
    const fetchDonations = async () => {
      const donationsCollection = collection(db, 'donations');
      const q = query(donationsCollection, orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const donationsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate().toLocaleString()
      }));
      setDonations(donationsList);
    };

    fetchDonations();
  }, []);

  const filteredDonations = donations.filter(donation =>
    (`${donation.firstName} ${donation.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'donations', id));
      setDonations(donations.filter(donation => donation.id !== id));
      onClose();
    } catch (error) {
      console.error('Error deleting donation:', error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      const batch = writeBatch(db);
      const donationsCollection = collection(db, 'donations');
      const querySnapshot = await getDocs(donationsCollection);
      querySnapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
      });
      await batch.commit();
      setDonations([]);
      setIsDeleteAllOpen(false);
    } catch (error) {
      console.error('Error deleting all donations:', error);
    }
  };

  return (
    <Box maxW={['100%', '100%', '1200px']} mx="auto" p={[2, 4, 6]}>
      <Text fontSize={['xl', '2xl']} mb={4}>Donation Panel</Text>
      <Input
        placeholder="Search by Name"
        mb={4}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        size={['sm', 'md', 'lg']}
      />
      <Button
        colorScheme="red"
        mb={4}
        onClick={() => setIsDeleteAllOpen(true)}
      >
        Delete All
      </Button>
      <Box overflowX="auto">
        <Table variant="simple" size={['sm', 'md', 'lg']} minW="800px">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Donation Type</Th>
              <Th>Donation Item</Th>
              <Th>Amount</Th>
              <Th>Cause</Th>
              <Th>Timestamp</Th>
              <Th>Occasion</Th>
              <Th>Photo</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredDonations.map((donation) => (
              <Tr key={donation.id}>
                <Td>{`${donation.firstName} ${donation.lastName}`}</Td>
                <Td>{donation.email}</Td>
                <Td>{donation.donationType}</Td>
                <Td>{donation.donationItem}</Td>
                <Td>{donation.amount || 'N/A'}</Td>
                <Td>{donation.dependency}</Td>
                <Td>{donation.timestamp}</Td>
                <Td>{donation.occasion || 'N/A'}</Td>
                <Td>
                  {donation.photo ? (
                    <>
                      <Image
                        src={donation.photo}
                        alt="Donation Photo"
                        boxSize="100px"
                        objectFit="cover"
                        mr={2}
                      />
                      <Link
                        href={donation.photo}
                        isExternal
                        download={`donation_${donation.id}.jpg`}
                        color="blue.500"
                      >
                        Download
                      </Link>
                    </>
                  ) : (
                    'No Photo'
                  )}
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      setDeletingId(donation.id);
                      onOpen();
                    }}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Single Delete Confirmation Dialog */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Delete Donation</AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this donation? This action cannot be undone.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={() => handleDelete(deletingId)} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* Delete All Confirmation Dialog */}
      <AlertDialog
        isOpen={isDeleteAllOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsDeleteAllOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Delete All Donations</AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete all donations? This action cannot be undone.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsDeleteAllOpen(false)}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteAll} ml={3}>
                Delete All
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

export default Admin;
