import React, { useState, useEffect } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { AnimatedHeadline3D } from './AnimatedHeadline3D';
import { CrosshairMark } from './CrosshairMark';
import { Code2, Boxes, Terminal, Server, Cpu, Database, ArrowDownRight } from 'lucide-react';

interface HeroProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenu, onOpenContact }) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-white text-black pt-10 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative">
        {/* Main 3-Part Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[75vh] sm:min-h-[82vh]">
          {/* LEFT: Stacked Uppercase Name & Tech Stack */}
          <div className="lg:col-span-4 z-20 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="font-headline tracking-tighter leading-[0.88] text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem]">
              {/* Red name lines */}
              <div className="text-[#E50914] block">
                <AnimatedHeadline3D text={PORTFOLIO_CONTENT.hero.nameLine1} color="#E50914" delayStart={0.1} />
              </div>
              <div className="text-[#E50914] block">
                <AnimatedHeadline3D text={PORTFOLIO_CONTENT.hero.nameLine2} color="#E50914" delayStart={0.3} />
              </div>
              {/* Black role lines */}
              <div className="text-black block pt-1">
                <AnimatedHeadline3D text={PORTFOLIO_CONTENT.hero.roleLine1} color="#000000" delayStart={0.5} />
              </div>
              <div className="text-black block">
                <AnimatedHeadline3D text={PORTFOLIO_CONTENT.hero.roleLine2} color="#000000" delayStart={0.7} />
              </div>
            </div>

            {/* PRO TECH STACK Tool Icons */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-bold text-neutral-500 tracking-widest uppercase block font-mono">
                PRO TECH STACK
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="React.js">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="Solidity Smart Contracts">
                  <Boxes className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="Python">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="Node.js">
                  <Server className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="Java">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="SQL Database">
                  <Database className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Lower supporting details with mark and experience */}
            <div className="pt-4 border-t border-neutral-200 flex items-center gap-4 text-xs font-mono text-neutral-600">
              <CrosshairMark size={18} color="black" spin={false} />
              <div>
                <span className="font-bold text-black">{PORTFOLIO_CONTENT.hero.copyright}</span>
                <span className="mx-2">·</span>
                <span>{PORTFOLIO_CONTENT.hero.educationShort}</span>
              </div>
            </div>
          </div>

          {/* CENTER: Vertically Elongated Capsule Portrait */}
          <div className="lg:col-span-4 z-10 flex items-center justify-center relative my-6 lg:my-0">
            {/* Light circular/oval background halo */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#E8E8E8] -z-10" />

            {/* Vertically elongated capsule mask with layered bottom treatment */}
            <div className="relative w-[280px] sm:w-[340px] lg:w-[380px] h-[480px] sm:h-[580px] lg:h-[640px] rounded-[190px] overflow-hidden bg-neutral-200 border-2 border-white shadow-2xl">
              <img
                src={PORTFOLIO_CONTENT.hero.portraitImage}
                alt="Lingesh B — Full-Stack & Web3 Developer"
                className="w-full h-full object-cover object-top filter grayscale contrast-110"
              />
              {/* Layered bottom slice effect */}
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
            </div>
          </div>

          {/* RIGHT: Oversized Right-Aligned Headline, Location, & Socials */}
          <div className="lg:col-span-4 z-20 flex flex-col justify-between items-start lg:items-end text-left lg:text-right space-y-6 sm:space-y-8">
            <div className="font-headline tracking-tighter leading-[0.88] text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem]">
              <div className="text-black block">
                <AnimatedHeadline3D text={PORTFOLIO_CONTENT.hero.headlineLine1} color="#000000" delayStart={0.9} />
              </div>
              <div className="text-[#E50914] block pt-1">
                <AnimatedHeadline3D text={PORTFOLIO_CONTENT.hero.headlineLine2} color="#E50914" delayStart={1.1} />
              </div>
              <div className="text-[#E50914] block">
                <AnimatedHeadline3D text={PORTFOLIO_CONTENT.hero.headlineLine3} color="#E50914" delayStart={1.3} />
              </div>
            </div>

            {/* Location & Local Clock */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-neutral-500 tracking-widest uppercase block font-mono">
                LOCATION
              </span>
              <p className="font-headline text-sm sm:text-base text-black tracking-tight">
                {PORTFOLIO_CONTENT.hero.location}, {timeStr || '12:30 PM'}
              </p>
            </div>

            {/* Vertically Stacked Social Links */}
            <div className="flex flex-col items-start lg:items-end space-y-2 text-xs font-headline tracking-wider text-black">
              {PORTFOLIO_CONTENT.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-[#E50914] transition-colors uppercase block"
                >
                  {s.name}
                </a>
              ))}
            </div>

            {/* Academic Credential Metric Badge */}
            <div className="pt-4 border-t border-neutral-200 flex items-center gap-2 text-xs font-mono text-neutral-600">
              <span className="font-bold text-[#E50914]">8.20 CGPA</span>
              <span>·</span>
              <span>B.E. Computer Science</span>
            </div>
          </div>
        </div>

        {/* Adjoining Bottom Bar & Collaborations Button */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection('#contact')}
            className="bg-[#E50914] hover:bg-[#c90711] text-white font-headline text-sm tracking-wider uppercase px-8 py-4 font-bold transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>LET’S COLLABORATE</span>
            <ArrowDownRight className="w-4 h-4" />
          </button>

          {/* Adjoining Wide Near-Black Navigation Bar */}
          <div className="flex-1 max-w-2xl flex items-center justify-between bg-[#0A0A0A] text-white px-6 py-3.5 shadow-xl">
            <div className="flex items-center gap-3">
              <CrosshairMark size={20} color="default" spin={true} />
              <span className="font-headline text-xs tracking-widest text-neutral-300">
                SWISS EDITORIAL SYSTEM
              </span>
            </div>
            <button
              onClick={onOpenMenu}
              className="bg-[#E50914] hover:bg-[#c90711] text-white font-headline text-xs tracking-wider uppercase px-5 py-2 font-bold transition-colors cursor-pointer"
            >
              MENU
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
