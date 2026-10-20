import { Box, Container, HStack, Icon, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'

const mutedLink = {
  color: 'gray.600',
  _dark: { color: 'gray.400' },
  _hover: { color: 'gray.900', _dark: { color: 'gray.200' } },
}

export default function Footer() {
  const bg = useColorModeValue('white', 'gray.900')
  const color = useColorModeValue('gray.900', 'gray.200')

  return (
    <Box as="footer" bg={bg} color={color} mt="auto" py={8}>
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <Box borderTop="1px" borderColor="gray.200" _dark={{ borderColor: 'gray.700' }} pt={4}>
          <VStack spacing={3}>
            <Text textAlign="center" fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
              © {new Date().getFullYear()} Ibrahim Abdinur
            </Text>
            <HStack spacing={4} justify="center">
              <Link href="https://github.com/iabdinur" isExternal aria-label="GitHub" {...mutedLink}>
                <Icon as={FaGithub} boxSize={5} />
              </Link>
              <Link href="https://www.linkedin.com/in/ibrahim-abdinur/" isExternal aria-label="LinkedIn" {...mutedLink}>
                <Icon as={FaLinkedin} boxSize={5} />
              </Link>
              <Link href="mailto:iabdinur@icloud.com" aria-label="Email" {...mutedLink}>
                <Icon as={FaEnvelope} boxSize={5} />
              </Link>
              <Link href="https://iabdinur.com" isExternal aria-label="Website" {...mutedLink}>
                <Icon as={FaExternalLinkAlt} boxSize={5} />
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}
