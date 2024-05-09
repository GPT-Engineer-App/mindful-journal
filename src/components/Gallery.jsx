import { VStack, Box, Text } from "@chakra-ui/react";

const Gallery = () => {
  const articles = [
    { id: 1, title: "The Benefits of Daily Journaling", date: "2024-04-15", summary: "Explore how daily journaling can enhance your mental health and emotional clarity." },
    { id: 2, title: "How to Start Journaling", date: "2024-04-20", summary: "A beginner's guide to starting a journaling habit that sticks." },
    { id: 3, title: "Journaling Techniques for Anxiety", date: "2024-04-25", summary: "Learn effective techniques to use journaling as a tool to manage anxiety." },
  ];

  articles.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <VStack spacing={5} align="stretch">
      {articles.map((article) => (
        <Box key={article.id} boxShadow="md" p="5" rounded="md" bg="gray.100">
          <Text fontSize="xl" fontWeight="bold">
            {article.title}
          </Text>
          <Text mt="2">{article.summary}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Gallery;
