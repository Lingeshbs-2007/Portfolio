import React from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { CrosshairMark } from './CrosshairMark';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-36 bg-white text-black relative overflow-hidden">
      {/* Partially Obscured Blurred Background Headline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 opacity-15 overflow-hidden">
        <div className="font-headline text-6xl sm:text-8xl lg:text-[9.5rem] tracking-tighter text-center leading-none text-black filter blur-[2px]">
          INNOVATIVE SOLUTIONS <br />
          <span className="text-[#E50914]">TAILORED TO</span> YOUR BRAND
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <CrosshairMark size={20} color="red" />
            <h2 className="font-headline text-3xl sm:text-5xl text-black tracking-tight">
              SERVICES & EXPERTISE
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-widest">
            [ 04 DISCIPLINES ]
          </span>
        </div>

        {/* Staggered Offset 4-Card Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {PORTFOLIO_CONTENT.services.map((service, index) => {
            const isDark = service.theme === 'dark';
            // Deliberate offset for desktop:
            const offsetClasses = [
              'lg:mt-0',
              'lg:mt-16',
              'lg:mt-6',
              'lg:mt-24'
            ][index % 4];

            return (
              <div
                key={service.id}
                className={`p-8 sm:p-9 flex flex-col justify-between min-h-[440px] sm:min-h-[480px] shadow-xl ${offsetClasses} ${
                  isDark
                    ? 'bg-[#0A0A0A] text-white border border-neutral-900'
                    : 'bg-[#F4F4F6] text-black border border-neutral-200'
                }`}
              >
                <div className="space-y-6">
                  {/* Title */}
                  <h3
                    className={`font-headline text-2xl sm:text-3xl tracking-tight leading-tight uppercase ${
                      isDark ? 'text-white' : 'text-black'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Bullet Feature List */}
                  <ul className="space-y-3 pt-4 border-t border-current/10">
                    {service.features.map((feat, i) => (
                      <li
                        key={i}
                        className={`text-xs sm:text-sm flex items-start gap-2.5 ${
                          isDark ? 'text-neutral-300' : 'text-neutral-800'
                        }`}
                      >
                        <span className="text-[#E50914] font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Red Time-Period Label Near Bottom */}
                <div className="pt-6 border-t border-current/10 font-headline text-xs tracking-wider text-[#E50914] font-bold uppercase">
                  {service.timePeriod}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
