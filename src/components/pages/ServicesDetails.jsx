import CommonHero from '../hero/CommonHero';
import SideNav from '../navigation/SideNav';
import ServiceDetails from '../content/services/ServicesDetails';

export default function ServicesDetails() {
  return (
    <section className="bg-gray-50">
      <CommonHero text="Services Details" />
      <div className="container py-24 md:px-12">
        <div className="flex flex-col space-y-5 md:flex-row">
          <SideNav />
          <ServiceDetails />
        </div>
      </div>
    </section>
  );
}
