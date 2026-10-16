import React, { useState } from 'react';
import { PORTFOLIO_CONTENT, ProjectItem } from '../data/portfolioContent';
import { CrosshairMark } from './CrosshairMark';
import { ArrowUpRight, Github, ExternalLink, X, Check } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white text-black relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <CrosshairMark size={20} color="red" />
            <h2 className="font-headline text-3xl sm:text-5xl text-black tracking-tight">
              SELECTED PROJECTS
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-widest">
            [ 06 CASE STUDIES ]
          </span>
        </div>

        {/* 3-Column Desktop Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-20 items-start">
          {PORTFOLIO_CONTENT.projects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col space-y-4"
            >
              {/* Header with index aligned left and year aligned right */}
              <div className="flex items-center justify-between font-mono text-xs text-neutral-500 uppercase pb-1 border-b border-neutral-100">
                <span className="font-bold text-black">{project.index}</span>
                <span>{project.year}</span>
              </div>

              {/* Varied Image Proportion Thumbnail */}
              <div
                className={`w-full overflow-hidden bg-neutral-100 relative ${
                  project.aspect === 'tall'
                    ? 'aspect-[3/4]'
                    : project.aspect === 'landscape'
                    ? 'aspect-[16/10]'
                    : 'aspect-square'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 p-2 bg-black text-white rounded-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Outlined Category Pill */}
              <div className="flex items-start justify-between gap-3 pt-1">
                <h3 className="font-headline text-xl sm:text-2xl text-black group-hover:text-[#E50914] transition-colors leading-tight">
                  {project.title}
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border border-neutral-300 text-neutral-700 whitespace-nowrap">
                  {project.category}
                </span>
              </div>

              {/* Compact summary */}
              <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </article>
          ))}
        </div>

        {/* Centered Black Button with Outer Crosshair Marks */}
        <div className="mt-20 pt-10 border-t border-neutral-200 flex items-center justify-between">
          <CrosshairMark size={22} color="black" spin={true} />

          <a
            href="https://github.com/Lingeshbs-2007"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-black hover:bg-[#E50914] text-white font-headline text-sm uppercase tracking-wider px-10 py-4 font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          >
            <span>VIEW ALL PROJECTS ON GITHUB</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <CrosshairMark size={22} color="red" spin={true} />
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white text-black max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 bg-neutral-100 hover:bg-[#E50914] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-3 font-mono text-xs text-neutral-500">
                <span>{selectedProject.index}</span>
                <span>·</span>
                <span className="text-[#E50914] font-bold">{selectedProject.category}</span>
                <span>·</span>
                <span>{selectedProject.year}</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl text-black">
                {selectedProject.title}
              </h2>

              <div className="w-full aspect-[16/9] overflow-hidden bg-neutral-100">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                  TECH STACK & TOOLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs font-mono font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                  KEY DELIVERABLES
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                  {selectedProject.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#E50914] font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl || 'https://github.com/Lingeshbs-2007'}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E50914] hover:bg-[#c90711] text-white font-headline text-xs tracking-wider uppercase font-bold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 border border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-headline text-xs tracking-wider uppercase transition-colors cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
