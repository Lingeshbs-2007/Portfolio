import React, { useEffect } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { ScrollRotateMark } from './MotionPrimitives';
import { X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const links = [
    { label: 'HOME', href: '#hero' },
    { label: 'SELECTED WORK', href: '#projects' },
    { label: 'STATEMENT & ABOUT', href: '#about' },
    { label: 'EDUCATION & CREDENTIALS', href: '#academics' },
    { label: 'TECHNICAL FOCUS', href: '#services' },
    { label: 'ENGINEERING PROCESS', href: '#process' },
    { label: 'ACTIVITIES & HACKATHONS', href: '#testimonials' },
    { label: 'INTERNSHIP & GOALS', href: '#pricing' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#0A0A0A] text-white flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-y-auto"
        >
          {/* Top Bar of Menu Overlay */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
            <div className="flex items-center gap-3">
              <ScrollRotateMark targetAngle={135} size={24} color="#E50914" />
              <span className="font-headline text-lg tracking-wider text-white">
                {PORTFOLIO_CONTENT.hero.nameLine1} {PORTFOLIO_CONTENT.hero.nameLine2}
              </span>
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#E50914] text-white font-headline text-sm uppercase tracking-wider hover:bg-[#c90711] transition-colors cursor-pointer"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Large Nav Links */}
          <div className="py-8 my-auto">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {links.map((link, idx) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="group flex items-center justify-between text-left font-headline text-3xl sm:text-5xl lg:text-6xl text-white hover:text-[#E50914] transition-colors cursor-pointer"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm font-mono text-neutral-500 group-hover:text-[#E50914]">
                      0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 sm:w-10 sm:h-10 text-neutral-600 group-hover:text-[#E50914] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom info of Menu */}
          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div>
              <span className="text-neutral-500">LOCATION: </span>
              <span className="text-white">{PORTFOLIO_CONTENT.hero.location}</span>
            </div>
            <div className="flex flex-wrap gap-6">
              {PORTFOLIO_CONTENT.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-[#E50914] transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
