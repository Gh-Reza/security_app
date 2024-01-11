import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CommonHero from '../hero/CommonHero';
import { motion } from 'framer-motion';
import CommonButton from '../common/CommonBtn';

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: '/assets/images/services/service-01.jpg',
    },
    {
      id: 2,
      src: '/assets/images/services/service-02.jpg',
    },
    {
      id: 3,
      src: '/assets/images/services/service-03.jpg',
    },
    {
      id: 4,
      src: '/assets/images/services/service-04.jpg',
    },
    {
      id: 5,
      src: '/assets/images/services/service-05.jpg',
    },
    {
      id: 6,
      src: '/assets/images/services/service-06.jpg',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container mx-auto md:px-12">
      <CommonHero text="Gallery" />
      <div className="flex flex-wrap justify-center gap-4 pt-24 mx-auto md:w-2/3">
        <CommonButton text="ALL" link="" />
        <CommonButton text="BRAND" link="" />
        <CommonButton text="DESIGN" link="" />
        <CommonButton text="GRAPHIC" link="" />
      </div>
      <ul className="flex flex-col items-center justify-center gap-6 py-16 transition-all duration-500 ease-in-out md:grid md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <li key={image.id}>
            <VisibilitySensor
              partialVisibility
              onChange={(isVisible) => {
                if (isVisible) {
                  setIsVisible(true);
                }
              }}
            >
              <motion.img
                src={image.src}
                alt=""
                animate={isVisible ? {
                  scale: [1, 1.2, 1],
                  translateX: ['0%', '10%', '0%'],
                  translateY: ['0%', '5%', '0%'],
                  opacity: [0, 0.5, 1],
                } : {}}
                transition={{
                  duration: Math.random() * 2,
                  loop: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </VisibilitySensor>
          </li>
        ))}
      </ul>
    </div>
  );
}
