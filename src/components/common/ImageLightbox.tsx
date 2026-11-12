import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Wrench, MessageSquare } from 'lucide-react';
import { ProjectItem } from '../../types';
import { getProjectWhatsAppUrl } from '../../utils/whatsapp';

interface ImageLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal-900/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-charcoal-800 rounded-xl overflow-hidden border border-charcoal-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-charcoal-900/80 text-white hover:bg-yellow hover:text-charcoal-900 transition-colors shadow-lg"
          aria-label="Close preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Preview */}
        <div className="relative aspect-video sm:aspect-[16/9] w-full bg-charcoal-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded bg-yellow text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider shadow-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 sm:p-7 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-charcoal-700 pb-3">
            <h3 className="font-heading uppercase font-black text-xl sm:text-2xl text-white tracking-wide">
              {project.title}
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-charcoal-700 text-charcoal-300 self-start sm:self-auto">
              {project.clientType}
            </span>
          </div>

          <p className="text-sm text-charcoal-300 leading-relaxed">
            {project.scope}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-charcoal-300 pt-1">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow shrink-0" />
              <span><strong>Location:</strong> {project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-yellow shrink-0" />
              <span><strong>Execution Time:</strong> {project.duration}</span>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex items-center gap-1.5 text-xs text-charcoal-400 mb-2 font-medium">
              <Wrench className="w-3.5 h-3.5 text-yellow" />
              <span>Machinery Deployed:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.machineryUsed.map((m, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-charcoal-700/60 border border-charcoal-600 text-charcoal-200 text-xs font-medium"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-charcoal-700">
            <span className="text-xs text-charcoal-400">
              Need earthmoving or machinery for a similar project?
            </span>
            <a
              href={getProjectWhatsAppUrl(project.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-yellow hover:bg-yellow-400 text-charcoal-900 font-heading font-black text-xs uppercase tracking-wider transition-all shadow-yellow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire for Similar Site</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

