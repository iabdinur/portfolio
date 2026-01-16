import { ChakraProvider, ColorModeScript, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'
import theme from './theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

function App() {
  return (
    <>
      <ColorModeScript initialColorMode="light" />
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Container maxW="7xl" py={16}>
            <VStack spacing={8} align="stretch">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <VStack spacing={4} textAlign="center" mb={8}>
                  <Heading
                    as="h1"
                    size={{ base: 'xl', md: '2xl', lg: '3xl' }}
                    fontWeight="bold"
                  >
                    My Portfolio
                  </Heading>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" _dark={{ color: 'gray.400' }}>
                    Software engineer building cloud based applications, microservices, and data pipelines
                  </Text>
                </VStack>
              </motion.div>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
          <Footer />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  )
}

export default App
