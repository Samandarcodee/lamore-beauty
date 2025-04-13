import { useState } from 'react';
import axios from 'axios';
import {
  Box, Heading, FormControl, FormLabel, Input,
  Textarea, Button, Flex, Icon, Text,
  useToast, Modal, ModalOverlay, ModalContent,
  ModalHeader, ModalBody, ModalCloseButton,
  useBreakpointValue
} from '@chakra-ui/react';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaSpinner } from 'react-icons/fa';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const toast = useToast();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // So'rovni yuborishdan oldin formadagi barcha ma'lumotlarni tekshirish
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: 'To\'liq ma\'lumotlarni kiriting',
        description: 'Iltimos, barcha maydonlarni to\'ldiring.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: isMobile ? 'top' : 'bottom-right',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
          text: `📩Yangi buyurtma:\n👤Ism: ${formData.name}\n📞Telefon: ${formData.phone}\n📅Sana: ${formData.date}\n⏰Vaqt: ${formData.time}\n📝Qo'shimcha: ${formData.notes}`
        }
      );

      if (response.data.ok) {
        setIsSuccessModalOpen(true);
        setFormData({
          name: '',
          phone: '',
          date: '',
          time: '',
          notes: ''
        });
      } else {
        toast({
          title: 'Xatolik yuz berdi',
          description: 'Telegram serveriga xabar yuborishda xatolik yuz berdi.',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: isMobile ? 'top' : 'bottom-right',
        });
      }
    } catch (error) {
      console.error('Telegram API xatosi:', error);
      toast({
        title: 'Xatolik yuz berdi',
        description: "Yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: isMobile ? 'top' : 'bottom-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box id="appointment" py={{ base: 8, md: 12 }} px={{ base: 4, md: 0 }}>
      <Box maxW={{ base: 'full', md: 'container.md' }} mx="auto">
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
  );
};

export default BookingForm;
