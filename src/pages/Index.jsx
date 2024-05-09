import { Container, VStack, Heading, Text, Button, Image, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaBookOpen } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.50");

  return (
    <Container maxW="container.md" p={4} centerContent>
      <VStack spacing={8} align="stretch">
        <VStack>
          <IconButton aria-label="Toggle theme" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} size="md" alignSelf="flex-end" />
          <Heading as="h1" size="2xl" textAlign="center">
            Journaling for Mental Health
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Discover the power of journaling to improve your mental well-being and find inner peace.
          </Text>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1586380951230-e6703d9f6833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqb3VybmFsaW5nfGVufDB8fHx8MTcxNTI2MTIzNHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="Journaling setup" />
        <VStack spacing={4}>
          <Heading as="h2" size="xl" textAlign="center">
            Why Journal?
          </Heading>
          <Text fontSize="md" color={textColor}>
            Journaling can help you manage anxiety, reduce stress, and cope with depression. It allows you to track patterns, trends, and improvement over time.
          </Text>
          <Button leftIcon={<FaBookOpen />} colorScheme="purple" variant="solid">
            Start Journaling Today
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
