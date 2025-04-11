import { 
  Box, Heading, SimpleGrid, Text, Flex, 
  Tag, Stack, Accordion, AccordionItem, 
  AccordionButton, AccordionPanel, AccordionIcon,
  Badge, useDisclosure, Modal, ModalOverlay,
  ModalContent, ModalHeader, ModalCloseButton,
  ModalBody, ModalFooter, Button,
  Icon // Icon komponentini qo'shdik
} from '@chakra-ui/react'
import { 
  FaRegClock, 
  FaMoneyBillWave, 
  FaInfoCircle,
  FaChevronDown,
  FaChevronUp,
  FaCheck,
  FaCalendarAlt
} from 'react-icons/fa'
import { useState } from 'react'

const Services = ({ detailed = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedService, setSelectedService] = useState(null)

  const serviceCategories = [
    {
      id: 1,
      name: "Косметология",
      icon: "💆‍♀️",
      services: [
        { name: "Глубокая чистка лица", price: "300,000 so'm", duration: "1-1.5 soat", description: "Tozalovchi parvarish, yog‘ va kirlarni chuqurdan yo‘qotadi." },
        { name: "Химические пилинги", price: "100,000 - 500,000 so'm", duration: "30-60 daqiqa", description: "Terini yangilaydi, dog‘ va qora nuqtalarni kamaytiradi." },
        { name: "Плазмолифтинг (PRP-терапия)", price: "300,000 so'm", duration: "45 daqiqa", description: "Terini yoshartirish va mustahkamlash" },
        { name: "Мезотерапия лица", price: "400,000 - 1,000,000 so'm", duration: "45-60 daqiqa", description: "Teriga vitamin va mineral moddalarni kiritish" },
        { name: "Биоревитализация", price: "500,000 - 1,500,000 so'm", duration: "1 soat", description: "Gigroskopik gel bilan chuqur namlantirish va yoshartirish." },
        { name: "Контурная пластика губ (1 мл)", price: "700,000 - 1,500,000 so'm", duration: "1 soat", description: "Lab shaklini to‘g‘rilash va hajm berish." },
        { name: "Заполнение носогубных складок", price: "700,000 so'm", duration: "30 daqiqa", description: "Yuzdagi ajinlarni tekislovchi fillerlar." },
        { name: "Коррекция второго подбородка", price: "700,000 so'm", duration: "45 daqiqa", description: "Yonoq osti yog‘ini kamaytirish va konturni chizish." },
        { name: "Ботулинотерапия (Ботокс)", price: "20,000 so'm", duration: "15 daqiqa", description: "Ajinlar va mushaklarni bo‘shashtirish uchun inyeksiya." }
      ]
    },
    {
      id: 2,
      name: "Наращивание ресниц и бровей",
      icon: "👁",
      services: [
        { name: "Классическое / 2D / 3D", price: "200,000 so'm", duration: "1.5-2 soat", description: "Tabiiy ko‘rinishdan to zich ko‘rinishgacha effekt." },
        { name: "4D / 5D", price: "250,000 so'm", duration: "2-2.5 soat", description: "Ko‘zlarni yirikroq va chuqurroq ko‘rsatadi." },
        { name: "Мега объём", price: "300,000 so'm", duration: "2.5-3 soat", description: "Juda qalin va chiroyli effekt" },
        { name: "Ламинирование ресниц", price: "100,000 so'm", duration: "1 soat", description: "Kipriklarni mustahkamlab, egri shakl beradi." },
        { name: "Ламинирование бровей ", price: "100,000 so'm", duration: "45 daqiqa", description: "Qoshlarni tarang va silliq holatda ushlab turadi." },
        { name: "Снятие наращенных ресниц ", price: "30,000 so'm", duration: "30 daqiqa", description: "Eski yoki begona kipriklarni xavfsiz olib tashlash." }
      ]
    },
    {
      id: 3,
      name: " Перманентный макияж",
      icon: "💄",
      services: [
        { name: "Пудровые брови ", price: "300,000 so'm", duration: "2-2.5 soat", description: "Tabiiy soyali effektli doimiy qosh shakli." },
        { name: "Перманентная стрелка", price: "250,000 so'm", duration: "1.5 soat", description: "Ko‘zlarga doimiy tuzilgan klassik chiziq." },
        { name: "Акварельный татуаж губ", price: "300,000 so'm", duration: "2 soat", description: "Lablarni tabiiy rangga keltirish" },
        { name: "Лазерное удаление татуажа бровей", price: "200,000 so'm", duration: "1 soat", description: "Noaniq yoki noto‘g‘ri tatuirovkani yo‘qotish." }
      ]
    }
  ]

  const handleServiceClick = (service) => {
    setSelectedService(service)
    onOpen()
  }

  return (
    <Box id="services" py={12} bg="brand.light">
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
          height: '1',
          bg: 'brand.dark'
        }}
      >
        Bizning Xizmatlar
      </Heading>

      <Accordion allowMultiple>
        {serviceCategories.map(category => (
          <AccordionItem key={category.id} mb={6} border="none">
            <AccordionButton 
              p={4} 
              bg="white" 
              borderRadius="lg" 
              _hover={{ bg: 'gray.50' }}
              _expanded={{ bg: 'brand.dark', color: 'black' }}
            >
              <Box flex="1" textAlign="left">
                <Flex align="center">
                  <Text fontSize="xl" mr={3}>{category.icon}</Text>
                  <Heading as="h3" size="md">{category.name}</Heading>
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            
            <AccordionPanel pb={4} px={0}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {category.services.map((service, idx) => (
                  <Box 
                    key={idx}
                    bg="white"
                    p={4}
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{ 
                      borderColor: 'brand.primary',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                    cursor="pointer"
                    onClick={() => handleServiceClick(service)}
                  >
                    <Flex justify="space-between" mb={2}>
                      <Text fontWeight="bold">{service.name}</Text>
                      <Tag 
                        colorScheme="brand" 
                        size="sm"
                        variant="solid"
                      >
                        {service.price}
                      </Tag>
                    </Flex>
                    
                    <Flex align="center" color="gray.600" fontSize="sm" mb={1}>
                      <Icon as={FaRegClock} mr={2} />
                      <Text>{service.duration}</Text>
                    </Flex>
                    
                    <Flex align="center" color="gray.600" fontSize="sm">
                      <Icon as={FaInfoCircle} mr={2} />
                      <Text isTruncated>{service.description}</Text>
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

     
    </Box>
  )
}

export default Services