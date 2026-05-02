import React from 'react';
import Navbar from './components/Navbar';
import GlobalBackground from './components/GlobalBackground';
import SystemConnections from './components/SystemConnections';
import Hero from './components/Hero';
import GuidedWalkthrough from './components/GuidedWalkthrough';
import SystemWalkthrough from './components/SystemWalkthrough';
import SystemPreview from './components/SystemPreview';
import ValueConversionFlow from './components/ValueConversionFlow';
import ValueSimulator from './components/ValueSimulator';
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
      <SystemConnections />
      <Navbar />
      <Hero />
      <GuidedWalkthrough />
      <SystemWalkthrough />
      <SystemPreview />
      <ValueConversionFlow />
      <MetricsValue />
      <ValueSimulator />
      <DataVisualization />
      <SocialValidation />
      <HumanData />
      <Opportunities />
      <FinalMessage />
    </div>
  );
}

export default App;
