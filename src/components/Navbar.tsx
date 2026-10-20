import { Box, Flex, IconButton, Link, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar() {
  const bg = useColorModeValue('white', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const { toggleColorMode } = useColorMode()
  const ThemeIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Box as="nav" bg={bg} borderBottom="1px" borderColor={borderColor} position="sticky" top={0} zIndex={1000}>
      <Flex h={16} alignItems="center" justifyContent="space-between" px={{ base: 4, md: 8, lg: 16 }} mx="auto">
        <Link href="/" fontWeight="bold" fontSize="xl">
          Ibrahim Abdinur's Portfolio
        </Link>
        <IconButton aria-label="Toggle theme" icon={<ThemeIcon />} onClick={toggleColorMode} variant="ghost" />
      </Flex>
    </Box>
  )
}
