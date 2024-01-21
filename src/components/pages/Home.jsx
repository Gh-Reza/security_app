// import Services from './services/Services';
// import Benefits from './benefits/Benefits';
// import OurServices from './ourServices/OurServices';
// import Quotation from './quotation/Quotation';
// import OurClients from './ourClients/OurClients';
// import Blogs from './blog/Blogs';
// import Hero from '../hero/Hero';

import Services from '../content/services/Services';
import Benefits from '../content/benefits/Benefits';
import OurServices from '../content/ourServices/OurServices';
import Quotation from '../content/quotation/Quotation';
import OurClients from '../content/ourClients/OurClients';
import Blogs from '../content/blog/Blogs';
import Hero from '../hero/Hero';

export default function Home() {
  return (
    <main className="relative page_content">
      <Hero />
      <Services />
      <Benefits />
      <OurServices />
      <Quotation />
      <OurClients />
      <Blogs />
    </main>
  );
}
