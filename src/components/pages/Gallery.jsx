import CommonHero from '../hero/CommonHero';
import CommonButton from '../common/CommonBtn';

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: '/assets/images/services/service-01.jpg',
    },
    {
      id: 2,
      src: '/assets/images/services/service-02.jpg',
    },
    {
      id: 3,
      src: '/assets/images/services/service-03.jpg',
    },
    {
      id: 4,
      src: '/assets/images/services/service-04.jpg',
    },
    {
      id: 5,
      src: '/assets/images/services/service-05.jpg',
    },
    {
      id: 6,
      src: '/assets/images/services/service-06.jpg',
    },
  ];

  return (
    <div className="container mx-auto md:px-12">
      <CommonHero text="Gallery" />
      <div className="flex flex-wrap justify-center gap-4 pt-24 mx-auto md:w-2/3">
        <CommonButton text="ALL" link="" />
        <CommonButton text="BRAND" link="" />
        <CommonButton text="DESIGN" link="" />
        <CommonButton text="GRAPHIC" link="" />
      </div>
      <ul className="flex flex-col items-center justify-center gap-6 py-16 md:grid md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.src} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
