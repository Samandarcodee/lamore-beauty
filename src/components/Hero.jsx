import {
  Box, Flex, Heading, Text, Button, Image,
  useBreakpointValue, Icon, useDisclosure,
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaPhone } from 'react-icons/fa'
import React from 'react'
import BookingForm from './BookingForm'

const MotionBox = motion(Box)
const MotionImage = motion(Image)

const Hero = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const headingSize = useBreakpointValue({ base: 'xl', md: '2xl', lg: '3xl' })

  return (
    <Box
      py={{ base: 8, md: 12, lg: 20 }}
      px={{ base: 4, md: 8 }}
      bgGradient="linear(to-r, #f9f5f0, #ffffff)"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        maxW="container.xl"
        mx="auto"
        gap={{ base: 8, md: 12 }}
      >
        {/* Content Section */}
        <Box flex={1} order={{ base: 2, md: 1 }} px={{ md: 4 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h1"
              size={headingSize}
              fontFamily="'Playfair Display', serif"
              fontWeight="600"
              color="#2d2d2d"
              mb={4}
              lineHeight="1.2"
              textShadow="0px 2px 4px rgba(0,0,0,0.1)"
            >
              Sizning go'zalligingiz - <Box as="span" color="#957151">bizning faxrimiz</Box>
            </Heading>

            <Text
              fontFamily="'Poppins', sans-serif"
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.700"
              mb={{ base: 6, md: 8 }}
              lineHeight="1.7"
              maxW={{ md: "90%" }}
            >
              LaMore go'zallik salonida siz professional mutaxassislar xizmatidan bahramand bo'lasiz.
              <br />
              Biz sizga eng yuqori sifat va <strong>zamonaviy usullarda</strong> xizmat ko'rsatamiz.
            </Text>
          </MotionBox>

          {/* Buttons Section */}
          <Flex gap={4} mt={8}>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                backgroundColor="#957151"
                color="white"
                size={{ base: 'md', md: 'lg' }}
                px={8}
                rounded="lg"
                boxShadow="0 4px 6px rgba(154, 107, 81, 0.3)"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(154, 107, 81, 0.4)',
                  bg: '#a57d5d'
                }}
                transition="all 0.3s ease"
                fontWeight="500"
                letterSpacing="0.5px"
                onClick={onOpen}
              >
                Online yozilish
              </Button>
            </MotionBox>

           
          </Flex>

          {/* Contact Info */}
          
        </Box>

        {/* Image Section */}
        {!isMobile && (
          <Box flex={1} order={{ base: 1, md: 2 }} position="relative">
            <Box
              position="absolute"
              w="120%"
              h="80%"
              bg="#f5ebe4"
              top="10%"
              left="-10%"
              zIndex="-1"
              borderRadius="3xl"
              boxShadow="lg"
            />
            <MotionImage
              src="../src/image/headerimg.png"
              alt="LaMore Beauty Salon"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              w="full"
              maxH={{ base: '300px', md: '500px' }}
              objectFit="cover"
              borderRadius="lg"
              boxShadow="xl"
            />
          </Box>
        )}
      </Flex>

      {/* BookingForm Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent maxW="container.sm" p={4}>
          <ModalHeader>Online yozilish</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BookingForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Hero
