import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { Database, Blocks, GraduationCap, MapPin, Code2, Sparkles, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-white/[0.08] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Background & Profile
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Engineering solid foundations in full-stack web technologies, systems programming, and decentralized protocols.
          </p>
        </div>

        {/* Framer Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Story Card (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <Card3D maxTilt={4} className="h-full">
              <div className="h-full p-7 sm:p-10 rounded-3xl framer-card space-y-6 flex flex-col justify-between preserve-3d">
                <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal" style={{ transform: 'translateZ(14px)' }}>
                  <p className="text-white font-medium">
                    {PERSONAL_INFO.about.summary}
                  </p>
                  <p>
                    {PERSONAL_INFO.about.interests}
                  </p>
                  <p className="text-slate-400 text-base">
                    {PERSONAL_INFO.about.experienceHighlights}
                  </p>
                </div>

                {/* Sub-Pillars in Bento */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4 preserve-3d" style={{ transform: 'translateZ(18px)' }}>
                  <div className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] space-y-2 transition-colors">
                    <div className="flex items-center gap-2.5 text-blue-400">
                      <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-sm">
                        <Blocks className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="text-sm font-bold text-white">Blockchain & Web3</h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Practical smart contract authoring in Solidity, IPFS decentralized storage, and MetaMask integration on Ethereum.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] space-y-2 transition-colors">
                    <div className="flex items-center gap-2.5 text-indigo-400">
                      <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 shadow-sm">
                        <Database className="w-4 h-4 text-indigo-400" />
                      </div>
                      <h3 className="text-sm font-bold text-white">Full-Stack Development</h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Responsive user interfaces with React, relational SQL querying, and continuous expansion into Node.js, Express.js, and MongoDB.
                    </p>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Quick Profile Summary Bento Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <Card3D maxTilt={5} className="h-full">
              <div className="h-full p-7 sm:p-8 rounded-3xl framer-card space-y-6 flex flex-col justify-between preserve-3d">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]" style={{ transform: 'translateZ(15px)' }}>
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Profile Highlights
                  </h3>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs" style={{ transform: 'translateZ(12px)' }}>
                  <div className="space-y-1">
                    <span className="text-slate-500 font-medium block text-[11px] uppercase tracking-wider">CURRENT ENROLLMENT</span>
                    <span className="text-white font-semibold text-sm">B.E. Computer Science & Eng.</span>
                    <span className="block text-slate-400">Dr. N.G.P. Institute of Technology</span>
                  </div>

                  <div className="space-y-1 pt-3 border-t border-white/[0.06]">
                    <span className="text-slate-500 font-medium block text-[11px] uppercase tracking-wider">CORE STACK</span>
                    <span className="text-slate-200 font-semibold leading-relaxed block">
                      Java · React.js · SQL · Solidity · Python
                    </span>
                  </div>

                  <div className="space-y-1 pt-3 border-t border-white/[0.06]">
                    <span className="text-slate-500 font-medium block text-[11px] uppercase tracking-wider">AREAS OF FOCUS</span>
                    <span className="text-slate-200 font-semibold leading-relaxed block">
                      Secure Scalable Applications & MERN Stack
                    </span>
                  </div>

                  <div className="space-y-1 pt-3 border-t border-white/[0.06]">
                    <span className="text-slate-500 font-medium block text-[11px] uppercase tracking-wider">LOCATION</span>
                    <span className="text-slate-200 font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      Coimbatore, Tamil Nadu, India
                    </span>
                  </div>
                </div>

                <div
                  className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-mono-code"
                  style={{ transform: 'translateZ(16px)' }}
                >
                  <span>CLASS OF 2028</span>
                  <span className="text-blue-400 font-extrabold text-sm">8.20 CGPA</span>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
