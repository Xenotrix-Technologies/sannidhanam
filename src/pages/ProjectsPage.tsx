import React, { useState } from 'react';
import { MapPin, Calendar, Eye, ArrowRight, MessageSquare } from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem } from '../types';
import { getProjectWhatsAppUrl } from '../utils/whatsapp';

interface ProjectsPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuoteModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onOpenQuoteModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Excavation', 'Land Clearing', 'Foundation', 'Road Support', 'Demolition', 'Materials'];

  const filtered = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20 sm:pt-24 bg-charcoal-50 text-charcoal-500">
      {/* Header Banner */}
      <section className="bg-charcoal-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/services/services-banner.jpg"
            alt="Project gallery"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/95 to-charcoal-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-yellow font-heading font-black uppercase tracking-widest text-xs">
              <span className="w-2.5 h-2.5 rounded bg-yellow"></span>
              <span>Project Execution Portfolio</span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.02]">
              Our Projects &amp; <br />
              <span className="text-yellow">Site Gallery</span>
            </h1>
            <div className="w-20 h-1.5 bg-yellow rounded-full"></div>
            <p className="text-base sm:text-lg text-charcoal-200 leading-relaxed font-normal">
              Explore completed commercial excavations, hillside land clearing, road base grading, and building materials distribution executed across Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-charcoal-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-lg font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-charcoal-800 text-yellow shadow-md'
                    : 'bg-white text-charcoal-500 hover:bg-charcoal-100 hover:text-charcoal-800 border border-charcoal-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-charcoal-200 hover:border-yellow shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  {/* Image with Category Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent"></div>

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-yellow text-charcoal-900 font-heading font-black text-[11px] uppercase tracking-wider shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="p-2 rounded-full bg-charcoal-900/80 text-white flex items-center justify-center">
                        <Eye className="w-4 h-4 text-yellow" />
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-1.5 text-yellow font-semibold truncate max-w-[60%]">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-charcoal-300 shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Copy */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading font-black uppercase text-xl text-charcoal-800 group-hover:text-yellow-600 transition-colors tracking-wide leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-400 line-clamp-3 leading-relaxed">
                      {project.scope}
                    </p>

                    <div className="pt-2 border-t border-charcoal-100 flex flex-wrap gap-1.5">
                      {project.machineryUsed.map((m, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-charcoal-100 text-charcoal-600 text-[11px] font-medium"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-charcoal-100 mt-2">
                  <span className="text-xs font-heading font-bold uppercase text-charcoal-500 group-hover:text-yellow-600 flex items-center gap-1">
                    <span>Expand Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  <a
                    href={getProjectWhatsAppUrl(project.title)}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 transition-colors"
                    title="Enquire on WhatsApp"
                    aria-label={`Enquire about ${project.title} on WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-charcoal-900 text-white border-t border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-wide">
            Planning An Earthmoving or Excavation Project in Kerala?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-300 max-w-2xl mx-auto">
            Our site engineers can visit your location in Thrissur, inspect ground conditions, and provide a comprehensive machinery and materials schedule.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider transition-all shadow-yellow-sm"
            >
              Request Free Site Inspection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
