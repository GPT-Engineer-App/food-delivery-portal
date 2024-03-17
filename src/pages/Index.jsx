import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, GridItem, Button, Input, Stack, Flex, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50fGVufDB8fHx8MTcxMDcwOTA4Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    cuisines: ["Burgers", "Fast Food"],
  },
  {
    id: 2,
    name: "Pizza Haven",
    image: "https://images.unsplash.com/photo-1594394206930-67339d922f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnR8ZW58MHx8fHwxNzEwNzA5MDg2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    cuisines: ["Pizza", "Italian"],
  },
  {
    id: 3,
    name: "Sushi Spot",
    image: "https://images.unsplash.com/photo-1621871908119-295c8ce5cee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJlc3RhdXJhbnR8ZW58MHx8fHwxNzEwNzA5MDg2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    cuisines: ["Sushi", "Japanese"],
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addToCart = (restaurant) => {
    setCart([...cart, restaurant]);
  };

  const filteredRestaurants = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box p={4}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="xl">
          Food Delivery
        </Heading>
        <IconButton icon={<FaShoppingCart />} aria-label="Cart" variant="outline" />
      </Flex>

      <Stack spacing={4} mb={8}>
        <Input placeholder="Search restaurants..." value={searchTerm} onChange={handleSearch} icon={<FaSearch />} />
      </Stack>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {filteredRestaurants.map((restaurant) => (
          <GridItem key={restaurant.id}>
            <Box borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={restaurant.image} alt={restaurant.name} />
              <Box p={4}>
                <Heading as="h2" size="md" mb={2}>
                  {restaurant.name}
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={4}>
                  {restaurant.cuisines.join(", ")}
                </Text>
                <Button colorScheme="blue" size="sm" onClick={() => addToCart(restaurant)}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
