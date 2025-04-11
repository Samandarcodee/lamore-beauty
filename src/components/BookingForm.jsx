import { 
  Box, Heading, FormControl, FormLabel, 
  Input, Select, Button, VStack, 
  InputGroup, InputLeftElement, Icon 
} from '@chakra-ui/react'
import { FaUser, FaPhone, FaCalendarAlt, FaCut } from 'react-icons/fa'

const BookingForm = () => {
  const services = [
    'Soch olish',
    'Makiyaj',
    'Manikyur',
    'Pedikyur',
    'Terini parvarish qilish',
    'Epilyatsiya'
  ]

  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
      <Heading as="h3" size="lg" mb={6} color="brand.800">
        Online Yozilish
      </Heading>
      
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Ismingiz</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaUser} color="gray.400" />
            </InputLeftElement>
            <Input 
              type="text" 
              placeholder="Ismingizni kiriting" 
              focusBorderColor="brand.500"
            />
          </InputGroup>
        </FormControl>
        
        <FormControl isRequired>
          <FormLabel>Telefon raqamingiz</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaPhone} color="gray.400" />
            </InputLeftElement>
            <Input 
              type="tel" 
              placeholder="90 123 45 67" 
              focusBorderColor="brand.500"
            />
          </InputGroup>
        </FormControl>
        
        <FormControl isRequired>
          <FormLabel>Xizmat turi</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaCut} color="gray.400" />
            </InputLeftElement>
            <Select 
              placeholder="Xizmatni tanlang" 
              focusBorderColor="brand.500"
            >
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </Select>
          </InputGroup>
        </FormControl>
        
        <FormControl isRequired>
          <FormLabel>Sana</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaCalendarAlt} color="gray.400" />
            </InputLeftElement>
            <Input 
              type="date" 
              focusBorderColor="brand.500"
            />
          </InputGroup>
        </FormControl>
        
        <Button 
          colorScheme="brand"
          size="lg"
          width="full"
          mt={4}
          _hover={{ transform: 'translateY(-2px)' }}
          transition="all 0.2s"
        >
          Yuborish
        </Button>
      </VStack>
    </Box>
  )
}

export default BookingForm