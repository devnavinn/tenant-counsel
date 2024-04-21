import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./pages/Home'));
const TenantRight = React.lazy(() => import('./pages/TenantRight/TenantRight'));
const ResourcesAndNews = React.lazy(() => import('./pages/ResourcesAndNews'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tenant-right" element={<TenantRight />} />
            <Route path="/resources-and-news" element={<ResourcesAndNews />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
