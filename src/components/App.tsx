import React from 'react';
import '../styles/App.scss';
import CallToActionSection from '../sections/CallToAction';
import ServicesSection from '../sections/Services';
import BoxMessageSection from '../sections/BoxMessage';
import NavbarComponent from '../components/NavbarComponent';
import Timeline from '../sections/Timeline';
import Questions from '../sections/Questions';
import ContactSection from '../sections/Contact';

const message1 = "Ofrecemos personal calificado y tecnología adecuada para reducir costos y tiempos, garantizando un servicio eficiente y confiable."
const message2 = "Nota: Certificados ante Sedena (Secretaría de Desarrollo Ambiental)"


const App: React.FC = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <CallToActionSection />
      <ServicesSection />
      <BoxMessageSection message={message1} />
      <Timeline />
      <BoxMessageSection message={message2} />
      <Questions />
      <ContactSection />
    </div>
  );
};

export default App;
