import CommonHero from '../hero/CommonHero';
import SideNav from '../navigation/SideNav';

export default function ServicesDetails() {
  return (
    <section className="bg-gray-50">
      <CommonHero text="Services Details" />
      <div>
        <SideNav />
      </div>
    </section>
  );
}
