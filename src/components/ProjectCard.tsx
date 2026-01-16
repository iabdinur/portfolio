import {
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
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      cursor="pointer"
      h="100%"
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
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                icon={<FaGithub />}
                variant="ghost"
                size="sm"
              />
            )}
            {project.liveUrl && (
              <IconButton
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live site`}
                icon={<ExternalLinkIcon />}
                variant="ghost"
                size="sm"
              />
            )}
          </HStack>
        </Flex>
      </CardHeader>
      <CardBody pt={0}>
        <Text mb={4} color="gray.600" _dark={{ color: 'gray.300' }}>
          {project.description}
        </Text>
        <HStack flexWrap="wrap" gap={2} mb={3}>
          {project.technologies.map((tech) => (
            <Tag key={tech} size="sm" colorScheme="blue">
              {tech}
            </Tag>
          ))}
        </HStack>
        <Text fontSize="xs" color="gray.500" fontWeight="medium">
          {project.category}
        </Text>
      </CardBody>
    </MotionCard>
  )
}
