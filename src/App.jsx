import React from 'react';
import GlobalBackground from './components/GlobalBackground';
import Hero from './components/Hero';
import MetricsValue from './components/MetricsValue';
import DataVisualization from './components/DataVisualization';
import SocialValidation from './components/SocialValidation';
import HumanData from './components/HumanData';
import Opportunities from './components/Opportunities';
import FinalMessage from './components/FinalMessage';

function App() {
  return (
    <div className="scroll-container">
      <GlobalBackground />
      <Hero />
      <MetricsValue />
      <DataVisualization />
      <SocialValidation />
      <HumanData />
      <Opportunities />
      <FinalMessage />
    </div>
  );
}

export default App;
