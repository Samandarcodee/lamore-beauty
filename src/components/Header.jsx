import { useState } from 'react'
import { 
  Box, Flex, Heading, Button, ButtonGroup, 
  Icon, useDisclosure, useBreakpointValue 
} from '@chakra-ui/react'
import { FaPhone, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa'
import MobileMenu from './MobileMenu'

const Header = ({ activeTab, setActiveTab }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })

  const tabs = [
    { id: 'home', label: 'Bosh Sahifa' },
    { id: 'services', label: 'Xizmatlar' },
    { id: 'gallery', label: 'Galereya' },
    { id: 'appointment', label: 'Online Yozilish' },
    { id: 'contact', label: 'Kontaktlar' },
  ]

  return (
    <Box as="header" bg="white" boxShadow="sm" position="sticky" top={0} zIndex="sticky">
      <Flex
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={3}
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Heading as="h1" size="lg" color="brand.500" fontFamily="heading">
            LaMore
          </Heading>
          <Box ml={2} fontSize="sm" color="secondary.500">
            Go'zallik Saloni
          </Box>
        </Flex>

        {isMobile ? (
          <Button
            variant="ghost"
            colorScheme="brand"
            onClick={onOpen}
            aria-label="Open menu"
          >
            <Icon as={FaBars} boxSize={5} />
          </Button>
        ) : (
          <ButtonGroup variant="ghost" spacing={1}>
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                colorScheme={activeTab === tab.id ? 'brand' : 'gray'}
                size="sm"
                px={3}
              >
                {tab.label}
              </Button>
            ))}
          </ButtonGroup>
        )}

        <MobileMenu isOpen={isOpen} onClose={onClose} tabs={tabs} setActiveTab={setActiveTab} />
      </Flex>
    </Box>
  )
}

export default Header