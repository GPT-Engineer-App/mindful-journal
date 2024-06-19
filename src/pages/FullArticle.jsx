import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Box, Heading, Text, Link, VStack } from "@chakra-ui/react";

const articles = [
  {
    id: 1,
    title: "The Benefits of Daily Journaling",
    content: "Explore how daily journaling can enhance your mental health and emotional clarity.",
  },
  {
    id: 2,
    title: "How to Start Journaling",
    content: "A beginner's guide to starting a journaling habit that sticks.",
  },
  {
    id: 3,
    title: "Journaling Techniques for Anxiety",
    content: "Learn effective techniques to use journaling as a tool to manage anxiety.",
  },
];

const FullArticle = () => {
  const { id } = useParams();
  const articleId = parseInt(id, 10);
  const article = articles.find((article) => article.id === articleId);
  const prevArticle = articles.find((article) => article.id === articleId - 1);
  const nextArticle = articles.find((article) => article.id === articleId + 1);

  return (
    <Box p={5}>
      <Heading>{article.title}</Heading>
      <Text mt={4}>{article.content}</Text>
      <VStack mt={8} spacing={4} align="stretch">
        {prevArticle && (
          <Link as={RouterLink} to={`/article/${prevArticle.id}`} color="teal.500">
            Previous: {prevArticle.title}
          </Link>
        )}
        {nextArticle && (
          <Link as={RouterLink} to={`/article/${nextArticle.id}`} color="teal.500">
            Next: {nextArticle.title}
          </Link>
        )}
      </VStack>
      <Heading as="h3" size="lg" mt={8}>
        Keep Reading
      </Heading>
      <VStack mt={4} spacing={4} align="stretch">
        {articles.map((article) => (
          <Link key={article.id} as={RouterLink} to={`/article/${article.id}`} color="teal.500">
            {article.title}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default FullArticle;
