import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

const FullArticle = () => {
  const { id } = useParams();

  return (
    <Box p={5}>
      <Heading>Article {id}</Heading>
      <Text>This is the full article content for article {id}.</Text>
    </Box>
  );
};

export default FullArticle;
