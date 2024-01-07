import PropTypes from 'prop-types';
import service01 from '../../assets/images/icon/service-01.png';
import service02 from '../../assets/images/icon/service-02.png';
import service03 from '../../assets/images/icon/service-03.png';
import service04 from '../../assets/images/icon/service-04.png';

function ServiceCard({
  img, title, info, i,
}) {
  const bgColor = i % 2 === 0 || i === 0 ? 'bg-[rgb(247,247,247)]' : 'bg-[rgb(237,237,237)]';
  return (
    <div className="w-full service_card sm:w-1/2 lg:w-3/12">
      <div className={`bg_wrapper ${bgColor} h-[100%]`}>
        <div
          className="py-[39px]
                          px-[15px] sm:py-[29px]
                          lg:py-[30px] lg:px-[20px]
                          "
        >
          <div className="icons w-auto max-w-[60px] float-left mr-6">
            <img className="max-w-full" src={img} alt="Service-01" />
          </div>
          <div className="content text-[rgb(95,95,95)] overflow-hidden">
            <h4 className="mb-2 text-lg font-semibold capitalize">{title}</h4>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const servicesDetails = [
    {
      img: service01,
      id: 1,
      title: 'webcam security',
      info: 'Access complete visability through your phone or device. We provide a complete range of security solutions, day and night vision to improve security &amp; enhance capabilities.',
    },
    {
      img: service02,
      id: 2,
      title: 'security guard',
      info: 'Alarm services to suit the right environment. From wired to wireless systems, Remote Monitored and Intergrating systems. We Instal all alarms to suit the need of the location.',
    },
    {
      img: service03,
      id: 3,
      title: 'motivated guards',
      info: 'Combining identification technology with security solutions to give you a high level of protection, whether your business has a single or muliti-site entry points.',
    },
    {
      img: service04,
      id: 4,
      title: '24/7 services',
      info: 'We offer &amp; manage ongoing maintenance of your security systems. Keeping it working as it should be and keeping up with improvements that can be made.',
    },
  ];
  return (
    <div className="services">
      <div className="flex flex-wrap">
        {servicesDetails.map((service, k) => (
          <ServiceCard
            key={service.id}
            img={service.img}
            title={service.title}
            info={service.info}
            i={k}
          />
        ))}
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};
