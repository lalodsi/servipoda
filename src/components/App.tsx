import React from 'react';
import '../styles/App.scss';
import CallToActionSection from '../sections/CallToAction';
import ServicesSection from '../sections/Services';

const App: React.FC = () => {
  return (
    <div className="App">
      <CallToActionSection />
      <ServicesSection />
    </div>
  );
};

export default App;
