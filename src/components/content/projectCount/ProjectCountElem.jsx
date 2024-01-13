import PropTypes from 'prop-types';
import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function ProjectCountElem({ item }) {
  const [hasViewed, setHasViewed] = useState(false);

  return (
    <div>
      <div className="flex justify-center">
        <img src={item.icon} alt={item.text} className="" />
      </div>
      <CountUp start={0} end={item.count} duration={3}>
        {({ countUpRef, start }) => (
          <VisibilitySensor
            active={!item.hasViewed}
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
    </div>
  );
}

ProjectCountElem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    hasViewed: PropTypes.bool.isRequired,
  }).isRequired,
};
