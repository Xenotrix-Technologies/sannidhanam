import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingActions } from './components/common/FloatingActions';
import { QuoteModal } from './components/common/QuoteModal';
import { ImageLightbox } from './components/common/ImageLightbox';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { MachineryPage } from './pages/MachineryPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { PageRoute, ProjectItem } from './types';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync with window.location.hash for deep linking & back/forward support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validRoutes: PageRoute[] = ['home', 'about', 'services', 'machinery', 'projects', 'contact'];
      if (validRoutes.includes(hash as PageRoute)) {
        setCurrentPage(hash as PageRoute);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (initialServiceOrMachine?: string) => {
    setPrefilledService(initialServiceOrMachine);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-charcoal-50 text-charcoal-500 font-sans selection:bg-yellow selection:text-charcoal-900">
      {/* Sticky Header with Navigation & Brand Logo */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Page View */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onSelectProject={setSelectedProject}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
        {currentPage === 'machinery' && (
          <MachineryPage
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage
            onSelectProject={setSelectedProject}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Rich Industrial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Persistent Floating Quick Actions (WhatsApp, Click-to-call, Back to Top) */}
      <FloatingActions />

      {/* Interactive Free Quote / Booking Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialServiceOrMachine={prefilledService}
      />

      {/* Project Lightbox Modal */}
      <ImageLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;

