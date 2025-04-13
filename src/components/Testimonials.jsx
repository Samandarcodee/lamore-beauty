import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Flex,
  Icon,
  Avatar
} from '@chakra-ui/react'
import { FaQuoteLeft } from 'react-icons/fa'
import { StarIcon } from '@chakra-ui/icons'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dilfuza Rahimova",
      role: "Doimiy mijoz",
      content: "LaMore saloniga bir necha yildan beri boraman. Mutaxassislarning malakasi va ishlar sifatiga hech qanday shubha yo'q. Har safar uydan chiqayotgandek his qilaman!",
      rating: 5
    },
    {
      id: 2,
      name: "Aziza Karimova",
      role: "Yangi mijoz",
      content: "Birinchi bor kelganimda juda hayratda qoldim. Muhit, xizmat va natija — hammasi yuqori darajada. Endi doimiy mijoz bo‘ldim!",
      rating: 5
    },
    {
      id: 3,
      name: "Gulnoza Mahmudova",
      role: "Mijoz",
      content: "Xizmatlar juda professional. Ayniqsa, yuz parvarishi juda yoqdi. Boshqa joyga borishni xohlamayman endi.",
      rating: 4
    }
  ]

  return (
    <Box id="testimonials" py={16} bg="gray.50">
      <Box maxW="container.xl" mx="auto" px={4}>
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          color="brand.dark"
          mb={12}
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '16',
            height: '1px',
            bg: 'brand.primary'
          }}
        >
          Mijozlar Fikrlari
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {testimonials.map(({ id, name, role, content, rating }) => (
            <Box
              key={id}
              bg="white"
              p={6}
              rounded="2xl"
              shadow="md"
              transition="all 0.3s ease"
              _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
            >
              <Icon as={FaQuoteLeft} boxSize={6} color="brand.primary" mb={4} />

              <Text fontStyle="italic" color="gray.700" mb={6} lineHeight="1.8">
                {content}
              </Text>

              <Flex align="center" mt={4}>
                <Avatar name={name} size="sm" mr={3} />
                <Box>
                  <Text fontWeight="bold" color="brand.dark">{name}</Text>
                  <Text fontSize="sm" color="gray.500">{role}</Text>
                </Box>
              </Flex>

              <Flex mt={3}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < rating ? 'yellow.400' : 'gray.300'}
                    boxSize={4}
                  />
                ))}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Testimonials
