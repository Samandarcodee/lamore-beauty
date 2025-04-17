import { 
  Box, Grid, GridItem, Text, Heading, Circle, Stack, 
  useColorModeValue, keyframes, useBreakpointValue 
} from '@chakra-ui/react';
import { 
  FaSpa, FaHandsHelping, FaLeaf, FaRegSmileBeam, 
  FaClock, FaHeart, FaRegLightbulb 
} from 'react-icons/fa';

const reasons = [
  {
    icon: FaSpa,
    title: "Yoqimli atmosfera va qulaylik",
    description: "Yoqimli va dam beruvchi muhit, mijozlarga nafaqat tashqi ko'rinishini yaxshilash, balki stressni kamaytirish orqali umumiy holatini yaxshilashga yordam beradi."
  },
  {
    icon: FaHandsHelping,
    title: "Professional parvarish va shaxsiy yondashuv",
    description: "Mutaxassislar har bir mijozga individual yondashadi, ularning ehtiyojlariga mos xizmatlarni taklif qiladi va professional maslahatlar beradi."
  },
  {
    icon: FaLeaf,
    title: "Hayot sifatini oshirish",
    description: "Massaj va SPA kabi muntazam parvarish jarayonlari qon aylanishini yaxshilaydi, stressni kamaytiradi va immunitetni mustahkamlaydi."
  },
  {
    icon: FaRegSmileBeam,
    title: "Emotsional muvozanat",
    description: "Meditatsiya va dam olish mashg'ulotlari yordamida hissiy barqarorlikni saqlashga va ichki tinchlikni tiklashga yordam beradi."
  },
  {
    icon: FaClock,
    title: "Uzoq muddatli natijalar",
    description: "Teri, soch va tana holatidagi estetik o'zgarishlar uzoq muddatli ta'sir ko'rsatadi va chiroyli natijalarni taqdim etadi."
  },
  {
    icon: FaHeart,
    title: "Sodiqlik va ishonch",
    description: "Mijozlarga e'tiborli muhit ishonchli munosabatlar va doimiy sodiqlikni yaratadi."
  },
  {
    icon: FaRegLightbulb,
    title: "Stressni kamaytirish va psixo-emotsional tiklanish",
    description: "Qulay parvarish muhitida tashqi go'zallik va ichki xotirjamlik uyg'unlashadi, natijada umumiy farovonlik yaxshilanadi."
  }
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const WhyChooseUsModern = () => {
  const accentColor = useColorModeValue('#957151', '#3A4330');
  const animation = `${fadeIn} 0.8s ease forwards`;
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box 
      bg="linear-gradient(175deg, #FEFCF9 0%, #F8F4EF 100%)" 
      py={{ base: 12, md: 20, lg: 28 }}
      px={{ base: 4, sm: 6, md: 8 }}
      position="relative"
      overflow="hidden"
    >
      {/* Dekorativ elementlar */}
      <Box
        position="absolute"
        top="-100px"
        left="-50px"
        w={{ base: '200px', md: '300px' }}
        h={{ base: '200px', md: '300px' }}
        bg={`${accentColor}10`}
        borderRadius="full"
        filter="blur(80px)"
      />
      
      <Box maxW="7xl" mx="auto" position="relative" px={{ base: 0, md: 4 }}>
        <Heading
          as="h2"
          textAlign="center"
          mb={{ base: 8, sm: 12, md: 16, lg: 20 }}
          fontWeight="800"
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
          letterSpacing="tight"
          color="#545C4D"
          fontFamily="Playfair Display, serif"
          px={{ base: 2, md: 0 }}
        >
          Nega bizni tanlashadi?
          <Text 
            as="span" 
            display="block" 
            fontSize={{ base: 'md', sm: 'lg', md: 'xl', lg: '25px' }}
            mt={{ base: 2, sm: 3, md: 4 }}
            color="gray.500"
            fontWeight="400"
            maxW="5xl"
            mx="auto"
            lineHeight={{ base: '1.5', md: '1.7' }}
            fontFamily="Mea Culpa, cursive"
          >
            "Professionalizm va samimiy g'amxo'rlikning mukammal uyg'unligi"
          </Text>
        </Heading>

        <Grid 
          templateColumns={{ 
            base: "1fr", 
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)" 
          }} 
          gap={{ base: 6, sm: 8, md: 10, lg: 12 }}
          px={{ base: 2, md: 0 }}
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
                spacing={{ base: 4, sm: 6, md: 8 }} 
                align="flex-start"
                p={{ base: 3, sm: 4, md: 5, lg: 6 }}
                borderRadius="xl"
                _hover={{
                  bg: `${accentColor}08`
                }}
              >
                <Circle
                  className="icon-circle"
                  size={{ base: "48px", sm: "56px", md: "60px", lg: "64px" }}
                  bg={`${accentColor}10`}
                  border={`2px solid ${accentColor}30`}
                  color={accentColor}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  position="relative"
                  transition="all 0.3s ease"
                >
                  <Box as={reason.icon} boxSize={{ base: 5, sm: 6, md: 7 }} />
                  <Circle
                    size={{ base: "20px", sm: "24px", md: "28px" }}
                    bg={accentColor}
                    color="white"
                    position="absolute"
                    bottom={{ base: "-8px", sm: "-10px", md: "-12px" }}
                    right={{ base: "-8px", sm: "-10px", md: "-12px" }}
                    fontSize={{ base: "xs", sm: "sm" }}
                    boxShadow="md"
                    fontWeight="600"
                  >
                    {idx + 1}
                  </Circle>
                </Circle>
                
                <Box flex={1}>
                  <Text 
                    fontWeight="700" 
                    fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
                    mb={{ base: 1, sm: 2, md: 3 }}
                    color="#3A4330"
                    lineHeight={{ base: "1.3", md: "1.2" }}
                  >
                    {reason.title}
                  </Text>
                  <Text 
                    fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                    color="#545C4D"
                    lineHeight={{ base: "1.5", md: "1.6", lg: "1.7" }}
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
  );
};

export default WhyChooseUsModern;