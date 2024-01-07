import PropTypes from 'prop-types';

function ClientInfo({ comment, name }) {
  return (
    <div className="client_info">
      <p className="client_comment max-w-[90%] text-justify">{comment}</p>
      <div
        className="relative pl-[50px] mt-[20px] leading-7
                      before:absolute before:bg-[#383838] before:h-[2px]
                      before:w-[30px] before:left-0 before:top-1
                     "
      >
        <h4 className="cl_name uppercase font-semibold text-[#383838]">
          {name}
        </h4>
        <span className="capitalize">customer</span>
      </div>
    </div>
  );
}

export default function ClientCard({ data }) {
  return (
    <div className="wrapper px-[30px] py-[40px] m-[10px] shadow-[0_0_10px_rgba(0,0,0,0.1)] mb-8">
      <div className="float-left mr-[20px]">
        <img
          className="max-w-full border-2 rounded-full border-brand_color "
          src={data.img}
          alt="Client profile"
        />
      </div>
      <div className="content_client overflow-hidden text-[#3e3e3e]">
        <ClientInfo comment={data.comment} name={data.name} />
      </div>
    </div>
  );
}

ClientInfo.propTypes = {
  comment: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ClientCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
