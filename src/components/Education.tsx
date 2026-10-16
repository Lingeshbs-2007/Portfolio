import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { GraduationCap, Calendar, Award, Sparkles } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-white/[0.08] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Rigorous undergraduate studies in computer science engineering and academic excellence.
          </p>
        </div>

        {/* Education Cards Grid in Framer Bento Style with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_DATA.map((edu, index) => (
            <Card3D key={index} maxTilt={5}>
              <div className="h-full p-7 sm:p-9 rounded-3xl framer-card flex flex-col justify-between space-y-6 preserve-3d">
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4" style={{ transform: 'translateZ(18px)' }}>
                    <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-md">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 font-mono-code">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5" style={{ transform: 'translateZ(14px)' }}>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-200">
                      {edu.institution}
                    </p>
                    {edu.discipline && (
                      <p className="text-xs text-slate-400">
                        Discipline: <span className="text-slate-300">{edu.discipline}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Score Display (Framer Metric Highlight) */}
                <div
                  className="pt-6 border-t border-white/[0.08] flex items-center justify-between"
                  style={{ transform: 'translateZ(16px)' }}
                >
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    {edu.scoreLabel}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white tabular-nums text-blue-400">
                      {edu.scoreValue}
                    </span>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};
