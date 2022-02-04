import { Box } from '@chakra-ui/react';

export const Content: React.FC = ({ children }) => (
  <Box ml={{ base: 0, md: 60 }} p="4">
    {children}
  </Box>
);
