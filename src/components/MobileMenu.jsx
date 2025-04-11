import { 
    Box, Drawer, DrawerOverlay, DrawerContent, 
    DrawerCloseButton, DrawerHeader, VStack, 
    Button, Icon 
  } from '@chakra-ui/react'
  import { FaHome, FaCut, FaImages, FaCalendarAlt, FaPhone } from 'react-icons/fa'
  
  const iconMap = {
    home: FaHome,
    services: FaCut,
    gallery: FaImages,
    appointment: FaCalendarAlt,
    contact: FaPhone,
  }
  
  const MobileMenu = ({ isOpen, onClose, tabs, setActiveTab }) => {
    return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menyu</DrawerHeader>
          <VStack spacing={4} p={4} align="stretch">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                leftIcon={<Icon as={iconMap[tab.id]} />}
                variant="ghost"
                justifyContent="flex-start"
                onClick={() => {
                  setActiveTab(tab.id)
                  onClose()
                }}
              >
                {tab.label}
              </Button>
            ))}
          </VStack>
        </DrawerContent>
      </Drawer>
    )
  }
  
  export default MobileMenu