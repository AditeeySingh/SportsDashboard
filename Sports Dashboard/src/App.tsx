import React from 'react';
import HeroSection from './components/HeroSection';
import LiveScores from './components/LiveScores';
import StatsPreview from './components/StatsPreview';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <LiveScores />
      <StatsPreview />
    </div>
  );
}

export default App;