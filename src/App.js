import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import VendorPage from './pages/VendorPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  const [view, setView] = useState(() => {
    if (typeof window === 'undefined') return 'home';
    const hash = window.location.hash;
    if (hash === '#about') return 'about';
    if (hash === '#gallery') return 'gallery';
    if (hash === '#events') return 'events';
    if (hash === '#vendor') return 'vendor';
    if (hash === '#contact') return 'contact';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') setView('about');
      else if (hash === '#gallery') setView('gallery');
      else if (hash === '#events') setView('events');
      else if (hash === '#vendor') setView('vendor');
      else if (hash === '#contact') setView('contact');
      else setView('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (view === 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [view]);

  return (
    <div className="App">
      <Header />
      {view === 'home' && <HomePage />}
      {view === 'about' && <AboutPage />}
      {view === 'gallery' && <GalleryPage />}
      {view === 'events' && <EventsPage />}
      {view === 'vendor' && <VendorPage />}
      {view === 'contact' && <ContactPage />}
      <Footer />
    </div>
  );
}

export default App;

