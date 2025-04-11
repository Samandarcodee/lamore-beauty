import { useState } from 'react'
import axios from 'axios'
import {
  Box, Heading, FormControl, FormLabel, Input,
  Select, Textarea, Button, Flex, Icon,
  useToast, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalBody, ModalCloseButton,
  useBreakpointValue
} from '@chakra-ui/react'
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaSpinner } from 'react-icons/fa'

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const toast = useToast()
  const isMobile = useBreakpointValue({ base: true, md: false })

  const services = [
    "Soch olish",
    "Makiyaj",
    "Manikyur/Pedikyur",
    "Terini parvarish qilish",
    "Qosh va kirpiklar",
    "Epilyatsiya",
    "Boshqa xizmat"
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await axios.post(
        `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
          text: `Yangi buyurtma:\nIsm: ${formData.name}\nTelefon: ${formData.phone}\nXizmat: ${formData.service}\nSana: ${formData.date}\nVaqt: ${formData.time}\nQo'shimcha: ${formData.notes}`
        }
      )

      setIsSuccessModalOpen(true)
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      })
    } catch (error) {
      toast({
        title: 'Xatolik yuz berdi',
        description: "Yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: isMobile ? 'top' : 'bottom-right',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box id="appointment" py={{ base: 8, md: 12 }} px={{ base: 4, md: 0 }}>
      <Box maxW="container.md" mx="auto">
        <Heading
          as="h2"
          size={{ base: 'lg', md: 'xl' }}
          fontFamily="heading"
          textAlign="center"
          color="brand.800"
          mb={{ base: 6, md: 8 }}
        >
          Online Yozilish
        </Heading>
        
        <Box
          as="form"
          onSubmit={handleSubmit}
          bg="white"
          p={{ base: 4, md: 6, lg: 8 }}
          rounded="lg"
          shadow="md"
        >
          <FormControl mb={{ base: 4, md: 6 }} isRequired>
            <FormLabel>Ismingiz</FormLabel>
            <Flex align="center">
              <Icon as={FaUser} mr={3} color="gray.500" />
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ismingizni kiriting"
                size={{ base: 'md', md: 'lg' }}
              />
            </Flex>
          </FormControl>
          
          <FormControl mb={{ base: 4, md: 6 }} isRequired>
            <FormLabel>Telefon raqamingiz</FormLabel>
            <Flex align="center">
              <Icon as={FaPhone} mr={3} color="gray.500" />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon raqamingiz"
                size={{ base: 'md', md: 'lg' }}
              />
            </Flex>
          </FormControl>
          
          <FormControl mb={{ base: 4, md: 6 }} isRequired>
            <FormLabel>Xizmat turi</FormLabel>
            <Select
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Tanlang..."
              size={{ base: 'md', md: 'lg' }}
            >
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </Select>
          </FormControl>
          
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 4, md: 6 }}
            mb={{ base: 4, md: 6 }}
          >
            <FormControl isRequired>
              <FormLabel>Sana</FormLabel>
              <Flex align="center">
                <Icon as={FaCalendarAlt} mr={3} color="gray.500" />
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  size={{ base: 'md', md: 'lg' }}
                />
              </Flex>
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>Vaqt</FormLabel>
              <Flex align="center">
                <Icon as={FaClock} mr={3} color="gray.500" />
                <Input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  size={{ base: 'md', md: 'lg' }}
                />
              </Flex>
            </FormControl>
          </Flex>
          
          <FormControl mb={{ base: 6, md: 8 }}>
            <FormLabel>Qo'shimcha izoh (ixtiyoriy)</FormLabel>
            <Textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Qo'shimcha izohlar..."
              rows={3}
              size={{ base: 'md', md: 'lg' }}
            />
          </FormControl>
          
          <Button
            type="submit"
            colorScheme="brand"
            size={{ base: 'md', md: 'lg' }}
            width="full"
            isLoading={isSubmitting}
            loadingText="Yuborilmoqda..."
            spinner={<Icon as={FaSpinner} mr={2} />}
            _hover={{ transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            Yuborish
          </Button>
        </Box>
      </Box>

      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        size={{ base: 'xs', md: 'md' }}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Muvaffaqiyatli yuborildi!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text mb={4}>Tez orada siz bilan bog'lanamiz.</Text>
            <Button
              colorScheme="brand"
              onClick={() => setIsSuccessModalOpen(false)}
              width="full"
            >
              Yopish
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default AppointmentForm