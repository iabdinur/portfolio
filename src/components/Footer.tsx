import { Box, Container, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box as="footer" borderTop="1px" borderColor="gray.200" _dark={{ borderColor: 'gray.700' }} py={8} mt={16}>
      <Container maxW="7xl">
        <Flex direction={{ base: 'column', sm: 'row' }} justify="space-between" align="center" gap={4}>
          <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
            Ibrahim Abdinur © {new Date().getFullYear()}
          </Text>
          <HStack spacing={4}>
            <IconButton
              as="a"
              href="https://github.com/iabdinur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              size="sm"
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/ibrahim-abdinur/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              size="sm"
            />
            <IconButton
              as="a"
              href="mailto:iabdinur@icloud.com"
              aria-label="Email"
              icon={<FaEnvelope />}
              variant="ghost"
              size="sm"
            />
            <IconButton
              as="a"
              href="https://iabdinur.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              icon={<FaExternalLinkAlt />}
              variant="ghost"
              size="sm"
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
