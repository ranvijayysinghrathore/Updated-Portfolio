import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import "./App.css";
import Layout from './Layout';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Work from './components/work/Work';
import InfoSection from './InfoSection';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import About from './components/about/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="work" element={<Work />} />
      <Route path="skills" element={<Skills />} />
      <Route path="services" element={<Services />} />
      <Route path="qualification" element={<Qualification />} />
      <Route path="about" element={<About />} />
      <Route path="info" element={<InfoSection />} /> {/* Route for InfoSection */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
