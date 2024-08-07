import React from 'react';
import '../styles/App.scss';
import CallToActionSection from '../sections/CallToAction';
import ServicesSection from '../sections/Services';
import BoxMessageSection from '../sections/BoxMessage';
import NavbarComponent from '../components/NavbarComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <CallToActionSection />
      <ServicesSection />
      <BoxMessageSection />
    </div>
  );
};

export default App;
