import './App.css';
import React from 'react';
import HeroSection from './components/HeroSection';
import AdvantagesSection from './components/AdvantagesSection';
import ServiceSection from './components/ServiceSection';
import ContactForm from './components/ContactForm';
import Layout from './components/Layout';
import 'typeface-montserrat';
import FAQSection from './components/FAQSection';
import FloatingPhoneButton from './components/FloatingPhoneButton'; // Импортируем компонент

function App() {
  return (
    <div className="App">
      <Layout>
        <FloatingPhoneButton />
        <HeroSection />
        <AdvantagesSection />
        <ServiceSection />
        <FAQSection />
        <ContactForm />
      </Layout>
    </div>
  );
}

export default App;
