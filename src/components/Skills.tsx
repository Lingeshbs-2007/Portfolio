import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { Code2, Layout, Server, Database, Blocks, Wrench, Sparkles, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Code2 className="w-5 h-5 text-blue-400" />,
    'Frontend': <Layout className="w-5 h-5 text-sky-400" />,
    'Backend': <Server className="w-5 h-5 text-emerald-400" />,
    'Database': <Database className="w-5 h-5 text-indigo-400" />,
    'Blockchain': <Blocks className="w-5 h-5 text-amber-400" />,
    'Tools': <Wrench className="w-5 h-5 text-purple-400" />
  };

  return (
    <section id="skills" className="py-24 border-t border-white/[0.08] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Practical programming competencies across core software engineering, decentralized smart contracts, and web development.
          </p>
        </div>

        {/* Categories Grid with Framer 3D Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <Card3D key={cat.title} maxTilt={6}>
              <div className="h-full p-6 sm:p-7 rounded-3xl framer-card space-y-5 preserve-3d">
                {/* Category Header */}
                <div
                  className="flex items-center justify-between pb-4 border-b border-white/[0.08] preserve-3d"
                  style={{ transform: 'translateZ(18px)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 shadow-sm">
                      {categoryIcons[cat.title] || <Code2 className="w-5 h-5 text-blue-400" />}
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 font-mono-code px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10">
                    {cat.skills.length}
                  </span>
                </div>

                {/* Skill Items List */}
                <ul className="space-y-2 preserve-3d" style={{ transform: 'translateZ(12px)' }}>
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.07] border border-white/[0.06] hover:border-blue-500/30 transition-all text-xs group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                        <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      {skill.status === 'Learning' ? (
                        <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                          Learning
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400 font-mono-code">
                          Core
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Transparency note in Framer card */}
        <div className="mt-10 p-5 rounded-2xl framer-card flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
            <p>
              Skills listed strictly reflect hands-on coursework, active projects, and deliberate daily learning.
            </p>
          </div>
          <span className="text-slate-300 font-semibold font-mono-code shrink-0">
            Updated for 2026 Opportunities
          </span>
        </div>
      </div>
    </section>
  );
};
