import React from 'react';
import Header from '../components/common/Header/index.js';
import HeroSection from '../components/HeroSection.js';
import ProductShowCase from '../components/ProductShowCase/index.js';
import FeelSpecial from '../components/FeelSpecial/index.js';

const HomePage = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <ProductShowCase />
    <FeelSpecial />
    </>
  )
}

export default HomePage