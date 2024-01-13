import ProjectCountElem from './ProjectCountElem';

export default function ProjectCount() {
  const statistics = [
    {
      id: 1,
      icon: './assets/icon/fun-01.png',
      count: 100,
      text: 'Happy Clients',
    },
    {
      id: 2,
      icon: './assets/icon/fun-02.png',
      count: 200,
      text: 'Awards Winning',
    },
    {
      id: 3,
      icon: './assets/icon/fun-03.png',
      count: 300,
      text: 'Projects',
    },
    {
      id: 4,
      icon: './assets/icon/fun-04.png',
      count: 400,
      text: 'Cups of Coffee',
    },
  ];

  return (
    <section className="relative py-24 bg-black bg-projectCounter project_count_section">
      <div className="black-overlay">
        <div className="container relative md:px-12">
          <ul className="flex flex-col text-white gap-y-12 md:flex-row justify-evenly">
            {statistics.map((item) => (
              <li key={item.id} className="z-20 flex flex-col justify-center space-y-2 text-center custom_underline after:mt-2">
                <ProjectCountElem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
