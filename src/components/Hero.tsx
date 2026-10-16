import React, { useState, useEffect } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { AnimatedHeadline3D, FadeUp, ScrollRotateMark } from './MotionPrimitives';
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
          hour12: true,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center min-h-[75vh] sm:min-h-[82vh]">
          {/* LEFT: Stacked Uppercase Name & Tech Stack */}
          <div className="lg:col-span-4 z-20 flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-6">
            {/* Red name lines: 3D character reveal, trigger: page entry, delay: 0.15s */}
            <div className="font-headline tracking-tighter leading-[0.96] text-4xl sm:text-6xl lg:text-[3.2rem] xl:text-[3.8rem] 2xl:text-[4.4rem]">
              <div className="text-[#E50914] block">
                <AnimatedHeadline3D
                  text={PORTFOLIO_CONTENT.hero.nameLine1}
                  color="#E50914"
                  delayStart={0.15}
                  trigger="entry"
                  as="div"
                />
              </div>
              <div className="text-[#E50914] block">
                <AnimatedHeadline3D
                  text={PORTFOLIO_CONTENT.hero.nameLine2}
                  color="#E50914"
                  delayStart={0.25}
                  trigger="entry"
                  as="div"
                />
              </div>
            </div>

            {/* Black professional role lines: scaled cleanly to fit column and prevent overlap */}
            <div className="font-headline tracking-tighter leading-[0.96] text-xl sm:text-2xl lg:text-[1.6rem] xl:text-[1.9rem] 2xl:text-[2.2rem] text-black">
              <div className="block">
                <AnimatedHeadline3D
                  text={PORTFOLIO_CONTENT.hero.roleLine1}
                  color="#000000"
                  delayStart={0.35}
                  trigger="entry"
                  as="div"
                />
              </div>
              <div className="block pt-1">
                <AnimatedHeadline3D
                  text={PORTFOLIO_CONTENT.hero.roleLine2}
                  color="#000000"
                  delayStart={0.45}
                  trigger="entry"
                  as="div"
                />
              </div>
            </div>

            {/* Left lower CTA/support group: 0.9-second delay */}
            <FadeUp delay={0.9} trigger="entry" className="space-y-2 max-w-sm pt-1">
              <p className="font-bold text-xs font-mono text-neutral-800">
                {PORTFOLIO_CONTENT.hero.greeting}
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {PORTFOLIO_CONTENT.hero.summary}
              </p>
            </FadeUp>

            {/* Tool-stack group: 0.5-second delay */}
            <FadeUp delay={0.5} trigger="entry" className="space-y-3 pt-1">
              <span className="text-[11px] font-bold text-neutral-500 tracking-widest uppercase block font-mono">
                CORE TECH STACK
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="Java & Problem Solving">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="React.js Frontend">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="Solidity Smart Contracts">
                  <Boxes className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="Python & Automation">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="Node.js & Backend">
                  <Server className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-[#E50914] transition-colors shadow-sm" title="SQL & MongoDB">
                  <Database className="w-5 h-5" />
                </div>
              </div>
            </FadeUp>

            {/* Experience/year group: 0.7-second delay with section-linked rotation */}
            <FadeUp delay={0.7} trigger="entry" className="pt-4 border-t border-neutral-200 flex items-center gap-4 text-xs font-mono text-neutral-600">
              <ScrollRotateMark targetAngle={135} size={18} color="#000000" />
              <div>
                <span className="font-bold text-black">{PORTFOLIO_CONTENT.hero.copyright}</span>
                <span className="mx-2">·</span>
                <span>{PORTFOLIO_CONTENT.hero.educationShort}</span>
              </div>
            </FadeUp>
          </div>

          {/* CENTER: Central portrait group: 1.1-second delay, enters with opacity & 20px upward reveal */}
          <div className="lg:col-span-4 z-10 flex items-center justify-center relative my-6 lg:my-0 px-2">
            {/* Light circular/oval background halo */}
            <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[320px] lg:h-[320px] xl:w-[360px] xl:h-[360px] rounded-full bg-[#E8E8E8] -z-10" />

            <FadeUp delay={1.1} trigger="entry" yOffset={20}>
              <div className="relative w-[260px] sm:w-[300px] lg:w-[290px] xl:w-[330px] 2xl:w-[350px] h-[440px] sm:h-[500px] lg:h-[510px] xl:h-[570px] 2xl:h-[610px] rounded-[150px] xl:rounded-[175px] overflow-hidden bg-[#111111] border-2 border-white shadow-2xl flex flex-col items-center justify-center text-center p-6 text-white">
                {PORTFOLIO_CONTENT.hero.portraitImage ? (
                  <>
                    <img
                      src={PORTFOLIO_CONTENT.hero.portraitImage}
                      alt="Lingesh B. — Computer Science and Engineering Student"
                      className="w-full h-full object-cover object-top filter grayscale contrast-110"
                    />
                    <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </>
                ) : (
                  /* Verified Student Developer Capsule Card (No random photo) */
                  <div className="flex flex-col items-center justify-between h-full py-12 px-4 relative z-10 w-full">
                    <div className="flex items-center gap-2">
                      <ScrollRotateMark targetAngle={270} size={18} color="#E50914" />
                      <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                        STUDENT DEVELOPER
                      </span>
                    </div>

                    <div className="space-y-4 my-auto">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-neutral-900 border-2 border-[#E50914] flex items-center justify-center mx-auto shadow-xl">
                        <span className="font-headline text-3xl sm:text-4xl font-extrabold text-white tracking-tighter">
                          LB
                        </span>
                      </div>
                      <div>
                        <h3 className="font-headline text-xl sm:text-2xl text-white tracking-tight font-extrabold uppercase">
                          LINGESH B.
                        </h3>
                        <p className="text-xs font-mono text-[#E50914] pt-1">
                          B.E. Computer Science & Engg
                        </p>
                        <p className="text-[11px] text-neutral-400 font-mono pt-0.5">
                          Dr. N.G.P. Institute of Technology
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-4 border-t border-neutral-800 w-full">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-[10px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>OPEN FOR INTERNSHIPS</span>
                      </div>
                      <p className="text-[10px] font-mono text-neutral-500">
                        2024 – 2028 Academic Batch
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </FadeUp>
          </div>

          {/* RIGHT: Oversized Right-Aligned Headline, Location, & Socials */}
          <div className="lg:col-span-4 z-20 flex flex-col justify-center items-start lg:items-end text-left lg:text-right space-y-5 sm:space-y-6 lg:space-y-6">
            {/* Right headline: 3D character reveal, trigger: page entry, delay: 1.2s */}
            <div className="font-headline tracking-tighter leading-[0.96] text-3xl sm:text-4xl md:text-5xl lg:text-[2.35rem] xl:text-[2.85rem] 2xl:text-[3.2rem] w-full flex flex-col items-start lg:items-end text-left lg:text-right">
              <div className="text-black block w-full text-left lg:text-right">
                <AnimatedHeadline3D
                  text={PORTFOLIO_CONTENT.hero.headlineLine1}
                  color="#000000"
                  delayStart={1.2}
                  trigger="entry"
                  as="div"
                  className="w-full text-left lg:text-right"
                />
              </div>
              <div className="text-[#E50914] block pt-1 w-full text-left lg:text-right">
                <AnimatedHeadline3D
                  text={PORTFOLIO_CONTENT.hero.headlineLine2}
                  color="#E50914"
                  delayStart={1.35}
                  trigger="entry"
                  as="div"
                  className="w-full text-left lg:text-right"
                />
              </div>
              <div className="text-[#E50914] block pt-1 w-full text-left lg:text-right">
                <AnimatedHeadline3D
                  text={PORTFOLIO_CONTENT.hero.headlineLine3}
                  color="#E50914"
                  delayStart={1.5}
                  trigger="entry"
                  as="div"
                  className="w-full text-left lg:text-right"
                />
              </div>
            </div>

            {/* Location & Local Clock: 1.4-second delay */}
            <FadeUp delay={1.4} trigger="entry" className="space-y-1">
              <span className="text-[11px] font-bold text-neutral-500 tracking-widest uppercase block font-mono">
                LOCATION
              </span>
              <p className="font-headline text-sm sm:text-base text-black tracking-tight">
                {PORTFOLIO_CONTENT.hero.location}, {timeStr || '12:30 PM'}
              </p>
            </FadeUp>

            {/* Vertically Stacked Social Links with Verified URLs: 1.6-second delay */}
            <FadeUp delay={1.6} trigger="entry" className="flex flex-col items-start lg:items-end space-y-2 text-xs font-headline tracking-wider text-black">
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
            </FadeUp>

            {/* Academic Credential / Rating Metric Badge: 1.8-second delay */}
            <FadeUp delay={1.8} trigger="entry" className="pt-4 border-t border-neutral-200 flex items-center gap-2 text-xs font-mono text-neutral-600">
              <span className="font-bold text-[#E50914]">8.20 CGPA</span>
              <span>·</span>
              <span>B.E. Computer Science</span>
            </FadeUp>
          </div>
        </div>

        {/* Adjoining Bottom Bar & Collaborations Button */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection('#contact')}
            className="bg-[#E50914] hover:bg-[#c90711] text-white font-headline text-sm tracking-wider uppercase px-8 py-4 font-bold transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>LET’S CONNECT</span>
            <ArrowDownRight className="w-4 h-4" />
          </button>

          {/* Adjoining Wide Near-Black Navigation Bar with scroll-linked mark */}
          <div className="flex-1 max-w-2xl flex items-center justify-between bg-[#0A0A0A] text-white px-6 py-3.5 shadow-xl">
            <div className="flex items-center gap-3">
              <ScrollRotateMark targetAngle={-135} size={20} color="#E50914" />
              <span className="font-headline text-xs tracking-widest text-neutral-300">
                LINGESH B. · DR. N.G.P. INSTITUTE OF TECHNOLOGY
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
