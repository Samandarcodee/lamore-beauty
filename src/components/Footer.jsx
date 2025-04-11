import {
  Box, Flex, Heading, Link, Text, Divider, Icon,
  UnorderedList, ListItem, SimpleGrid, useBreakpointValue
} from '@chakra-ui/react'
import { FaTelegram, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box as="footer" bg="brand.900" color="white" pt={12} pb={8}>
      <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 6 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: 8, md: 10 }}
          mb={8}
        >
          <Box>
            <Heading as="h3" size="md" color="brand.400" mb={4}>
              LaMore
            </Heading>
            <Text color="gray.300" fontSize={{ base: 'sm', md: 'md' }}>
              Sizning go'zalligingiz - bizning faxrimiz. Professional xizmat va yuqori sifat kafolati.
            </Text>
          </Box>
          
          <Box>
            <Heading as="h4" size="sm" mb={4} color="white">
              Tez havolalar
            </Heading>
            <UnorderedList
              styleType="none"
              spacing={{ base: 2, md: 3 }}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              {['home', 'services', 'gallery', 'appointment', 'contact'].map((item) => (
                <ListItem key={item}>
                  <Link
                    href={`#${item}`}
                    color="gray.300"
                    _hover={{ color: 'brand.300' }}
                    display="inline-block"
                    py={1}
                  >
                    {item === 'home' && 'Bosh sahifa'}
                    {item === 'services' && 'Xizmatlar'}
                    {item === 'gallery' && 'Galereya'}
                    {item === 'appointment' && 'Online yozilish'}
                    {item === 'contact' && 'Kontaktlar'}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
          
          <Box>
            <Heading as="h4" size="sm" mb={4} color="white">
              Kontaktlar
            </Heading>
            <UnorderedList
              styleType="none"
              spacing={{ base: 2, md: 3 }}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <ListItem>
                <Flex align="center">
                  <Icon as={FaMapMarkerAlt} mr={2} color="brand.300" />
                  <Text color="gray.300">
                    Toshkent shahar, Mirzo Ulug'bek tumani
                  </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex align="center">
                  <Icon as={FaPhone} mr={2} color="brand.300" />
                  <Text color="gray.300">+998 90 123 45 67</Text>
                </Flex>
              </ListItem>
            </UnorderedList>
          </Box>
          
          <Box>
            <Heading as="h4" size="sm" mb={4} color="white">
              Ijtimoiy tarmoqlar
            </Heading>
            <Flex gap={4} mb={{ base: 3, md: 4 }}>
              <Link href="https://t.me/lamore_salon" isExternal>
                <Icon
                  as={FaTelegram}
                  boxSize={5}
                  color="gray.300"
                  _hover={{ color: 'brand.300' }}
                />
              </Link>
              <Link href="https://instagram.com/lamore_salon" isExternal>
                <Icon
                  as={FaInstagram}
                  boxSize={5}
                  color="gray.300"
                  _hover={{ color: 'brand.300' }}
                />
              </Link>
              <Link href="https://facebook.com/lamore_salon" isExternal>
                <Icon
                  as={FaFacebook}
                  boxSize={5}
                  color="gray.300"
                  _hover={{ color: 'brand.300' }}
                />
              </Link>
            </Flex>
            <Text color="gray.300" fontSize={{ base: 'sm', md: 'md' }}>
              Obuna bo'ling va yangiliklardan xabardor bo'ling
            </Text>
          </Box>
        </SimpleGrid>
        
        <Divider borderColor="gray.700" my={{ base: 4, md: 6 }} />
        
        <Box
          textAlign="center"
          pt={{ base: 2, md: 4 }}
          color="gray.400"
          fontSize={{ base: 'xs', md: 'sm' }}
        >
          <Text>
            &copy; {new Date().getFullYear()} LaMore Go'zallik Saloni. Barcha huquqlar himoyalangan.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer