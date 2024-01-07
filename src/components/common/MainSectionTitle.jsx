import PropTypes from 'prop-types';

export default function MainSectionTitle({ title }) {
  return (
    <div className="text-center pb-[55px]">
      <h2 className="font-bold text-4xl leading-[42px] text-[#1d2736] pb-3 relative
                     before:absolute before:bottom-[1px] before:left-[50%]
                     before:w-[120px] before:h-[2px] before:bg-brand_color
                     before:translate-x-[-50%]
                     after:absolute after:bottom-0 after:left-[50%]
                     after:w-[20px] after:h-[4px] after:bg-[#333]
                     after:translate-x-[-50%]
                     capitalize
                    "
      >
        {title}
      </h2>
      <p className="max-w-[470px] mt-4 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
        eiusmod tempor incididunt ut labore
      </p>
    </div>
  );
}

MainSectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
