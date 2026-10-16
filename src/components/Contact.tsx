import React, { useState } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { AnimatedHeadline3D, FadeUp, ScrollRotateMark } from './MotionPrimitives';
import { Mail, ArrowUpRight, Check, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [directMessage, setDirectMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [sendStatus, setSendStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONTENT.contact.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!directMessage.trim()) {
      setSendStatus('Please enter a short message or note.');
      return;
    }
    const subject = encodeURIComponent('Opportunity / Project Inquiry for Lingesh');
    const body = encodeURIComponent(directMessage);
    window.location.href = `mailto:${PORTFOLIO_CONTENT.contact.email}?subject=${subject}&body=${body}`;
    setSendStatus('Email draft prepared in your email client.');
  };

  return (
    <section id="contact" className="relative w-full min-h-[90vh] py-28 sm:py-36 bg-[#111622] text-white overflow-hidden flex flex-col justify-between">
      {/* Full-Width Blue-Gray Textured Photographic Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1920&q=80"
          alt="Blue-Gray Textured Background"
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-[#0E131F]/80" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full flex-1 flex flex-col justify-between space-y-24">
        {/* UPPER LEFT: Huge "LET'S WORK TOGETHER" Heading with White Contact Button */}
        <div className="max-w-2xl space-y-8">
          {/* Availability badge: Fade-up, delay: 0.4s */}
          <FadeUp delay={0.4} trigger="view" className="flex items-center gap-3">
            <ScrollRotateMark targetAngle={135} size={20} color="#E50914" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              OPEN TO OPPORTUNITIES
            </span>
          </FadeUp>

          {/* Main heading: 3D character reveal, delay: 0.15s */}
          <h2 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white">
            <AnimatedHeadline3D
              text="LET’S"
              color="#FFFFFF"
              delayStart={0.15}
              trigger="view"
            />{' '}
            <AnimatedHeadline3D
              text="WORK"
              color="#E50914"
              delayStart={0.25}
              trigger="view"
            />
            <br />
            <AnimatedHeadline3D
              text="TOGETHER"
              color="#FFFFFF"
              delayStart={0.35}
              trigger="view"
            />
          </h2>

          {/* Introductory text: Standard fade-up, delay: 0.25s */}
          <FadeUp delay={0.25} trigger="view">
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md">
              Available for software development internships, placement opportunities, hackathons, and technical collaborations.
            </p>
          </FadeUp>

          {/* First contact group (button actions): delay 0.45s */}
          <FadeUp delay={0.45} trigger="view" className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`mailto:${PORTFOLIO_CONTENT.contact.email}?subject=Opportunity%20Inquiry%20for%20Lingesh`}
              className="bg-white hover:bg-neutral-200 text-black font-headline text-xs sm:text-sm tracking-wider uppercase px-8 py-4 font-bold transition-all shadow-xl hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>SEND AN EMAIL</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-6 py-4 border border-white/20 hover:border-white text-white font-headline text-xs tracking-wider uppercase transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">COPIED ADDRESS</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <span>COPY: {PORTFOLIO_CONTENT.contact.email}</span>
                </>
              )}
            </button>
          </FadeUp>

          {/* Second contact group (location): delay 0.5s */}
          <FadeUp delay={0.5} trigger="view" className="text-xs font-mono text-neutral-400 pt-2">
            <span>Location: </span>
            <span className="text-white">{PORTFOLIO_CONTENT.contact.location}</span>
          </FadeUp>
        </div>

        {/* LOWER RIGHT: Large Stacked "DROP A MESSAGE" Heading & Direct Email Form */}
        <div className="max-w-xl ml-auto text-left lg:text-right space-y-6">
          <h3 className="font-headline text-4xl sm:text-6xl text-white tracking-tight leading-[0.95]">
            <AnimatedHeadline3D
              text="DROP A"
              color="#FFFFFF"
              delayStart={0.3}
              trigger="view"
            />
            <br />
            <AnimatedHeadline3D
              text="MESSAGE"
              color="#E50914"
              delayStart={0.45}
              trigger="view"
            />
          </h3>

          <FadeUp delay={0.55} trigger="view">
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md ml-auto">
              Send a direct note regarding software development internships, project inquiries, or hackathon discussions.
            </p>
          </FadeUp>

          {/* Form wrapper: Standard fade-up, delay 0.6s. Animate form as coherent group */}
          <FadeUp delay={0.6} trigger="view">
            <form onSubmit={handleDirectSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md ml-auto">
              <input
                type="text"
                required
                value={directMessage}
                onChange={(e) => setDirectMessage(e.target.value)}
                placeholder="Enter your message or inquiry"
                className="flex-1 px-5 py-3.5 bg-neutral-900/90 border border-neutral-700 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-[#E50914] transition-colors rounded-none"
              />
              <button
                type="submit"
                className="bg-[#E50914] hover:bg-[#c90711] text-white font-headline text-xs tracking-wider uppercase px-6 py-3.5 font-bold transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND</span>
              </button>
            </form>

            {sendStatus && (
              <p className="text-xs font-mono text-emerald-400 pt-2 text-left lg:text-right">
                {sendStatus}
              </p>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
