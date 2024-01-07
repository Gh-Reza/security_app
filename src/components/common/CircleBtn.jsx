import PropTypes from 'prop-types';

export default function CircleBtn({ text, link }) {
  return (
    <a
      className={`px-[30px] py-[10px] border
                      border-brand_color rounded-[50px]
                      text-white inline-block text-center 
                      align-middle bg-brand_color
                      hover:border-[#1d2736] hover:bg-[#1d2736] hover:text-white
                      transition-all ease-in duration-300
                      uppercase
                      `}
      href={link}
    >
      {text}
    </a>
  );
}

CircleBtn.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
