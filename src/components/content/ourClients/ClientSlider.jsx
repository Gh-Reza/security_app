import Slider from 'react-slick';
import ClientCard from './ClientCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cli01 from '../../../assets/images/clients/01.png';

function SliderCollection() {
  const ClientCollectionInfo = [
    {
      img: cli01,
      id: 1,
      name: 'Roshu JP',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicill elit, sed do eiusmo tempor incididunt ut labore etll dolore magna aliqua Ut enim.',
    },
    {
      img: cli01,
      id: 2,
      name: 'Roshu JP',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicill elit, sed do eiusmo tempor incididunt ut labore etll dolore magna aliqua Ut enim.',
    },
    {
      img: cli01,
      id: 3,
      name: 'Roshu JP',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicill elit, sed do eiusmo tempor incididunt ut labore etll dolore magna aliqua Ut enim.',
    },
    {
      img: cli01,
      id: 4,
      name: 'Roshu JP',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicill elit, sed do eiusmo tempor incididunt ut labore etll dolore magna aliqua Ut enim.',
    },
  ];

  const ajaxCards = ClientCollectionInfo.map((card) => (
    <ClientCard key={card.id} data={card} />
  ));

  return ajaxCards;
}

function Responsive() {
  const settings = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>{SliderCollection()}</Slider>
    </div>
  );
}

export default Responsive;
