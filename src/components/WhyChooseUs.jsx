import { 
    Box, Grid, GridItem, Text, Heading, Circle, Stack, 
    useColorModeValue, keyframes 
  } from '@chakra-ui/react'
  import { 
    FaSpa, FaHandsHelping, FaLeaf, FaRegSmileBeam, 
    FaClock, FaHeart, FaRegLightbulb 
  } from 'react-icons/fa'
  
  const reasons = [
    {
      icon: FaSpa,
      title: "Uyatchan atmosfera va qulaylik",
      description: "Yoqimli, dam beruvchi muhit mijozlarga nafaqat tashqi ko'rinishini yaxshilash, balki stressni kamaytirish orqali umumiy holatini yaxshilashga yordam beradi."
    },
    {
      icon: FaHandsHelping,
      title: "Professional parvarish va shaxsiy yondashuv",
      description: "Mutaxassislar har bir mijozga individual yondashadi, mos protseduralarni taklif qiladi va maslahatlar beradi."
    },
    {
      icon: FaLeaf,
      title: "Hayot sifatini oshirish",
      description: "Massaj va SPA kabi muntazam parvarish jarayonlari qon aylanishini yaxshilaydi, stressni kamaytiradi va immunitetni mustahkamlaydi."
    },
    {
      icon: FaRegSmileBeam,
      title: "Emotsional muvozanat",
      description: "Meditatsiya va dam olish mashg'ulotlari hissiy barqarorlikni saqlashga va ichki tinchlikni tiklashga yordam beradi."
    },
    {
      icon: FaClock,
      title: "Uzoq muddatli natijalar",
      description: "Teri, soch va tana holatidagi estetik o'zgarishlar uzoq davom etuvchi ta'sir ko'rsatadi."
    },
    {
      icon: FaHeart,
      title: "Sodiqlik va ishonch",
      description: "Mijozlarga e'tiborli muhit ishonchli munosabatlar va doimiylikni yaratadi."
    },
    {
      icon: FaRegLightbulb,
      title: "Stressni kamaytirish va psixo-emotsional tiklanish",
      description: "Qulay parvarish muhitida tashqi go'zallik va ichki xotirjamlik uyg'unlashadi."
    }
  ]
  
  const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `
  
  const WhyChooseUsModern = () => {
    const accentColor = useColorModeValue('#B38B59', '#E2C08D')
    const animation = `${fadeIn} 0.8s ease forwards`
  
    return (
      <Box 
        bg="linear-gradient(175deg, #FEFCF9 0%, #F8F4EF 100%)" 
        py={{ base: 16, md: 28 }}
        px={{ base: 4, md: 6 }}
        position="relative"
        overflow="hidden"
      >
        {/* Dekorativ elementlar */}
        <Box
          position="absolute"
          top="-100px"
          left="-50px"
          w="300px"
          h="300px"
          bg={`${accentColor}10`}
          borderRadius="full"
          filter="blur(80px)"
        />
        
        <Box maxW="7xl" mx="auto" position="relative">
          <Heading
            as="h2"
            textAlign="center"
            mb={{ base: 12, md: 20 }}
            fontWeight="800"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            letterSpacing="tight"
            color="gray.800"
            fontFamily="Playfair Display, serif"
          >
            Nega bizni tanlashadi?
            <Text 
              as="span" 
              display="block" 
              fontSize={{ base: "md", md: "lg" }}
              mt={{ base: 3, md: 4 }}
              color="gray.500"
              fontWeight="500"
              maxW="2xl"
              mx="auto"
              lineHeight="1.5"
            >
              Professionalizm va qalbaki g'amxo'rlikning noyob uyg'unligi
            </Text>
          </Heading>
  
          <Grid 
            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} 
            gap={{ base: 8, md: 12, lg: 16 }}
          >
            {reasons.map((reason, idx) => (
              <GridItem 
                key={idx}
                _hover={{ 
                  transform: "translateY(-5px)",
                  "& .icon-circle": {
                    bg: `${accentColor}15`,
                    borderColor: accentColor
                  }
                }}
                transition="all 0.3s cubic-bezier(.25,.72,.51,.96)"
                animation={animation}
                style={{ animationDelay: `${idx * 0.1}s` }}
                opacity="0"
              >
                <Stack 
                  direction="row" 
                  spacing={{ base: 6, md: 8 }} 
                  align="flex-start"
                  p={{ base: 4, md: 6 }}
                  borderRadius="xl"
                  _hover={{
                    bg: `${accentColor}08`
                  }}
                >
                  <Circle
                    className="icon-circle"
                    size={{ base: "56px", md: "64px" }}
                    bg={`${accentColor}10`}
                    border={`2px solid ${accentColor}30`}
                    color={accentColor}
                    fontSize="2xl"
                    fontWeight="bold"
                    position="relative"
                    transition="all 0.3s ease"
                  >
                    <Box as={reason.icon} boxSize={{ base: 6, md: 7 }} />
                    <Circle
                      size={{ base: "24px", md: "28px" }}
                      bg={accentColor}
                      color="white"
                      position="absolute"
                      bottom={{ base: "-10px", md: "-12px" }}
                      right={{ base: "-10px", md: "-12px" }}
                      fontSize="sm"
                      boxShadow="md"
                      fontWeight="600"
                    >
                      {idx + 1}
                    </Circle>
                  </Circle>
                  
                  <Box flex={1}>
                    <Text 
                      fontWeight="700" 
                      fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                      mb={{ base: 2, md: 3 }}
                      color="gray.800"
                      lineHeight="1.2"
                    >
                      {reason.title}
                    </Text>
                    <Text 
                      fontSize={{ base: "sm", md: "md" }}
                      color="gray.600"
                      lineHeight={{ base: "1.6", md: "1.7" }}
                      pr={{ md: 4 }}
                    >
                      {reason.description}
                    </Text>
                  </Box>
                </Stack>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    )
  }
  
  export default WhyChooseUsModern