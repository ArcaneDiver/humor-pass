import React from 'react';
import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { Head } from '@humor-pass/components/common';
import { ThemeProvider } from '@humor-pass/theme';

import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { Content } from './Content';

export const Layout: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head />
      <ThemeProvider>
        <Box minH="100vh">
          <Sidebar
            onClose={() => onClose}
            display={{ base: 'none', md: 'block' }}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <Sidebar onClose={onClose} />
            </DrawerContent>
          </Drawer>
          <Navbar onOpen={onOpen} />
          <Content>{children}</Content>
        </Box>
      </ThemeProvider>
    </>
  );
};
