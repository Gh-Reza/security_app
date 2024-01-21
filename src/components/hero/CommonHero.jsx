import PropTypes from 'prop-types';

export default function CommonHero({ text }) {
  return (
    <div className="h-[50vh] hero bg-hero bg-center hero-content flex justify-center items-center">
      <div className="space-y-3 text-center text-white ">
        <h3 className="mb-[10px] text-white text-[3rem]">
          {text}
        </h3>
        <p>
          Home
          /
          {' '}
          {text}
        </p>
      </div>
    </div>
  );
}

CommonHero.propTypes = {
  text: PropTypes.string.isRequired,
};
