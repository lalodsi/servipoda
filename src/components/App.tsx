import React from 'react';
import '../styles/App.scss';
import CallToActionSection from '../sections/CallToAction';
import ServicesSection from '../sections/Services';
import BoxMessageSection from '../sections/BoxMessage';

const App: React.FC = () => {
  return (
    <div className="App">
      <CallToActionSection />
      <ServicesSection />
      <BoxMessageSection />
    </div>
  );
};

export default App;
