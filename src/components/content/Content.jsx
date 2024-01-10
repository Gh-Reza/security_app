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

export default function Content() {
  const ROUTES = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/services',
      element: <Services />,
    },
    {
      path: '/services-details',
      element: <ServicesDetails />,
    },
    {
      path: '/gallery',
      element: <Gallery />,
    },
    {
      path: '/blog',
      element: <Blog />,
    },
    {
      path: '/blog-details',
      element: <BlogDetails />,
    },
    {
      path: '/team',
      element: <Team />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ];

  return (
    <main className="relative page_content">
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </main>
  );
}
