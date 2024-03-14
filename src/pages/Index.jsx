import { Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" width="full" p={4} bgColor="gray.200" textAlign="center">
      © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
    </Box>
  );
}

export default function Index() {
  return (
    <>
      {}
      <Footer />
    </>
  );
}
