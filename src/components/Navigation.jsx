import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Link to="/">
          <Button colorScheme="teal" variant="ghost">
            Home
          </Button>
        </Link>
        <Link to="/article/1">
          <Button colorScheme="teal" variant="ghost">
            Article 1
          </Button>
        </Link>
        <Link to="/article/2">
          <Button colorScheme="teal" variant="ghost">
            Article 2
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
