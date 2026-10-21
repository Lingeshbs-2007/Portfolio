import React from 'react';
import { INTERNSHIP_EXPERIENCE } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { Calendar, Building2, CheckCircle2, Briefcase, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/[0.08] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Practical industry learning and analytical techniques applied in an organizational environment.
          </p>
        </div>

        {/* Experience Timeline Bento Card with 3D Depth */}
        <div className="max-w-4xl">
          <Card3D maxTilt={4}>
            <div className="p-7 sm:p-10 rounded-3xl framer-card space-y-6 preserve-3d">
              <div
                className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/[0.08] preserve-3d"
                style={{ transform: 'translateZ(18px)' }}
              >
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    <span>{INTERNSHIP_EXPERIENCE.type}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {INTERNSHIP_EXPERIENCE.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300 font-semibold pt-0.5">
                    <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{INTERNSHIP_EXPERIENCE.organization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.04] px-4 py-2 rounded-full border border-white/10 font-mono-code">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-semibold">Duration: {INTERNSHIP_EXPERIENCE.duration}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed" style={{ transform: 'translateZ(12px)' }}>
                {INTERNSHIP_EXPERIENCE.description}
              </p>

              <div className="space-y-3 pt-2 preserve-3d" style={{ transform: 'translateZ(15px)' }}>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Core Responsibilities & Learning
                </span>
                <ul className="grid grid-cols-1 gap-2.5">
                  {INTERNSHIP_EXPERIENCE.highlights.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-blue-500/20 transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};
