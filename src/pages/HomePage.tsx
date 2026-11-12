import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CompanyIntro } from '../components/home/CompanyIntro';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { MachineryShowcase } from '../components/home/MachineryShowcase';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProjectsPreview } from '../components/home/ProjectsPreview';
import { StatsSection } from '../components/home/StatsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CtaBanner } from '../components/home/CtaBanner';
import { PageRoute, ProjectItem } from '../types';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (initialService?: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onSelectProject,
}) => {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />
      <CompanyIntro onNavigate={onNavigate} onOpenQuoteModal={() => onOpenQuoteModal()} />
      <ServicesOverview onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />
      <MachineryShowcase onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />
      <WhyChooseUs onOpenQuoteModal={() => onOpenQuoteModal()} />
      <ProjectsPreview onNavigate={onNavigate} onSelectProject={onSelectProject} />
      <StatsSection />
      <TestimonialsSection />
      <CtaBanner onNavigate={onNavigate} onOpenQuoteModal={() => onOpenQuoteModal()} />
    </div>
  );
};

