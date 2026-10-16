import React, { useState } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { ScrollRotateMark, FadeUp } from './MotionPrimitives';
import { Check, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [activePlan, setActivePlan] = useState<'Internship' | 'Academic & Projects'>('Internship');

  const currentPlan =
    activePlan === 'Internship'
      ? PORTFOLIO_CONTENT.opportunities.monthly
      : PORTFOLIO_CONTENT.opportunities.projectBased;

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 sm:py-36 bg-white text-black relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <ScrollRotateMark targetAngle={135} size={20} color="#E50914" />
            <span className="font-headline text-3xl sm:text-5xl text-black tracking-tight">
              INTERNSHIP & COLLABORATION
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ScrollRotateMark targetAngle={220} size={18} color="#000000" />
            <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-widest">
              [ ACADEMIC & CAREER GOALS ]
            </span>
          </div>
        </div>

        {/* Three-Part Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Tall Capsule Red-and-Black Container: Standard fade-up, delay 0.1s */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <FadeUp delay={0.1} trigger="view" className="h-full">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full rounded-[140px] overflow-hidden bg-neutral-900 border-2 border-neutral-200 shadow-xl flex flex-col justify-between p-7 text-white">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                  alt="Lingesh B. — Student Developer Profile"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Small Availability Badge on Top */}
                <div className="relative z-10 self-start inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-white/20 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>OPEN TO ROLES</span>
                </div>

                {/* Title and Supporting Copy Near Bottom */}
                <div className="relative z-10 space-y-2">
                  <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                    CAREER GOALS
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                    Seeking software development internships, placement opportunities, and collaborative technical projects in full-stack, Web3, and AI development.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* CENTER: Stacked Headline, Switch, Supporting Copy, Red Button: Standard fade-up, delay 0.2s */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 border border-neutral-200 bg-neutral-50/50">
            <FadeUp delay={0.2} trigger="view" className="space-y-6">
              {/* Stacked Headline with last word red */}
              <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-black leading-[0.95] tracking-tight uppercase">
                <span>LOOKING FOR </span>
                <br />
                <span>SOFTWARE </span>
                <span className="text-[#E50914]">ROLES</span>
              </h2>

              {/* Light Rounded Segmented Control */}
              <div className="inline-flex p-1 bg-neutral-200 rounded-full border border-neutral-300">
                <button
                  onClick={() => setActivePlan('Internship')}
                  className={`px-5 py-2 text-xs font-headline tracking-wider uppercase transition-all rounded-full cursor-pointer ${
                    activePlan === 'Internship'
                      ? 'bg-black text-white shadow-md'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  Technical Internship
                </button>
                <button
                  onClick={() => setActivePlan('Academic & Projects')}
                  className={`px-5 py-2 text-xs font-headline tracking-wider uppercase transition-all rounded-full cursor-pointer ${
                    activePlan === 'Academic & Projects'
                      ? 'bg-black text-white shadow-md'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  Academic & Projects
                </button>
              </div>

              {/* Thin Divider with section-linked rotation mark */}
              <div className="border-t border-neutral-200 pt-2 flex justify-between items-center">
                <ScrollRotateMark targetAngle={-135} size={16} color="#E50914" />
              </div>

              {/* Supporting Copy */}
              <p className="text-sm text-neutral-600 leading-relaxed">
                Currently pursuing a B.E. in Computer Science and Engineering (2024–2028) at Dr. N.G.P. Institute of Technology. Experienced with Java, React, SQL, Solidity, and Python through hands-on project implementations and a 15-day Data Analytics Internship at Techvolt Software Pvt. Ltd.
              </p>

              {/* Red Action Button */}
              <div className="pt-4">
                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto bg-[#E50914] hover:bg-[#c90711] text-white font-headline text-xs sm:text-sm tracking-wider uppercase px-8 py-4 font-bold transition-all shadow-md hover:scale-[1.02] cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>CONNECT WITH ME</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT: Near-Black Opportunity Card */}
          <div className="lg:col-span-4 bg-[#0A0A0A] text-white p-8 sm:p-9 border border-neutral-900 shadow-2xl flex flex-col justify-between">
            <FadeUp delay={0.3} trigger="view" className="space-y-6">
              {/* Header Badges */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-headline tracking-widest text-[#E50914] font-bold uppercase">
                  {currentPlan.label}
                </span>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 border border-neutral-700 text-neutral-300">
                  {currentPlan.badge}
                </span>
              </div>

              {/* Header Metric */}
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
                  {currentPlan.price}
                </span>
                <span className="text-neutral-400 font-mono text-sm">
                  {currentPlan.period}
                </span>
              </div>

              {/* Supporting Paragraph */}
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {currentPlan.description}
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3 pt-4 border-t border-neutral-800 text-xs sm:text-sm text-neutral-300">
                {currentPlan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* White Button */}
              <div className="pt-6">
                <button
                  onClick={scrollToContact}
                  className="w-full bg-white hover:bg-neutral-200 text-black font-headline text-xs sm:text-sm tracking-wider uppercase px-8 py-4 font-bold transition-all shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  CONTACT LINGESH
                </button>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};
