import CommonHero from '../hero/CommonHero';
import service01 from '../../assets/images/services/service-01.jpg';
import Card from '../content/ourServices/serviceCards/Card';
import MainSectionTitle from '../common/MainSectionTitle';

export default function Services() {
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

  return (
    <section className="bg-gray-50">
      <CommonHero text="Services" />
      <div className="container py-24 wrapper md:px-12">
        <MainSectionTitle title="Our Services" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {cardCollectionInfo.map((card) => (
            <Card data={card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
