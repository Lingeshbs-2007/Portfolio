import React from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { ScrollRotateMark, FadeUp } from './MotionPrimitives';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS & FOCUS', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'ACTIVITIES', href: '#testimonials' },
    { label: 'OPPORTUNITIES', href: '#pricing' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070707] text-white pt-20 pb-16 border-t border-neutral-900 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        {/* Decorative Crosses Near Top: Scroll-target rotations 135, 270, -135 */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-8">
          <div className="flex items-center gap-4">
            <ScrollRotateMark targetAngle={135} size={22} color="#E50914" />
            <ScrollRotateMark targetAngle={270} size={22} color="#FFFFFF" />
            <ScrollRotateMark targetAngle={-135} size={22} color="#E50914" />
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-headline uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E50914]" />
          </button>
        </div>

        {/* Middle Navigation & Information Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Student Statement */}
          <FadeUp delay={0.15} trigger="view" className="md:col-span-5 space-y-4">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">
              ENGINEERING OBJECTIVE
            </span>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-md">
              Building practical software applications across web development, blockchain, and AI. Developing strong technical foundations in Java and Data Structures while preparing for software development internships and placement opportunities.
            </p>
          </FadeUp>

          {/* Quick Page Links */}
          <FadeUp delay={0.25} trigger="view" className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">
              DIRECTORY
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-headline tracking-wider text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-[#E50914] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </FadeUp>

          {/* Socials & Contact */}
          <FadeUp delay={0.35} trigger="view" className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block">
              CONNECT
            </span>
            <div className="flex flex-col space-y-2 text-xs font-headline tracking-wider text-neutral-300">
              {PORTFOLIO_CONTENT.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-[#E50914] transition-colors flex items-center justify-between"
                >
                  <span>{s.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Bottom Lower Row: Oversized Stacked Name & Wide Red Capsule "GET IN TOUCH" */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          {/* Oversized Stacked Name: Red on line 1, White on line 2 */}
          <FadeUp delay={0.2} trigger="view" className="font-headline text-6xl sm:text-8xl lg:text-9xl leading-[0.85] tracking-tighter select-none">
            <div className="text-[#E50914] block">
              {PORTFOLIO_CONTENT.hero.nameLine1}
            </div>
            <div className="text-white block">
              {PORTFOLIO_CONTENT.hero.nameLine2}
            </div>
          </FadeUp>

          {/* Wide Red Capsule "GET IN TOUCH" Treatment */}
          <FadeUp delay={0.3} trigger="view" className="self-start lg:self-auto">
            <a
              href="mailto:lingeshbs2007@gmail.com?subject=Opportunity%20Inquiry%20for%20Lingesh"
              className="group relative inline-flex items-center justify-between gap-6 px-10 py-6 sm:px-14 sm:py-8 bg-[#E50914] hover:bg-[#c90711] text-white rounded-full transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 border-4 border-white/10 overflow-hidden cursor-pointer"
            >
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/80 block">
                  OPPORTUNITY INQUIRY
                </span>
                <span className="font-headline text-2xl sm:text-3xl text-white tracking-tight uppercase font-extrabold block">
                  GET IN TOUCH
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </a>
          </FadeUp>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} Lingesh B. · Computer Science and Engineering Student · Dr. N.G.P. Institute of Technology</p>
          <p>Tiruppur, Tamil Nadu, India · lingeshbs2007@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
