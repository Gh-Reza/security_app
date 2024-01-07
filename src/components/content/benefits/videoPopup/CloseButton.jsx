import { CgClose } from 'react-icons/cg';
import PropTypes from 'prop-types';

export default function CloseButton({ e }) {
  return (
    <button
      type="button"
      className="w-full text-right text-[28px] text-white
                      opacity-70
                      flex
                      justify-end
                      "
      onClick={e}
      aria-label="close video"
    >
      <CgClose />
    </button>
  );
}

CloseButton.propTypes = {
  e: PropTypes.func.isRequired,
};
