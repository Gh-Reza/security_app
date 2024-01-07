import PropTypes from 'prop-types';

export default function CloseButton({ e }) {
  return (
    <button
      type="button"
      className="w-full text-right text-[28px] text-white
                      opacity-70
                      "
      onClick={e}
    >
      x
    </button>
  );
}

CloseButton.propTypes = {
  e: PropTypes.func.isRequired,
};
