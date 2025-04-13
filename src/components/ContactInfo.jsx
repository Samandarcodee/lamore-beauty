import {
  Box, Heading, SimpleGrid, Text, Flex, Icon,
  Link, Divider, AspectRatio, Stack
} from '@chakra-ui/react'
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope, FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa'
import { MdOutlineSupportAgent } from 'react-icons/md'

const ContactInfo = () => {
  return (
    <Box id="contact" py={16} bg="gray.50">
      <Box maxW="container.xl" mx="auto" px={4}>
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          fontWeight="bold"
          mb={12}
          color="brand.700"
        >
          Biz bilan bog'laning
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Left Side: Contact Info */}
          <Box bg="white" p={8} rounded="2xl" shadow="md">
            <Heading as="h3" size="md" color="brand.600" mb={6}>
              Kontakt ma'lumotlari
            </Heading>

            <Stack spacing={5}>
              <Flex align="start">
                <Icon as={FaMapMarkerAlt} mt={1} mr={3} color="brand.500" />
                <Box>
                  <Text fontWeight="semibold" color="gray.700">Manzil</Text>
                  <Text color="gray.500">
                    Toshkent shahar, Mirzo Ulug'bek tumani, Amir Temur ko'chasi 45
                  </Text>
                </Box>
              </Flex>

              <Flex align="start">
                <Icon as={FaPhone} mt={1} mr={3} color="brand.500" />
                <Box>
                  <Text fontWeight="semibold" color="gray.700">Telefon</Text>
                  <Text color="gray.500">+998 90 123 45 67</Text>
                  <Text color="gray.500">+998 71 234 56 78</Text>
                </Box>
              </Flex>

              <Flex align="start">
                <Icon as={FaEnvelope} mt={1} mr={3} color="brand.500" />
                <Box>
                  <Text fontWeight="semibold" color="gray.700">Email</Text>
                  <Text color="gray.500">info@lamore.uz</Text>
                </Box>
              </Flex>

              <Flex align="start">
                <Icon as={MdOutlineSupportAgent} mt={1} mr={3} color="brand.500" />
                <Box>
                  <Text fontWeight="semibold" color="gray.700">Ijtimoiy tarmoqlar</Text>
                  <Flex mt={2} gap={4}>
                    <Link href="https://t.me/lamore_salon" isExternal>
                      <Icon
                        as={FaTelegram}
                        boxSize={5}
                        color="gray.500"
                        _hover={{ color: 'brand.500', transform: 'scale(1.1)' }}
                        transition="0.2s"
                      />
                    </Link>
                    <Link href="https://instagram.com/lamore_salon" isExternal>
                      <Icon
                        as={FaInstagram}
                        boxSize={5}
                        color="gray.500"
                        _hover={{ color: 'brand.500', transform: 'scale(1.1)' }}
                        transition="0.2s"
                      />
                    </Link>
                    <Link href="https://facebook.com/lamore_salon" isExternal>
                      <Icon
                        as={FaFacebook}
                        boxSize={5}
                        color="gray.500"
                        _hover={{ color: 'brand.500', transform: 'scale(1.1)' }}
                        transition="0.2s"
                      />
                    </Link>
                  </Flex>
                </Box>
              </Flex>
            </Stack>
          </Box>

          {/* Right Side: Working hours + Map */}
          <Box bg="white" p={8} rounded="2xl" shadow="md">
            <Heading as="h3" size="md" color="brand.600" mb={6}>
              Ish vaqti
            </Heading>

            <Stack spacing={5}>
              <Flex align="start">
                <Icon as={FaClock} mt={1} mr={3} color="brand.500" />
                <Box>
                  <Text fontWeight="semibold" color="gray.700">Dushanba - Juma</Text>
                  <Text color="gray.500">09:00 - 20:00</Text>
                </Box>
              </Flex>

              <Flex align="start">
                <Icon as={FaClock} mt={1} mr={3} color="brand.500" />
                <Box>
                  <Text fontWeight="semibold" color="gray.700">Shanba</Text>
                  <Text color="gray.500">10:00 - 18:00</Text>
                </Box>
              </Flex>

              <Flex align="start">
                <Icon as={FaClock} mt={1} mr={3} color="brand.500" />
                <Box>
                  <Text fontWeight="semibold" color="gray.700">Yakshanba</Text>
                  <Text color="gray.500">Dam olish kuni</Text>
                </Box>
              </Flex>
            </Stack>

            <Divider my={8} />

            <Box>
              <Text fontWeight="semibold" color="gray.700" mb={2}>
                Xaritada joylashuv
              </Text>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.254317163736!2d69.24207231572594!3d41.32569020704025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2a1e09d5a1%3A0x3d90b2a7a0a1b0a1!2sAmir%20Temur%20ko'chasi%2C%20Toshkent%2C%20O'zbekiston!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  title="LaMore Salon Location"
                  allowFullScreen
                  loading="lazy"
                  style={{ border: 0, borderRadius: '12px' }}
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
