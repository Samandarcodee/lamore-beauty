import { Box, Heading, Text, Flex, List, ListItem, Icon, Grid, GridItem } from '@chakra-ui/react'
import { FaCheck, FaClock, FaPhone } from 'react-icons/fa'
import BookingForm from './BookingForm'

const DentalHealth = () => {
  return (
    <Box py={12} bg="#FAF0EA">
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        maxW="container.xl"
        mx="auto"
        px={4}
        gap={8}
      >
        {/* Left Column - Booking Form */}
        <GridItem>
          <BookingForm />
        </GridItem>

        {/* Right Column - Working Hours */}
        <GridItem>
          <Box bg="white" p={6} rounded="lg" shadow="md" height="100%">
            <Heading as="h3" size="lg" mb={6} color="brand.800">
              Ish Vaqtlari
            </Heading>
            
            <List spacing={4}>
              {[
                { days: 'Dushanba - Chorshanba', hours: '8:00 - 19:00' },
                { days: 'Payshanba - Juma', hours: '8:00 - 18:00' },
                { days: 'Shanba', hours: '9:00 - 17:00' },
                { days: 'Yakshanba', hours: 'Dam olish kuni' },
              ].map((item, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  <Icon 
                    as={item.hours === 'Dam olish kuni' ? FaClock : FaCheck} 
                    color={item.hours === 'Dam olish kuni' ? 'gray.400' : 'brand.500'} 
                    mr={3} 
                  />
                  <Box>
                    <Text fontWeight="medium">{item.days}</Text>
                    <Text 
                      color={item.hours === 'Dam olish kuni' ? 'gray.500' : 'brand.700'} 
                      fontWeight="semibold"
                    >
                      {item.hours}
                    </Text>
                  </Box>
                </ListItem>
              ))}
            </List>
            
            <Flex mt={8} align="center">
              <Icon as={FaPhone} color="brand.500" mr={3} />
              <Text fontSize="lg" fontWeight="bold" color="brand.800">
                Biz bilan bog'laning: (90) 123-45-67
              </Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default DentalHealth