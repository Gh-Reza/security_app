import Services from './services/Services';
import Benefits from './benefits/Benefits';
import OurServices from './ourServices/OurServices';

export default function Content() {
  return (
    <main className="relative page_content">
      <Services />
      <Benefits />
      <OurServices />
    </main>
  );
}
