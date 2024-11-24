import React from 'react';
import { Carousel } from 'antd';

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <Carousel autoplay effect="fade">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`slide-${index}`} style={{ width: '100%', height: 'auto' }} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
