import React from 'react';
import { Carousel } from 'react-responsive-carousel';

interface CarouselItem {
  key: number;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
}

const CustomCarousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Carousel>
      {items.map((item) => (
        <div key={item.key}>{item.content}</div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
