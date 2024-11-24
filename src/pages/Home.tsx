import React from 'react';
import Slider from '../components/ui/Slider';
import ProductList from './product/ProductList';

const Home: React.FC = () => {
  const sliderImages = ['/images/banner1.jpg', '/images/banner2.jpg']; // Add your banner images here

  return (
    <div>
      <Slider images={sliderImages} />
      <ProductList />
    </div>
  );
};

export default Home;
