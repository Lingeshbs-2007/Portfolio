import React from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { CrosshairMark } from './CrosshairMark';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-36 bg-[#0A0A0A] text-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Large Heading: "FROM IDEA" on left, crosses, "TO LAUNCH" on right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
          <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
            FROM IDEA
          </h2>

          <div className="hidden md:flex items-center gap-4">
            <CrosshairMark size={20} color="default" spin={true} />
            <CrosshairMark size={20} color="red" spin={false} />
            <CrosshairMark size={20} color="default" spin={true} />
          </div>

          <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl text-[#E50914] tracking-tight text-left md:text-right">
            TO LAUNCH
          </h2>
        </div>

        {/* Short Introductory Paragraph */}
        <p className="max-w-2xl mx-auto my-12 text-center text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
          {PORTFOLIO_CONTENT.process.intro}
        </p>

        {/* Four Process Cards in a Desktop Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PORTFOLIO_CONTENT.process.steps.map((step) => {
            // Style by variant
            let cardClasses = '';
            let textClasses = '';
            let bulletColor = '';

            switch (step.variant) {
              case 'red':
                cardClasses = 'bg-[#E50914] text-white border border-[#E50914] shadow-xl';
                textClasses = 'text-white';
                bulletColor = 'text-white';
                break;
              case 'charcoal':
                cardClasses = 'bg-[#181818] text-white border border-neutral-800 shadow-xl';
                textClasses = 'text-neutral-300';
                bulletColor = 'text-[#E50914]';
                break;
              case 'light':
                cardClasses = 'bg-[#FFFFFF] text-black border border-white shadow-xl';
                textClasses = 'text-neutral-800';
                bulletColor = 'text-[#E50914]';
                break;
              case 'outline':
              default:
                cardClasses = 'bg-[#0E0E0E] text-white border border-neutral-800 shadow-xl';
                textClasses = 'text-neutral-300';
                bulletColor = 'text-[#E50914]';
                break;
            }

            return (
              <div
                key={step.step}
                className={`p-7 sm:p-8 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] transition-transform duration-200 hover:-translate-y-1.5 ${cardClasses}`}
              >
                <div>
                  {/* Step Title & Number Header */}
                  <div className="flex items-start justify-between mb-8 pb-4 border-b border-current/20">
                    <h3 className="font-headline text-2xl font-bold tracking-tight uppercase">
                      {step.title}
                    </h3>
                    <span className="font-mono text-xl font-bold opacity-80">
                      {step.step}
                    </span>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-3.5">
                    {step.features.map((feat, i) => (
                      <li key={i} className={`text-xs sm:text-sm flex items-start gap-2.5 ${textClasses}`}>
                        <span className={`font-bold ${bulletColor}`}>•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-current/15 flex items-center justify-between text-[11px] font-mono tracking-widest uppercase opacity-75">
                  <span>PHASE {step.step}</span>
                  <CrosshairMark size={14} color={step.variant === 'light' ? 'black' : 'white'} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Brands / Collaborations Section */}
        <div className="mt-28 pt-16 border-t border-neutral-800 text-center">
          <h4 className="font-headline text-lg sm:text-xl tracking-wider text-neutral-400 mb-10 uppercase">
            <span>BRANDS I’VE </span>
            <span className="text-[#E50914]">WORKED WITH</span>
          </h4>

          {/* Subdued Monochrome Logo Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-neutral-500 font-headline text-base sm:text-xl tracking-wider uppercase opacity-75 hover:opacity-100 transition-opacity">
            {PORTFOLIO_CONTENT.brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center gap-2 px-4 py-2 hover:text-white transition-colors cursor-default"
              >
                <CrosshairMark size={16} color="default" />
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
