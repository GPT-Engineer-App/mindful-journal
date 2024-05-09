import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";

const articles = [
  {
    id: 1,
    title: "The Benefits of Daily Journaling",
    imageUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  },
  {
    id: 2,
    title: "How Journaling Can Ease Anxiety",
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  },
  {
    id: 3,
    title: "Journaling as a Tool for Self-Discovery",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  },
];

const Gallery = () => {
  return (
    <SimpleGrid columns={3} spacing={10}>
      {articles.map((article) => (
        <Box key={article.id} boxShadow="md" p="5" rounded="md" bg="white">
          <Image src={article.imageUrl} alt={article.title} borderRadius="md" />
          <Text mt="2" fontSize="xl" fontWeight="bold" textAlign="center">
            {article.title}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Gallery;
