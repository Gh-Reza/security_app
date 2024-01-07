import Slider from 'react-slick';
import Card from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import service01 from '../../../../assets/images/services/service-01.jpg';

function SlidersCollection() {
  const cardCollectionInfo = [
    {
      img: service01,
      id: 1,
      title: 'Private Security',
      description:
        'Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid',
      link: '#',
    },
    {
      img: service01,
      id: 2,
      title: 'Private Security',
      description:
        'Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid',
      link: '#',
    },
    {
      img: service01,
      id: 3,
      title: 'Private Security',
      description:
        'Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid',
      link: '#',
    },
    {
      img: service01,
      id: 4,
      title: 'Private Security',
      description:
        'Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid',
      link: '#',
    },
    {
      img: service01,
      id: 5,
      title: 'Private Security',
      description:
        'Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid',
      link: '#',
    },
    {
      img: service01,
      id: 6,
      title: 'Private Security',
      description:
        'Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid',
      link: '#',
    },
    {
      img: service01,
      id: 7,
      title: 'Private Security',
      description:
        'Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid',
      link: '#',
    },
  ];

  const ajaxCards = cardCollectionInfo.map((card) => (
    <Card key={cardCollectionInfo.id} data={card} />
  ));

  return ajaxCards;
}

function Responsive() {
  const settings = {
    className: 'center',
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{SlidersCollection()}</Slider>
    </div>
  );
}

export default Responsive;
