import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServicesDetails from '../pages/ServicesDetails';
import Gallery from '../pages/Gallery';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import ServiceDetails from './services/ServicesDetails';

export default function Content() {
  return (
    <main className="relative page_content">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services-details" element={<ServicesDetails />}>
          <Route index element={<ServiceDetails title="Private Security" />} />
          <Route path="transport-security" element={<ServiceDetails title="Transport Security" />} />
          <Route path="home-security" element={<ServiceDetails title="Home Security" />} />
          <Route path="self-security" element={<ServiceDetails title="Self Security" />} />
        </Route>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
