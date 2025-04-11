import { useState } from 'react'
import { Box, ChakraProvider, Grid } from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero'
import DentalHealth from './components/DentalHealth'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import AppointmentForm from './components/AppointmentForm'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'
import WhyChooseUs from './components/WhyChooseUs'
import theme from './theme'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="cream.50">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <Box as="main" maxW="container.xl" mx="auto" px={{ base: 4, md: 6 }} py={8}>
          {activeTab === 'home' && (
            <Grid templateRows="auto auto auto auto" gap={12}>
              <Hero />
              < WhyChooseUs />
              <DentalHealth />
              <Services />
              <Gallery />
              <Testimonials />
            </Grid>
          )}
          
          {activeTab === 'services' && <Services detailed />}
          {activeTab === 'gallery' && <Gallery detailed />}
          {activeTab === 'appointment' && <AppointmentForm />}
          {activeTab === 'contact' && <ContactInfo />}
        </Box>
        
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App