import { VStack, Box, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Gallery = ({ language }) => {
  const articles = [
    {
      id: 1,
      title: {
        en: "The Benefits of Daily Journaling",
        es: "Los Beneficios de Escribir un Diario Diario",
      },
      date: "2024-04-15",
      summary: {
        en: "Explore how daily journaling can enhance your mental health and emotional clarity.",
        es: "Explora cómo escribir un diario diario puede mejorar tu salud mental y claridad emocional.",
      },
    },
    {
      id: 2,
      title: {
        en: "How to Start Journaling",
        es: "Cómo Empezar a Escribir un Diario",
      },
      date: "2024-04-20",
      summary: {
        en: "A beginner's guide to starting a journaling habit that sticks.",
        es: "Una guía para principiantes sobre cómo empezar un hábito de escribir un diario que perdure.",
      },
    },
    {
      id: 3,
      title: {
        en: "Journaling Techniques for Anxiety",
        es: "Técnicas de Escribir un Diario para la Ansiedad",
      },
      date: "2024-04-25",
      summary: {
        en: "Learn effective techniques to use journaling as a tool to manage anxiety.",
        es: "Aprende técnicas efectivas para usar el diario como una herramienta para manejar la ansiedad.",
      },
    },
  ];

  articles.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <VStack spacing={5} align="stretch">
      {articles.map((article) => (
        <Box key={article.id} boxShadow="md" p="5" rounded="md" bg="gray.100">
          <Link as={RouterLink} to={`/article/${article.id}`} fontSize="xl" fontWeight="bold">
            {article.title[language]}
          </Link>
          <Text mt="2">{article.summary[language]}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Gallery;
