import { useState } from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  IconButton,
  useBreakpointValue,
  Text
} from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Make sure these images exist in your public/images/gallery directory
  const galleryItems = [
    { id: 1, image: '/images/gallery/photo1.jpg', title: 'Salon Interior' },
    { id: 2, image: '/images/gallery/photo2.jpg', title: 'Hair Styling' },
    { id: 3, image: '/images/gallery/photo3.jpg', title: 'Makeup Service' },
    { id: 4, image: '/images/gallery/photo4.jpg', title: 'Nail Art' },
    { id: 5, image: '/images/gallery/photo5.jpg', title: 'Spa Treatment' },
    { id: 6, image: '/images/gallery/photo6.jpg', title: 'Facial Care' },
    { id: 7, image: '/images/gallery/photo7.jpg', title: 'Massage Therapy' },
    { id: 8, image: '/images/gallery/photo8.jpg', title: 'Hair Coloring' },
  ];

  const openModal = (item) => setSelectedImage(item);
  const closeModal = () => setSelectedImage(null);

  const goToPrev = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[prevIndex]);
  };

  const goToNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="gallery" py={{ base: 10, md: 16 }} px={{ base: 4, md: 8 }} bg="gray.50">
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        color="brand.500"
        mb={8}
        fontFamily="heading"
      >
        Bizning Ishlar
      </Heading>

      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
        {galleryItems.map((item) => (
          <Box
            key={item.id}
            position="relative"
            overflow="hidden"
            borderRadius="xl"
            boxShadow="md"
            cursor="pointer"
            onClick={() => openModal(item)}
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.03)' }}
          >
            <Image
              src={item.image}
              alt={item.title}
              objectFit="cover"
              width="100%"
              height={{ base: 48, md: 64 }}
              fallbackSrc="/images/placeholder.jpg"
              loading="lazy"
            />
            {item.title && (
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bgGradient="linear(to-t, blackAlpha.600, transparent)"
                p={3}
                color="white"
              >
                <Text fontSize="sm" fontWeight="semibold">
                  {item.title}
                </Text>
              </Box>
            )}
          </Box>
        ))}
      </SimpleGrid>

      <Modal 
        isOpen={!!selectedImage} 
        onClose={closeModal} 
        size="full" 
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="blackAlpha.800" maxW="100vw" maxH="100vh">
          <ModalHeader color="white" textAlign="center">
            {selectedImage?.title}
          </ModalHeader>
          <ModalCloseButton color="white" size="lg" />
          <ModalBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            h="80vh"
          >
            {!isMobile && (
              <IconButton
                icon={<FaArrowLeft size={24} />}
                aria-label="Previous image"
                position="absolute"
                left={4}
                onClick={goToPrev}
                colorScheme="whiteAlpha"
                size="lg"
                borderRadius="full"
                zIndex={1}
              />
            )}

            <Image
              src={selectedImage?.image}
              alt={selectedImage?.title || 'Gallery image'}
              maxH="80vh"
              maxW="100%"
              objectFit="contain"
              fallbackSrc="/images/placeholder.jpg"
            />

            {!isMobile && (
              <IconButton
                icon={<FaArrowRight size={24} />}
                aria-label="Next image"
                position="absolute"
                right={4}
                onClick={goToNext}
                colorScheme="whiteAlpha"
                size="lg"
                borderRadius="full"
                zIndex={1}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Gallery;