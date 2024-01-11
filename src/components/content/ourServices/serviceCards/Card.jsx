import PropTypes from 'prop-types';

export default function Card({ data }) {
  return (
    <div className="service_card_wrapper">
      <div className="px-4 mb-[30px]">
        <div className="transition-shadow duration-500 hover:shadow-md hover:shadow-gray-200">
          <div className="thumb">
            {/* FIXME: href value */}
            <a href="https" className="block">
              <img className="w-full" src={data.img} alt="service img" />
            </a>
          </div>
          <div className="content py-[30px]
                          px-[20px] text-center
                          text-[#575757]
                          bg-white
                        "
          >
            <h4 className="mb-[13px] px-[9px] font-semibold
                        hover:text-brand_color transition-all duration-[0.5s]
                          "
            >
              <a href={data.link}>{ data.title }</a>
            </h4>
            <p className="text-[#818181] text-[14px] mb-2">
              { data.description }
            </p>
            <a
              href={data.link}
              className="px-[42px] py-3 font-semibold
                                  hover:text-brand_color
                                  transition-all duration-[0.5s]
                                  "
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
