import PropTypes from 'prop-types';

export default function CommonButton({ text, link }) {
  return (
    <a
      className={`px-[30px] py-[10px] border
                      border-[#1d2736] rounded-[50px]
                      text-white inline-block text-center 
                      align-middle bg-[#1d2736]
                      hover:border-brand_color hover:bg-brand_color hover:text-white
                      transition-all ease-in duration-300
                      uppercase
                      `}
      href={link}
    >
      {text}
    </a>
  );
}

CommonButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
