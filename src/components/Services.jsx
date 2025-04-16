import React, { useState } from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Flex,
  Tag,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  useColorModeValue,
  ScaleFade,
  Avatar,
  Divider,
  Stack
} from "@chakra-ui/react";
import { FaRegClock, FaInfoCircle, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Services = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Rang rejimiga qarab o'zgaruvchilar
  const cardBg = useColorModeValue("#FDFAF");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBorderColor = useColorModeValue("brand.primary", "brand.400");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("#3A4330"); // Xizmat nomlari qora rangda
  const priceColor = useColorModeValue("#957151"); // Narxlar qora rangda

  const serviceCategories = [
    {
      id: 1,
      name: "Косметология",
      icon: "💆‍♀️",
      description: "Professional kosmetologik xizmatlar - teri tozalash, yoshartirish va parvarish qilish bo'yicha to'liq spektr xizmatlari",
      services: [
        {
          name: "Глубокая чистка лица",
          price: "300,000 so'm",
          duration: "1-1.5 soat",
          description: "Tozalovchi parvarish, yog' va kirlarni chuqurdan yo'qotadi. Xizmat tarkibiga teri tahlili, bug'lash, mexanik tozalash va maska kiradi.",
          benefits: [
            "Terining chuqur tozalanishi",
            "Yog' bezlarining normal ishlashi",
            "Yaltiroq va sog'lom teri",
            "Professional mahsulotlar ishlatiladi"
          ]
        },
        {
          name: "Химические пилинги",
          price: "100,000 - 500,000 so'm",
          duration: "30-60 daqiqa",
          description: "Terini yangilaydi, dog' va qora nuqtalarni kamaytiradi. Turli kuchdagi kislotalar (glycolic, salicylic, lactic) ishlatiladi.",
          benefits: [
            "Terining yengil yangilanishi",
            "Pigmentatsiya kamayishi",
            "Terining tekisligini oshirish",
            "Individual tarzda tanlangan tarkib"
          ]
        },
        {
          name: "Плазмолифтинг (PRP-терапия)",
          price: "300,000 so'm",
          duration: "45 daqiqa",
          description: "Terini yoshartirish va mustahkamlash. Xizmat bemorning o'z qonidan olingan trombotsitli plazma ishlatiladi.",
          benefits: [
            "Tabiiy stimulyator",
            "Yallig'lanishga qarshi ta'sir",
            "Kollagen ishlab chiqarishni oshirish",
            "Uzoq davom etadigan natija"
          ]
        },
        {
          name: "Мезотерапия лица",
          price: "400,000 - 1,000,000 so'm",
          duration: "45-60 daqiqa",
          description: "Teriga vitamin va mineral moddalarni kiritish. Individual tarzda tanlangan kokteyllar chuqur teri qatlamlariga yetkaziladi.",
          benefits: [
            "Chuqur namlanish",
            "Terining immunitetini oshirish",
            "Yorqinlik va yoshlikni qaytarish",
            "Har bir mijoz uchun maxsus formulalar"
          ]
        },
        {
          name: "Биоревитализация",
          price: "500,000 - 1,500,000 so'm",
          duration: "1 soat",
          description: "Gigroskopik gel bilan chuqur namlantirish va yoshartirish. Gialuron kislotasi asosidagi preparatlar qo'llaniladi.",
          benefits: [
            "Chuqur namlanish effekti",
            "Terining elastikligini oshirish",
            "Ajinlarning kamayishi",
            "3-5 seansdan keyin barqaror natija"
          ]
        },
        {
          name: "Контурная пластика губ (1 мл)",
          price: "700,000 - 1,500,000 so'm",
          duration: "1 soat",
          description: "Lab shaklini to'g'rilash va hajm berish. Yuqori sifatli gialuron kislotasi asosidagi fillerlar ishlatiladi.",
          benefits: [
            "Tabiiy ko'rinish",
            "Og'riqsiz protsedura",
            "Individual shakllantirish",
            "12-18 oy davom etadigan natija"
          ]
        },
        {
          name: "Заполнение носогубных складок",
          price: "700,000 so'm",
          duration: "30 daqiqa",
          description: "Yuzdagi ajinlarni tekislovchi fillerlar.",
          benefits: [
            "Ajinlarni yumshatish",
            "Yuz konturini yaxshilash",
            "Tabiiy ko'rinish",
            "6-12 oy davom etadigan ta'sir"
          ]
        },
        {
          name: "Коррекция второго подбородка",
          price: "700,000 so'm",
          duration: "45 daqiqa",
          description: "Yonoq osti yog'ini kamaytirish va konturni chizish.",
          benefits: [
            "Yuz aniqroq kontur",
            "Ikkinchi iyakni kamaytirish",
            "Yuzning yoshroq ko'rinishi",
            "Uzoq muddatli natija"
          ]
        },
        {
          name: "Ботулинотерапия (Ботокс)",
          price: "20,000 so'm",
          duration: "15 daqiqa",
          description: "Ajinlar va mushaklarni bo'shashtirish uchun inyeksiya. Xizmat yuz, bo'yin va peshona sohalariga qo'llaniladi.",
          benefits: [
            "Tez natija (3-7 kun ichida)",
            "Og'riqsiz protsedura",
            "6-8 oy davom etadigan ta'sir",
            "Tajribali mutaxassis tomonidan bajariladi"
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Наращивание ресниц и бровей",
      icon: "👁",
      description: "Kiprik va qosh bo'yicha professional xizmatlar - tabiiy va sun'iy usullarda go'zallik yaratish",
      services: [
        {
          name: "Классическое наращивание ресниц",
          price: "200,000 so'm",
          duration: "1.5-2 soat",
          description: "Har bir tabiiy kiprikka 1 ta sun'iy kiprik biriktiriladi. Tabiiy va nozik ko'rinish.",
          benefits: [
            "Tabiiy ko'rinish",
            "Kipriklarga minimal yuk",
            "Uzoq muddatli xizmat (3-4 hafta)",
            "Suvga chidamli yopishtiruvchi"
          ]
        },
        {
          name: "2D наращивание ресниц",
          price: "220,000 so'm",
          duration: "2 soat",
          description: "Har bir tabiiy kiprikka 2 ta sun'iy kiprik biriktiriladi. Zichroq ko'rinish.",
          benefits: [
            "Zichroq ko'rinish",
            "Kipriklarga o'rtacha yuk",
            "3 haftagacha saqlanadi",
            "Professional materiallar"
          ]
        },
        {
          name: "3D наращивание ресниц",
          price: "250,000 so'm",
          duration: "2.5 soat",
          description: "Har bir tabiiy kiprikka 3 ta sun'iy kiprik biriktiriladi. Dramatik va chiroyli effekt.",
          benefits: [
            "Dramatik effekt",
            "Ko'zlarning kattaroq ko'rinishi",
            "3 haftagacha saqlanadi",
            "Har bir kiprik uchun individual tanlov"
          ]
        },
        {
          name: "Ламинирование ресниц",
          price: "100,000 so'm",
          duration: "1 soat",
          description: "Kipriklarni mustahkamlab, egri shakl beradi. Xizmat tarkibiga kipriklarni bo'yash va oziqlantirish kiradi.",
          benefits: [
            "6-8 haftagacha davom etadi",
            "Tabiiy va yumshoq ko'rinish",
            "Kipriklarning o'sishini rag'batlantirish",
            "Har kuni tarash shart emas"
          ]
        },
        {
          name: "Коррекция бровей",
          price: "50,000 so'm",
          duration: "30 daqiqa",
          description: "Qoshlarni to'g'ri shakllantirish va ortiqchalarni olib tashlash.",
          benefits: [
            "Aniq qosh shakli",
            "Professional usulda shakllantirish",
            "Qosh terisini parvarish qilish",
            "15 kun davomida go'zal shakl"
          ]
        },
        {
          name: "Окрашивание бровей хной",
          price: "60,000 so'm",
          duration: "45 daqiqa",
          description: "Qoshlarni tabiiy xna bilan bo'yash va shakllantirish.",
          benefits: [
            "Tabiiy bo'yoq",
            "2-3 haftagacha saqlanadi",
            "Qosh terisini oziqlantirish",
            "Individual rang tanlovi"
          ]
        },
        {
          name: "Ламинирование бровей",
          price: "100,000 so'm",
          duration: "45 daqiqa",
          description: "Qoshlarni tarang va silliq holatda ushlab turadi. Xizmat tarkibiga qoshlarni shakllantirish va bo'yash kiradi.",
          benefits: [
            "4-6 haftagacha davom etadi",
            "Mukammal shakl",
            "Qoshlarning o'sishini rag'batlantirish",
            "Har kuni tarash shart emas"
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Перманентный макияж",
      icon: "💄",
      description: "Uzoq muddatli (1-3 yil) saqlanadigan kosmetik tatuirovka - qosh, lab va ko'zlar uchun mukammal shakl yaratish",
      services: [
        {
          name: "Пудровые брови",
          price: "300,000 so'm",
          duration: "2-2.5 soat",
          description: "Tabiiy soyali effektli doimiy qosh shakli. Microblading texnologiyasi yordamida amalga oshiriladi.",
          benefits: [
            "1-3 yil davom etadi",
            "Tabiiy ko'rinish",
            "Individual shakl va rang",
            "Qoshlarni har kuni bo'yash shart emas"
          ]
        },
        {
          name: "Перманентная стрелка",
          price: "250,000 so'm",
          duration: "1.5 soat",
          description: "Ko'zlarga doimiy tuzilgan klassik chiziq. Ko'z shakliga moslab ishlab chiqiladi.",
          benefits: [
            "1-2 yil davom etadi",
            "Suvga chidamli",
            "Har kuni bo'yash shart emas",
            "Ko'zlarning ifodasini kuchaytiradi"
          ]
        },
        {
          name: "Акварельный татуаж губ",
          price: "300,000 so'm",
          duration: "2 soat",
          description: "Lablarni tabiiy rangga keltirish. Lablarning tabiiy konturini ta'kidlaydi va rangini yaxshilaydi.",
          benefits: [
            "2-3 yil davom etadi",
            "Lablarning aniqroq ko'rinishi",
            "Tabiiy rang effekti",
            "Lablarning hajmini vizual oshiradi"
          ]
        },
        {
          name: "Контур губ",
          price: "280,000 so'm",
          duration: "2 soat",
          description: "Lablarning tabiiy konturini ta'kidlash va shaklini to'g'rilash.",
          benefits: [
            "1-2 yil davom etadi",
            "Lablarning aniqroq ko'rinishi",
            "Asimmetriyani tuzatish",
            "Tabiiy ko'rinish"
          ]
        },
        {
          name: "Межресничный татуаж",
          price: "270,000 so'm",
          duration: "1.5 soat",
          description: "Kipriklar orasiga nozik chiziq chizish, kipriklarni zichroq ko'rsatadi.",
          benefits: [
            "1-2 yil davom etadi",
            "Tabiiy ko'rinish",
            "Kipriklarning zichligini oshirish",
            "Har kuni bo'yash shart emas"
          ]
        }
      ]
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    onOpen();
  };

  return (
    <Box id="services" py={16} bg="#F9F5F0" px={{ base: 4, md: 8, lg: 16 }}>
      <Box maxW="1200px" mx="auto">
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          color='#545C4D'
          mb={12}
          position="relative"
          fontWeight="semibold"
          
       
        >
          Bizning Professional Xizmatlar
        </Heading>

        {serviceCategories.map((category) => (
          <Box key={category.id} mb={16}>
            <Flex align="center" mb={6} px={2}>
              <Avatar
                icon={<Box fontSize="2xl">{category.icon}</Box>}
                size="lg"
                bg="brand.primaryLight"
                color="brand.primary"
                mr={4}
              />
              <Box>
                <Heading  as="h3" size="xl" color={headingColor} fontWeight="semibold">
                  {category.name}
                </Heading>
                <Text color={textColor} mt={1}>{category.description}</Text>
              </Box>
            </Flex>
            
            <SimpleGrid 
              columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
              spacing={{ base: 4, md: 5, lg: 6 }}
            >
              {category.services.map((service, idx) => (
                <ScaleFade key={idx} in initialScale={0.95}>
                  <Box
                    bg={cardBg}
                    p={6}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor={hoveredCard === idx ? hoverBorderColor : borderColor}
                    transition="all 0.3s ease"
                    _hover={{
                      borderColor: hoverBorderColor,
                      boxShadow: "xl",
                      transform: "translateY(-5px)",
                    }}
                    cursor="pointer"
                    onClick={() => handleServiceClick(service)}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    position="relative"
                    overflow="hidden"
                    minHeight="200px"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      w="full"
                      h="4px"
                      bg="brand.primary"
                    />
                    
                    <Text 
                      fontWeight="bold" 
                      fontSize="lg" 
                      color={headingColor}
                      mb={2}
                      flexShrink={0}
                    >
                      {service.name}
                    </Text>
                    
                    <Box mb={3} flexShrink={0}>
                      <Tag
                        size="lg"
                        variant="solid"
                        bg="transparent"
                        color={priceColor}
                        px={3}
                        py={1}
                        borderRadius="md"
                        fontWeight="bold"
                        fontSize="md"
                    
                      >
                        {service.price}
                      </Tag>
                    </Box>
                    
                    <Flex 
                      align="center" 
                      color={textColor} 
                      fontSize="sm" 
                      mb={2}
                      flexShrink={0}
                    >
                      <Icon as={FaRegClock} mr={2} color="brand.primary" />
                      <Text>{service.duration}</Text>
                    </Flex>
                    
                    <Flex 
                      align="flex-start" 
                      color={textColor} 
                      fontSize="sm"
                      flexGrow={1}
                      mb={4}
                    >
                      <Icon as={FaInfoCircle} mr={2} mt={0.5} color="brand.primary" />
                      <Text noOfLines={3}>{service.description}</Text>
                    </Flex>
                    
                    <Flex 
                      align="center" 
                      color="brand.primary" 
                      fontWeight="medium"
                      fontSize="sm"
                      mt="auto"
                    >
                      <Text>Batafsil ma'lumot</Text>
                      <Icon as={FaArrowRight} ml={2} />
                    </Flex>
                  </Box>
                </ScaleFade>
              ))}
            </SimpleGrid>
          </Box>
        ))}

        <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
          <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(2px)" />
          <ModalContent borderRadius="xl" overflow="hidden">
            <ModalHeader 
              bg="brand.primary" 
              color="#3A4330"
              fontSize="xl"
              fontWeight="bold"
              py={4}
            >
              {selectedService?.name}
            </ModalHeader>
            <ModalCloseButton color="white" _hover={{ bg: "brand.primaryDark" }} />
            <ModalBody py={6}>
              <Stack spacing={6}>
                <Flex justify="space-between" align="center">
                  <Box>
                    <Text fontWeight="semibold" color="gray.700" mb={1}>
                      Narx:
                    </Text>
                    <Text fontSize="xl" color="brand.primary" fontWeight="bold">
                      {selectedService?.price}
                    </Text>
                  </Box>
                </Flex>
                
                <Divider />
                
                <Box>
                  <Text fontWeight="semibold" color="gray.700" mb={2}>
                    Davomiylik:
                  </Text>
                  <Flex align="center" bg="blue.50" px={3} py={2} borderRadius="md">
                    <Icon as={FaRegClock} mr={2} color="brand.primary" />
                    <Text>{selectedService?.duration}</Text>
                  </Flex>
                </Box>
                
                <Divider />
                
                <Box>
                  <Text fontWeight="semibold" color="gray.700" mb={2}>
                    Tavsif:
                  </Text>
                  <Flex align="flex-start" bg="gray.50" px={3} py={2} borderRadius="md">
                    <Icon as={FaInfoCircle} mr={2} mt={0.5} color="brand.primary" />
                    <Text lineHeight="tall">{selectedService?.description}</Text>
                  </Flex>
                </Box>
                
                {selectedService?.benefits && (
                  <>
                    <Divider />
                    <Box>
                      <Text fontWeight="semibold" color="gray.700" mb={2}>
                        Afzalliklar:
                      </Text>
                      <Stack spacing={2}>
                        {selectedService.benefits.map((benefit, i) => (
                          <Flex key={i} align="center">
                            <Icon as={FaCheckCircle} color="green.500" mr={2} />
                            <Text>{benefit}</Text>
                          </Flex>
                        ))}
                      </Stack>
                    </Box>
                  </>
                )}
              </Stack>
            </ModalBody>
            <ModalFooter borderTop="1px solid" borderColor="gray.100">
              <Button 
                colorScheme="brand" 
                px={8}
                py={5}
                borderRadius="md"
             backgroundColor={'#8D694B'}
                fontWeight="bold"
                onClick={onClose}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "md"
                }}
                transition="all 0.2s"
              >
                Yopish
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Services;