import { useState } from 'react'
import { 
  Box, Heading, Button, ButtonGroup, SimpleGrid, 
  Modal, ModalOverlay, ModalContent, ModalHeader, 
  ModalBody, ModalCloseButton, Image, Text, IconButton 
} from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Gallery = ({ detailed = false }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentCategory, setCurrentCategory] = useState('all')

  const galleryItems = [
    { id: 1, image: '/images/gallery1.jpg', title: 'Soch modeli #1', category: 'soch' },
    // ... boshqa rasmlar
  ]

  const filteredItems = currentCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === currentCategory)

  const openModal = (item) => setSelectedImage(item)
  const closeModal = () => setSelectedImage(null)

  const goToPrev = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex])
  }

  const goToNext = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex])
  }

  return (
    <Box id="gallery" py={12}>
      <Heading 
        as="h2" 
        size="xl" 
        fontFamily="heading" 
        textAlign="center" 
        color="brand.dark" 
        mb={6}
      >
        Bizning Ishlar
      </Heading>
      
      {detailed && (
        <ButtonGroup variant="outline" spacing="2" mb={8} justifyContent="center">
          {['all', 'soch', 'makiyaj', 'qoqlar', 'teri'].map((category) => (
            <Button
              key={category}
              onClick={() => setCurrentCategory(category)}
              colorScheme={currentCategory === category ? 'brand' : 'gray'}
              size="sm"
              px={4}
              rounded="full"
            >
              {category === 'all' && 'Hammasi'}
              {category === 'soch' && 'Soch'}
              {category === 'makiyaj' && 'Makiyaj'}
              {category === 'qoqlar' && "Qo'llar"}
              {category === 'teri' && 'Teri'}
            </Button>
          ))}
        </ButtonGroup>
      )}

      <SimpleGrid 
        columns={{ 
          base: 2, 
          md: detailed ? 3 : 3, 
          lg: detailed ? 4 : 3 
        }} 
        gap={4}
      >
        {filteredItems.map(item => (
          <Box 
            key={item.id} 
            position="relative" 
            cursor="pointer" 
            overflow="hidden" 
            rounded="lg"
            onClick={() => openModal(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              h={{ base: 48, md: 64 }}
              w="full"
              objectFit="cover"
              transition="transform 0.5s"
              _groupHover={{ transform: 'scale(1.1)' }}
            />
            <Box
              position="absolute"
              inset={0}
              bg="blackAlpha.400"
              display="flex"
              alignItems="center"
              justifyContent="center"
              opacity={0}
              _hover={{ opacity: 1 }}
              transition="opacity 0.3s"
            >
              <Text fontWeight="medium" color="white">{item.title}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Modal 
        isOpen={!!selectedImage} 
        onClose={closeModal} 
        size="full" 
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg="blackAlpha.900">
          <ModalHeader color="white">{selectedImage?.title}</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            position="relative"
          >
            <IconButton
              icon={<FaArrowLeft />}
              aria-label="Previous"
              position="absolute"
              left={4}
              onClick={goToPrev}
              colorScheme="whiteAlpha"
            />
            
            <Image 
              src={selectedImage?.image} 
              alt={selectedImage?.title} 
              maxH="90vh"
              maxW="full"
              objectFit="contain"
            />
            
            <IconButton
              icon={<FaArrowRight />}
              aria-label="Next"
              position="absolute"
              right={4}
              onClick={goToNext}
              colorScheme="whiteAlpha"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Gallery