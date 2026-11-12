import React from 'react';
import { ArrowRight, MapPin, Calendar, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/companyData';
import { ProjectItem, PageRoute } from '../../types';

interface ProjectsPreviewProps {
  onNavigate: (page: PageRoute) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsPreview: React.FC<ProjectsPreviewProps> = ({
  onNavigate,
  onSelectProject,
}) => {
  return (
    <section className="py-20 sm:py-24 bg-white text-charcoal-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-heading font-black uppercase tracking-widest text-xs">
              <span className="w-2.5 h-2.5 rounded bg-yellow-500"></span>
              <span>Proven Field Execution</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase text-charcoal-800 tracking-tight leading-[1.05]">
              Featured Projects &amp; Site Works
            </h2>
            <div className="w-16 h-1.5 bg-yellow rounded-full"></div>
            <p className="text-sm sm:text-base text-charcoal-400 mt-2">
              A showcase of recent earthmoving, deep basement excavation, land development, and materials deliveries across Thrissur and Central Kerala.
            </p>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-white font-heading font-black text-xs uppercase tracking-wider transition-all shadow-md group shrink-0"
          >
            <span>View Complete Portfolio</span>
            <ArrowRight className="w-4 h-4 text-yellow group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Projects Cards Grid (4 Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="group bg-charcoal-50 rounded-2xl overflow-hidden border border-charcoal-200 hover:border-yellow shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              {/* Image with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-yellow text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider shadow-sm">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-full bg-charcoal-900/80 text-white flex items-center justify-center">
                    <Eye className="w-4 h-4 text-yellow" />
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 text-yellow font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-charcoal-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 sm:p-7 space-y-3">
                <h3 className="font-heading font-black uppercase text-xl sm:text-2xl text-charcoal-800 group-hover:text-yellow-600 transition-colors tracking-wide">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-400 line-clamp-2 leading-relaxed">
                  {project.scope}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.machineryUsed.map((m, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded bg-charcoal-200/60 text-charcoal-600 text-[11px] font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Bar */}
              <div className="px-6 sm:px-7 py-3.5 bg-white border-t border-charcoal-200/60 flex items-center justify-between text-xs font-semibold text-charcoal-600 group-hover:text-yellow-600">
                <span>View Full Project Case Details</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
