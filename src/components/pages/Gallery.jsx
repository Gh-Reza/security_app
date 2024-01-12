import { motion } from 'framer-motion';
import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CommonHero from '../hero/CommonHero';
import CommonButton from '../common/CommonBtn';

export default function Gallery() {
  const allImages = [
    {
      id: 1,
      src: '/assets/images/services/service-01.jpg',
      tags: ['brand', 'design'],
    },
    {
      id: 2,
      src: '/assets/images/services/service-02.jpg',
      tags: ['brand', 'graphic'],
    },
    {
      id: 3,
      src: '/assets/images/services/service-03.jpg',
      tags: ['brand', 'design', 'graphic'],
    },
    {
      id: 4,
      src: '/assets/images/services/service-04.jpg',
      tags: ['graphic', 'design'],
    },
    {
      id: 5,
      src: '/assets/images/services/service-05.jpg',
      tags: ['brand'],
    },
    {
      id: 6,
      src: '/assets/images/services/service-06.jpg',
      tags: ['brand', 'design'],
    },
  ];

  const [images, setImages] = useState(allImages);

  const [isVisible, setIsVisible] = useState(false);

  const handleOnClick = (text) => {
    if (text === 'ALL') {
      setImages(allImages);
    } else {
      const filteredImages = allImages.filter((image) => image.tags.includes(text.toLowerCase()));
      setImages(filteredImages);
    }
  };

  const BUTTONS = [
    { text: 'ALL' },
    { text: 'BRAND' },
    { text: 'DESIGN' },
    { text: 'GRAPHIC' },
  ];

  return (
    <div className="container mx-auto md:px-12">
      <CommonHero text="Gallery" />
      <ul className="flex flex-wrap justify-center gap-4 pt-24 mx-auto md:w-2/3">
        {BUTTONS.map((btn) => (
          <li key={btn.text}>
            <CommonButton text={btn.text} onClick={handleOnClick} />
          </li>
        ))}
      </ul>
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
