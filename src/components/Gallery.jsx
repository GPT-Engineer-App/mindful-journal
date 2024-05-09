import { SimpleGrid, Box, Image, Text } from '@chakra-ui/react';

const Gallery = () => {
  const articles = [
    { id: 1, title: 'The Benefits of Daily Journaling', imageUrl: 'https://example.com/image1.jpg' },
    { id: 2, title: 'How to Start Journaling', imageUrl: 'https://example.com/image2.jpg' },
    { id: 3, title: 'Journaling Techniques for Anxiety', imageUrl: 'https://example.com/image3.jpg' }
  ];

  return (
    <SimpleGrid columns={3} spacing={10}>
      {articles.map(article => (
        <Box key={article.id} boxShadow='md' p='5' rounded='md'>
          <Image src={article.imageUrl} alt={article.title} borderRadius='lg' />
          <Text mt='2' fontWeight='bold' textAlign='center'>{article.title}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Gallery;