import PropTypes from 'prop-types';

export default function Player({ link }) {
  return (
    <div className="relative popup-content z-[10004] w-full">
      <div className="pt-[56.25%]">
        <iframe
          title="video"
          className="absolute top-0 left-0 w-full h-full
                          shadow-[0_0_8px_rgba(0,0,0,0.6)]
                          border-none outline-none
                          "
          src={link}
          allowFullScreen
        />
      </div>
    </div>
  );
}

Player.propTypes = {
  link: PropTypes.string.isRequired,
};
