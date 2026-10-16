import React from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { CrosshairMark } from './CrosshairMark';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-28 sm:py-36 bg-[#0E0E0E] text-white overflow-hidden">
      {/* Cinematic Portrait Background with Dark Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80"
          alt="Cinematic Background"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Large Heading at Upper Left: "TRUSTED" in red, "BY CLIENTS" in white */}
        <div className="mb-20 pb-6 border-b border-neutral-800 flex items-baseline justify-between flex-wrap gap-4">
          <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl tracking-tight">
            <span className="text-[#E50914]">TRUSTED </span>
            <span className="text-white">BY CLIENTS</span>
          </h2>
          <CrosshairMark size={24} color="red" spin={true} />
        </div>

        {/* Conversational Message Panels */}
        <div className="space-y-16 max-w-4xl mx-auto">
          {PORTFOLIO_CONTENT.testimonials.map((t) => (
            <div key={t.id} className="space-y-4">
              {/* Question / Initial Inquiry Bubble (Dark Translucent) */}
              <div className="flex items-start gap-4 max-w-2xl">
                <img
                  src={t.avatar}
                  alt={t.clientName}
                  className="w-11 h-11 rounded-full object-cover border border-neutral-700 shrink-0 filter grayscale"
                />
                <div className="p-5 sm:p-6 bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-sm sm:text-base leading-relaxed">
                  <div className="text-xs font-mono text-neutral-500 mb-1">
                    {t.clientName} · {t.role}
                  </div>
                  <p>{t.initialMessage}</p>
                </div>
              </div>

              {/* Response Panel (Lighter Offset Beneath It) */}
              <div className="flex items-start gap-4 max-w-2xl ml-auto justify-end">
                <div className="p-5 sm:p-6 bg-neutral-800/90 border border-neutral-700 text-white text-sm sm:text-base leading-relaxed">
                  <div className="flex items-center justify-between text-xs font-mono text-[#E50914] mb-1 font-bold">
                    <span>VERIFIED FEEDBACK</span>
                    <CrosshairMark size={14} color="red" />
                  </div>
                  <p className="font-medium text-neutral-100">{t.responseMessage}</p>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#E50914] text-white flex items-center justify-center font-headline text-xs font-bold shrink-0">
                  LB
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
