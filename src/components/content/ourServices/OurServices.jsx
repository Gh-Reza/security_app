import CardsSlider from './serviceCards/CardsSlider';
import MainSectionTitle from '../../common/MainSectionTitle';

export default function OurServices() {
  return (
    <section className="bg-[#f8f8f8]
                        pt-[120px] pb-[90px]
                       "
    >
      <div className="container mx-auto">
        <div className="wrapper">
          <MainSectionTitle title="Our Services" />
          <CardsSlider />
        </div>
      </div>
    </section>
  );
}
