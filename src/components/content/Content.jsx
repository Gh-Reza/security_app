import Services from './services/Services';
import Benefits from './benefits/Benefits';
import OurServices from './ourServices/OurServices';
import Quotation from './quotation/Quotation';
import OurClients from './ourClients/OurClients';

export default function Content() {
  return (
    <main className="relative page_content">
      <Services />
      <Benefits />
      <OurServices />
      <Quotation />
      <OurClients />
    </main>
  );
}
