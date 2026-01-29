
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import FeaturedDishes from './components/FeaturedDishes';
import DailyMenu from './components/DailyMenu';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <History />
        <FeaturedDishes />
        <DailyMenu />
        <Reviews />
      </main>
      <Footer />
      <Assistant />
    </div>
  );
};

export default App;
