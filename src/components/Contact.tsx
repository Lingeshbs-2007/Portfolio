import React, { useState } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { CrosshairMark } from './CrosshairMark';
import { Mail, ArrowUpRight, Check, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONTENT.contact.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('Please provide a valid email address.');
      return;
    }
    // Launch mailto for direct subscription connection
    const subject = encodeURIComponent('Portfolio Newsletter Subscription');
    const body = encodeURIComponent(`Please subscribe me to updates: ${newsletterEmail}`);
    window.location.href = `mailto:${PORTFOLIO_CONTENT.contact.email}?subject=${subject}&body=${body}`;
    setNewsletterStatus('Subscription draft prepared in email client.');
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
          <div className="flex items-center gap-3">
            <CrosshairMark size={20} color="red" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              AVAILABLE FOR HIRE
            </span>
          </div>

          <h2 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white">
            <span>LET’S </span>
            <span className="text-[#E50914]">WORK </span>
            <br />
            <span>TOGETHER</span>
          </h2>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`mailto:${PORTFOLIO_CONTENT.contact.email}?subject=Collaboration%20Inquiry`}
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
          </div>
        </div>

        {/* LOWER RIGHT: Large Stacked "STAY IN THE LOOP" Heading & Newsletter Input */}
        <div className="max-w-xl ml-auto text-left lg:text-right space-y-6">
          <h3 className="font-headline text-4xl sm:text-6xl text-white tracking-tight leading-[0.95]">
            <span>STAY IN </span>
            <br />
            <span className="text-[#E50914]">THE LOOP</span>
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-md ml-auto">
            Receive occasional dispatches regarding new smart contracts, published case studies, and full-stack software releases.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md ml-auto">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder={PORTFOLIO_CONTENT.contact.emailPlaceholder}
              className="flex-1 px-5 py-3.5 bg-neutral-900/90 border border-neutral-700 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-[#E50914] transition-colors rounded-none"
            />
            <button
              type="submit"
              className="bg-[#E50914] hover:bg-[#c90711] text-white font-headline text-xs tracking-wider uppercase px-6 py-3.5 font-bold transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
            >
              SUBMIT
            </button>
          </form>

          {newsletterStatus && (
            <p className="text-xs font-mono text-emerald-400 pt-1">
              {newsletterStatus}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
