import MainSectionTitle from '../../common/MainSectionTitle';
import ClientSlider from './ClientSlider';

export default function OurClients() {
  return (
    <section className="our_clients py-[90px]">
      <div className="container mx-auto md:px-12">
        <MainSectionTitle title="our clients says" />
        <div className="client_slider">
          <ClientSlider />
        </div>
      </div>
    </section>
  );
}
