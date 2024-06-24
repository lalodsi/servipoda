import React from 'react';
import '../styles/App.scss';
import CallToAction from './CallToAction';
import Services from './Services';

const App: React.FC = () => {
  return (
    <div className="App">
      <CallToAction />
      <Services />
    </div>
  );
};

export default App;
