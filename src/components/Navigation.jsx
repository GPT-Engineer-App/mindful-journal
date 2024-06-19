import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";

const Navigation = () => {
  const bgColor = useColorModeValue("blue.500", "blue.800");

  return (
    <Box bg={bgColor} p={4}>
      <Flex justify="space-between">
        <Link to="/">
          <Button colorScheme="teal" variant="ghost">
            Home
          </Button>
        </Link>

        <Link to="/gallery">
          <Button colorScheme="teal" variant="ghost">
            Gallery
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
