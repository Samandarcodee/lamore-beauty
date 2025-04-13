import {
  Box, Flex, Heading, Link, Text, Divider, Icon,
  UnorderedList, ListItem, SimpleGrid, useBreakpointValue
} from '@chakra-ui/react'
import {
  FaTelegram, FaInstagram, FaFacebook,
  FaMapMarkerAlt, FaPhone
} from 'react-icons/fa'

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box as="footer" bg="gray.900" color="gray.100" pt={14} pb={8}>
      <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 6 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mb={10}>
          <Box>
            <Heading as="h3" size="md" color="brand.400" mb={4}>
              LaMore
            </Heading>
            <Text fontSize="sm" color="gray.400" lineHeight="tall">
              Sizning go‘zalligingiz – bizning faxrimiz. 
              Professional xizmat va yuqori sifat kafolati.
            </Text>
          </Box>

          <Box>
            <Heading as="h4" size="sm" mb={4} fontWeight="semibold" color="gray.200">
              Tez havolalar
            </Heading>
            <UnorderedList styleType="none" spacing={2}>
              {[
                { id: 'home', name: 'Bosh sahifa' },
                { id: 'services', name: 'Xizmatlar' },
                { id: 'gallery', name: 'Galereya' },

                { id: 'contact', name: 'Kontaktlar' },
              ].map(link => (
                <ListItem key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    fontSize="sm"
                    color="gray.400"
                    _hover={{ color: 'brand.300' }}
                    transition="0.2s ease"
                  >
                    {link.name}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>

          <Box>
            <Heading as="h4" size="sm" mb={4} fontWeight="semibold" color="gray.200">
              Kontaktlar
            </Heading>
            <UnorderedList styleType="none" spacing={3} fontSize="sm">
              <ListItem>
                <Flex align="center">
                  <Icon as={FaMapMarkerAlt} mr={2} color="brand.300" />
                  Toshkent shahar, Mirzo Ulug'bek tumani
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                  <Icon as={FaPhone} mr={2} color="brand.300" />
                  +998 90 123 45 67
                </Flex>
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Heading as="h4" size="sm" mb={4} fontWeight="semibold" color="gray.200">
              Ijtimoiy tarmoqlar
            </Heading>
            <Flex gap={4} mb={3}>
              <Link href="https://t.me/lamore_salon" isExternal>
                <Icon
                  as={FaTelegram}
                  boxSize={5}
                  color="gray.400"
                  _hover={{ color: 'brand.300', transform: 'scale(1.1)' }}
                  transition="all 0.2s ease"
                />
              </Link>
              <Link href="https://instagram.com/lamore_salon" isExternal>
                <Icon
                  as={FaInstagram}
                  boxSize={5}
                  color="gray.400"
                  _hover={{ color: 'brand.300', transform: 'scale(1.1)' }}
                  transition="all 0.2s ease"
                />
              </Link>
              <Link href="https://facebook.com/lamore_salon" isExternal>
                <Icon
                  as={FaFacebook}
                  boxSize={5}
                  color="gray.400"
                  _hover={{ color: 'brand.300', transform: 'scale(1.1)' }}
                  transition="all 0.2s ease"
                />
              </Link>
            </Flex>
            <Text fontSize="sm" color="gray.400">
              Obuna bo‘ling va yangiliklardan xabardor bo‘ling.
            </Text>
          </Box>
        </SimpleGrid>

        <Divider borderColor="gray.700" mb={6} />

        <Text
          textAlign="center"
          fontSize="xs"
          color="gray.500"
        >
          &copy; {new Date().getFullYear()} LaMore Go‘zallik Saloni. Barcha huquqlar himoyalangan.
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
