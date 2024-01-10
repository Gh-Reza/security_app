// import icon1 from '../../../assets/images/icon/c-01.png';
import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function ProjectCount() {
  const STATISTICS = [
    {
      id: 1,
      icon: './assets/icon/fun-01.png',
      count: 100,
      text: 'Happy Clients',
    },
    {
      id: 2,
      icon: './assets/icon/fun-02.png',
      count: 200,
      text: 'Awards Winning',
    },
    {
      id: 3,
      icon: './assets/icon/fun-03.png',
      count: 300,
      text: 'Projects',
    },
    {
      id: 4,
      icon: './assets/icon/fun-04.png',
      count: 400,
      text: 'Cups of Coffee',
    },
  ];

  const [hasViewed, setHasViewed] = useState(false);

  return (
    <section className="relative py-24 bg-black bg-commonHero project_count_section">
      <div className="black-overlay">
        <div className="container relative md:px-12">
          <ul className="flex text-white justify-evenly">
            {STATISTICS.map((item) => (
              <li key={item.id} className="z-20 flex flex-col justify-center space-y-2 text-center custom_underline after:mt-2">
                <div className="flex justify-center">
                  <img src={item.icon} alt={item.text} className="" />
                </div>
                {/* <p className="text-4xl font-bold">{item.count}</p> */}
                <CountUp start={0} end={item.count} duration={3}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor
                      active={!hasViewed}
                      onChange={(isVisible) => {
                        if (isVisible && !hasViewed) {
                          start();
                          setHasViewed(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="text-3xl font-bold" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p className="text-lg font-semibold">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
