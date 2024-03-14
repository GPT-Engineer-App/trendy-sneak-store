import React from "react";
import { Box, Heading, Text, Flex, Image, Grid, Button, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Sleek Sneakers",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBzbmVha2VycyUyMHByb2R1Y3QlMjBzaG90fGVufDB8fHx8MTcxMDQwMzkyNnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Urban Kicks",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwc25lYWtlcnMlMjBwcm9kdWN0JTIwaW1hZ2V8ZW58MHx8fHwxNzEwNDAzOTI3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Retro Runners",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHN0eWxlJTIwc25lYWtlcnN8ZW58MHx8fHwxNzEwNDAzOTI3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Futuristic Footwear",
    price: "$179.99",
    image: "https://images.unsplash.com/photo-1534531507089-063dde305cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwc25lYWtlciUyMGRlc2lnbnxlbnwwfHx8fDE3MTA0MDM5Mjd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            Trendy Sneakers
          </Heading>
        </Flex>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
          Cart
        </Button>
      </Flex>

      <Box p={4}>
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6}>
          {products.map((product) => (
            <Box key={product.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />

              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontSize="xl" fontWeight="semibold" mr="2">
                    {product.name}
                  </Text>
                  <Text fontSize="lg" color="gray.600">
                    {product.price}
                  </Text>
                </Box>

                <Button mt="4" colorScheme="teal">
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
