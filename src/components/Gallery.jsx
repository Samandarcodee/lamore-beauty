import { useState } from 'react'
import {
  Box, Heading, SimpleGrid, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalBody, ModalCloseButton, Image, Text, IconButton, useBreakpointValue
} from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    { id: 1, image: './src/image/Galery/photo (1).jpg', title: '' },
    { id: 2, image: './src/image/Galery/photo (2).jpg', title: '' },
    { id: 3, image: './src/image/Galery/photo (3).jpg', title: '' },
    { id: 4, image: './src/image/Galery/photo (4).jpg', title: '' },
    { id: 5, image: './src/image/Galery/photo (5).jpg', title: '' },
    { id: 6, image: './src/image/Galery/photo (7).jpg', title: '' },
    { id: 6, image: './src/image/Galery/photo (8).jpg', title: '' },
    { id: 6, image: './src/image/Galery/photo (9).jpg', title: '' },


    // Yana rasmlar qo‘shishingiz mumkin
  ]

  const openModal = (item) => setSelectedImage(item)  
  const closeModal = () => setSelectedImage(null)

  const goToPrev = () => {
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setSelectedImage(galleryItems[prevIndex])
  }

  const goToNext = () => {
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % galleryItems.length
    setSelectedImage(galleryItems[nextIndex])
  }

  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box id="gallery" py={{ base: 10, md: 16 }} px={{ base: 4, md: 8 }} bg="gray.50">
      <Heading
        as="h2"
        size="xl"
        fontFamily="heading"
        textAlign="center"
        color="brand.500"
        mb={8}
      >
        Bizning Ishlar
      </Heading>

      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
        {galleryItems.map((item) => (
          <Box
            key={item.id}
            position="relative"
            overflow="hidden"
            rounded="2xl"
            boxShadow="md"
            cursor="pointer"
            onClick={() => openModal(item)}
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.03)', boxShadow: 'lg' }}
          >
            <Image
              src={item.image}
              alt={item.title}
              objectFit="cover"
              w="full"
              h={{ base: 48, md: 64 }}
              transition="all 0.3s ease"
            />
            <Box
              position="absolute"
              bottom="0"
              w="full"
              bgGradient="linear(to-t, rgba(0,0,0,0.6), transparent)"
              p={3}
              color="white"
              fontWeight="semibold"
              fontSize="sm"
            >
              {item.title}
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={!!selectedImage} onClose={closeModal} size="full" motionPreset="scale">
        <ModalOverlay />
        <ModalContent bg="blackAlpha.900">
          <ModalHeader color="white" fontSize="xl" textAlign="center">
            {selectedImage?.title}
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            px={0}
          >
            {!isMobile && (
              <IconButton
                icon={<FaArrowLeft />}
                aria-label="Previous"
                position="absolute"
                left={4}
                onClick={goToPrev}
                colorScheme="whiteAlpha"
              />
            )}

            <Image
              src={selectedImage?.image}
              alt={selectedImage?.title}
              maxH="90vh"
              maxW="full"
              objectFit="contain"
              borderRadius="md"
              shadow="lg"
            />

            {!isMobile && (
              <IconButton
                icon={<FaArrowRight />}
                aria-label="Next"
                position="absolute"
                right={4}
                onClick={goToNext}
                colorScheme="whiteAlpha"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Gallery
