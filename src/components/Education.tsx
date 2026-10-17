import React from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { ScrollRotateMark, FadeUp } from './MotionPrimitives';
import { GraduationCap, Briefcase, Award, ExternalLink, Calendar, CheckCircle2, Code2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="academics" className="py-24 sm:py-32 bg-[#0A0A0A] text-white relative border-t border-neutral-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <ScrollRotateMark targetAngle={135} size={20} color="#E50914" />
            <h2 className="font-headline text-3xl sm:text-5xl text-white tracking-tight">
              EDUCATION & CREDENTIALS
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-widest">
            [ ACADEMIC RECORD & EXPERIENCE ]
          </span>
        </div>

        {/* 2-Column Responsive Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Academic Degrees & Internship (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <FadeUp delay={0.15} trigger="view">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E50914] font-bold block mb-4">
                01 / ACADEMIC BACKGROUND
              </span>
            </FadeUp>

            {/* University Degree Card */}
            {PORTFOLIO_CONTENT.education.map((edu, idx) => (
              <FadeUp key={idx} delay={0.2 + idx * 0.1} trigger="view">
                <div className="p-7 sm:p-8 bg-[#121212] border border-neutral-800 hover:border-neutral-700 transition-colors shadow-lg">
                  <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-neutral-800">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 bg-neutral-900 border border-neutral-800 text-[#E50914] shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-headline text-xl sm:text-2xl text-white font-bold tracking-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400 font-mono pt-1">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 bg-neutral-900 px-3 py-1 border border-neutral-800">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="pt-5 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500 uppercase tracking-wider">{edu.status}</span>
                    <span className="text-sm font-bold text-white bg-black px-3.5 py-1 border border-neutral-700">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}

            {/* Internship Experience Card */}
            <FadeUp delay={0.4} trigger="view">
              <div className="mt-8 pt-6 border-t border-neutral-800">
                <span className="font-mono text-xs uppercase tracking-widest text-[#E50914] font-bold block mb-4">
                  02 / INDUSTRY INTERNSHIP
                </span>
                <div className="p-7 sm:p-8 bg-[#121212] border border-neutral-800 hover:border-neutral-700 transition-colors shadow-lg">
                  <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-neutral-800">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 bg-neutral-900 border border-neutral-800 text-[#E50914] shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-headline text-xl sm:text-2xl text-white font-bold tracking-tight">
                          {PORTFOLIO_CONTENT.internship.role}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400 font-mono pt-1">
                          {PORTFOLIO_CONTENT.internship.organization}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#E50914] bg-neutral-900 px-3 py-1 border border-neutral-800 font-bold">
                      <span>DURATION: {PORTFOLIO_CONTENT.internship.duration}</span>
                    </div>
                  </div>

                  <p className="pt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {PORTFOLIO_CONTENT.internship.description}
                  </p>

                  <div className="pt-4 mt-4 border-t border-neutral-800/80 flex flex-wrap gap-2">
                    {['Data Preprocessing', 'Exploratory Analysis', 'Visualization', 'Structured Reporting'].map((tag) => (
                      <span key={tag} className="text-[11px] font-mono px-2.5 py-1 bg-black border border-neutral-800 text-neutral-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT: Certifications, LeetCode, and Categorized Skills (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeUp delay={0.2} trigger="view">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E50914] font-bold block mb-4">
                03 / CERTIFICATIONS & ACCREDITATIONS
              </span>
            </FadeUp>

            {/* Certifications List */}
            <div className="space-y-3">
              {PORTFOLIO_CONTENT.certifications.map((cert, idx) => (
                <FadeUp key={idx} delay={0.25 + idx * 0.08} trigger="view">
                  <div className="p-5 bg-[#121212] border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-[#E50914] shrink-0" />
                      <div>
                        <h4 className="font-headline text-sm sm:text-base text-white font-semibold leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs font-mono text-neutral-400 pt-0.5">
                          {cert.organization}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 bg-neutral-900 border border-neutral-700 text-emerald-400 shrink-0 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* LeetCode Algorithmic Achievement Highlight */}
            <FadeUp delay={0.5} trigger="view">
              <div className="p-6 bg-neutral-900 border-2 border-neutral-700 text-white shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#E50914] font-bold uppercase tracking-wider">
                    <Code2 className="w-4 h-4" />
                    <span>ALGORITHMIC FOUNDATION</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">JAVA & DSA</span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tighter">
                    200+
                  </span>
                  <span className="font-headline text-sm sm:text-base text-neutral-300 uppercase">
                    LeetCode Problems Solved
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  Actively practicing Data Structures and Algorithms in Java, focusing on optimal time-and-space complexity across arrays, linked lists, trees, graphs, and dynamic programming.
                </p>

                <a
                  href="https://leetcode.com/u/J00i7ZP2T8/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#E50914] text-black hover:text-white font-headline text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer"
                >
                  <span>VIEW LEETCODE PROFILE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeUp>

            {/* Categorized Skills Matrix */}
            <FadeUp delay={0.6} trigger="view">
              <div className="p-6 bg-[#121212] border border-neutral-800 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-bold block">
                  TECHNICAL SKILLS MATRIX
                </span>
                <div className="space-y-3">
                  {PORTFOLIO_CONTENT.skillsCategorized.map((cat, i) => (
                    <div key={i} className="space-y-1.5">
                      <span className="text-[11px] font-mono text-[#E50914] font-semibold uppercase block">
                        {cat.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 bg-black border border-neutral-800 text-[11px] font-mono text-neutral-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};
