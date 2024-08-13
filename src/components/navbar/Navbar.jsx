import React, { useState } from 'react';
import { Box, Flex, Text, HStack, IconButton, VStack, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import "./Navbar.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState('right');

  const NavItems = ['Services', 'Admin', 'Contact Us', 'Our Team'];

  const NavLinks = ({ mobile = false, onClose }) => (
    <>
      {NavItems.map((item) => (
        <NavLink
          key={item}
          to={`/${item.toLowerCase().replace(' ', '-')}`}
          className="nav-link"
          style={({ isActive }) => ({
            color: 'white',
            fontSize: mobile ? "lg" : ["sm", "md", "lg"],
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: 'none',
            transition: "all 0.3s",
            padding: "0.5rem",
            borderRadius: "md",
          })}
          onClick={mobile ? onClose : undefined}
          _hover={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transform: "translateY(-2px)",
          }}
        >
          {item}
        </NavLink>
      ))}
    </>
  );

  return (
    <Box bg="red.600" py={4} boxShadow="lg">
      <Flex maxW="container.xl" mx="auto" px={4} justify="space-between" align="center">
        <Text fontWeight="bold" fontSize={["xl", "2xl"]} color="white">
          <NavLink
            to="/"
            className="logo"
            style={{
              display: "flex",
              alignItems: "center",
              transition: "transform 0.3s",
            }}
            _hover={{ transform: "scale(1.05)" }}
          >
            DonateToday
          </NavLink>
        </Text>
        
        {/* Desktop Navigation */}
        <HStack spacing={[4, 6, 8]} as="nav" display={{ base: "none", md: "flex" }}>
          <NavLinks />
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
          variant="outline"
          color="white"
        />

        {/* Mobile Drawer */}
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="red.600">
            <DrawerCloseButton color="white" />
            <DrawerHeader color="white">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                <NavLinks mobile onClose={onClose} />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;