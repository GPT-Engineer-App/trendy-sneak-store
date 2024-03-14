import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py="4" mt="8" bg={useColorModeValue("gray.100", "gray.900")} textAlign="center">
      <Text>&copy; {new Date().getFullYear()} Trendy Sneakers. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;