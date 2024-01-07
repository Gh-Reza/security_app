import PropTypes from 'prop-types';

export default function FtTitle({ normal, highlight }) {
  return (
    <h5 className="ft_title uppercase text-[#1d2736] font-semibold text-lg mb-2">
      {normal}
      <span className="text-brand_color">{highlight}</span>
    </h5>
  );
}

FtTitle.propTypes = {
  normal: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
};
