import { 
  Box, Heading, SimpleGrid, Text, Flex, Icon, 
  Link, Divider, AspectRatio 
} from '@chakra-ui/react'
import { motion } from 'framer-motion'  
import { 
  FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope, 
  FaTelegram, FaInstagram, FaFacebook 
} from 'react-icons/fa'
import { MdOutlineSupportAgent } from 'react-icons/md'

const ContactInfo = () => {
  return (
    <Box id="contact" py={12}>
      <Box maxW="container.xl" mx="auto" px={4}>
        <Heading 
          as="h2" 
          size="xl" 
          fontFamily="heading" 
          textAlign="center" 
          color="brand.dark" 
          mb={12}
        >
          Biz bilan bog'laning
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box bg="white" p={6} rounded="lg" shadow="md">
            <Heading as="h3" size="md" color="brand.primary" mb={4}>
              Kontakt ma'lumotlari
            </Heading>
            
            <Box spaceY={4}>
              <Flex align="start">
                <Icon as={FaMapMarkerAlt} mt={1} mr={3} color="brand.secondary" />
                <Box>
                  <Text fontWeight="medium" color="brand.dark">Manzil</Text>
                  <Text color="gray.600">
                    Toshkent shahar, Mirzo Ulug'bek tumani, Amir Temur ko'chasi 45
                  </Text>
                </Box>
              </Flex>
              
              <Flex align="start">
                <Icon as={FaPhone} mt={1} mr={3} color="brand.secondary" />
                <Box>
                  <Text fontWeight="medium" color="brand.dark">Telefon</Text>
                  <Text color="gray.600">+998 90 123 45 67</Text>
                  <Text color="gray.600">+998 71 234 56 78</Text>
                </Box>
              </Flex>
              
              <Flex align="start">
                <Icon as={FaEnvelope} mt={1} mr={3} color="brand.secondary" />
                <Box>
                  <Text fontWeight="medium" color="brand.dark">Email</Text>
                  <Text color="gray.600">info@lamore.uz</Text>
                </Box>
              </Flex>
              
              <Flex align="start">
                <Icon as={MdOutlineSupportAgent} mt={1} mr={3} color="brand.secondary" />
                <Box>
                  <Text fontWeight="medium" color="brand.dark">Ijtimoiy tarmoqlar</Text>
                  <Flex align="center" mt={2} gap={3}>
                    <Link href="https://t.me/lamore_salon" isExternal>
                      <Icon as={FaTelegram} boxSize={5} color="brand.secondary" _hover={{ color: 'brand.primary' }} />
                    </Link>
                    <Link href="https://instagram.com/lamore_salon" isExternal>
                      <Icon as={FaInstagram} boxSize={5} color="brand.secondary" _hover={{ color: 'brand.primary' }} />
                    </Link>
                    <Link href="https://facebook.com/lamore_salon" isExternal>
                      <Icon as={FaFacebook} boxSize={5} color="brand.secondary" _hover={{ color: 'brand.primary' }} />
                    </Link>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
          
          <Box bg="white" p={6} rounded="lg" shadow="md">
            <Heading as="h3" size="md" color="brand.primary" mb={4}>
              Ish vaqti
            </Heading>
            
            <Box spaceY={4}>
              <Flex align="start">
                <Icon as={FaClock} mt={1} mr={3} color="brand.secondary" />
                <Box>
                  <Text fontWeight="medium" color="brand.dark">Dushanba - Juma</Text>
                  <Text color="gray.600">09:00 - 20:00</Text>
                </Box>
              </Flex>
              
              <Flex align="start">
                <Icon as={FaClock} mt={1} mr={3} color="brand.secondary" />
                <Box>
                  <Text fontWeight="medium" color="brand.dark">Shanba</Text>
                  <Text color="gray.600">10:00 - 18:00</Text>
                </Box>
              </Flex>
              
              <Flex align="start">
                <Icon as={FaClock} mt={1} mr={3} color="brand.secondary" />
                <Box>
                  <Text fontWeight="medium" color="brand.dark">Yakshanba</Text>
                  <Text color="gray.600">Dam olish kuni</Text>
                </Box>
              </Flex>
            </Box>
            
            <Divider my={8} />
            
            <Box>
              <Text fontWeight="medium" color="brand.dark" mb={2}>
                Xaritada joylashuv
              </Text>
              <AspectRatio ratio={16/9}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.254317163736!2d69.24207231572594!3d41.32569020704025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2a1e09d5a1%3A0x3d90b2a7a0a1b0a1!2sAmir%20Temur%20ko'chasi%2C%20Toshkent%2C%20O'zbekiston!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                  title="LaMore Salon Location"
                  allowFullScreen
                  loading="lazy"
                  style={{ border: 0 }}
                  rounded="lg"
                />
              </AspectRatio>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default ContactInfo