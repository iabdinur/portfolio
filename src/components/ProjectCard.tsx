import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  IconButton,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa'
import { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

const MotionCard = motion(Card)

export default function ProjectCard({ project }: ProjectCardProps) {
  const handleCardClick = () => {
    const url = project.liveUrl || project.githubUrl
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const handleIconClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box
      as="button"
      onClick={handleCardClick}
      w="100%"
      h="100%"
      textAlign="left"
      _hover={{ transform: 'translateY(-4px)' }}
      transition="transform 0.2s"
    >
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -4 }}
        cursor="pointer"
        h="100%"
        display="flex"
        flexDirection="column"
      >
      <CardHeader>
        <Flex justify="space-between" align="start">
          <VStack align="start" spacing={1}>
            <Heading size="md">{project.title}</Heading>
            <Text fontSize="sm" color="gray.500">
              {project.period}
            </Text>
          </VStack>
          <HStack spacing={2}>
            {project.githubUrl && (
              <IconButton
                onClick={(e) => handleIconClick(e, project.githubUrl!)}
                aria-label={`View ${project.title} on GitHub`}
                icon={<FaGithub />}
                variant="ghost"
                size="sm"
              />
            )}
            {project.liveUrl && (
              <IconButton
                onClick={(e) => handleIconClick(e, project.liveUrl!)}
                aria-label={`Visit ${project.title} live site`}
                icon={<ExternalLinkIcon />}
                variant="ghost"
                size="sm"
              />
            )}
          </HStack>
        </Flex>
      </CardHeader>
      <CardBody pt={0} flex="1" display="flex" flexDirection="column">
        <Text mb={4} color="gray.600" _dark={{ color: 'gray.300' }} flex="1">
          {project.description}
        </Text>
        <HStack flexWrap="wrap" gap={2} mb={3}>
          {project.technologies.map((tech) => (
            <Tag key={tech} size="sm" colorScheme="blue">
              {tech}
            </Tag>
          ))}
        </HStack>
        <Text fontSize="xs" color="gray.500" fontWeight="medium" mt="auto">
          {project.category}
        </Text>
      </CardBody>
    </MotionCard>
    </Box>
  )
}
