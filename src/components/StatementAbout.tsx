import React, { useState, useRef } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { AnimatedHeadline3D, FadeUp, ScrollRotateMark } from './MotionPrimitives';
import { Play, X } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView, useReducedMotion } from 'motion/react';

export const StatementAbout: React.FC = () => {
  const [isPlayingReel, setIsPlayingReel] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const isBgInView = useInView(bgRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ['start end', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const smoothY = useSpring(rawY, { stiffness: 400, damping: 60, mass: 1 });

  return (
    <section id="about" className="relative w-full bg-[#0A0A0A] text-white pt-24 pb-28 sm:py-36 overflow-hidden">
      {/* Top Photographic Ambient Background Header with photographic scale reveal and parallax */}
      <div ref={bgRef} className="absolute top-0 inset-x-0 h-96 opacity-25 pointer-events-none overflow-hidden">
        {shouldReduceMotion ? (
          <img
            src={PORTFOLIO_CONTENT.statement.reelThumbnail}
            alt="Cinematic Blurred Light Background"
            className="w-full h-full object-cover filter blur-2xl contrast-125"
          />
        ) : (
          <motion.img
            src={PORTFOLIO_CONTENT.statement.reelThumbnail}
            alt="Cinematic Blurred Light Background"
            className="w-full h-[120%] -top-[10%] absolute inset-x-0 object-cover filter blur-2xl contrast-125 will-change-transform"
            style={{ y: smoothY }}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={isBgInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/70 to-[#0A0A0A]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Asymmetric Enormous Statement Across Opposite Sides */}
        <div className="space-y-4 mb-20 sm:mb-28">
          {/* First oversized statement: 3D character reveal, trigger: viewport, delay: 0.15s */}
          <div className="flex justify-start">
            <h2 className="font-headline text-4xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-none text-white">
              <AnimatedHeadline3D
                text="DRIVEN BY"
                color="#FFFFFF"
                delayStart={0.15}
                trigger="view"
              />{' '}
              <AnimatedHeadline3D
                text="DESIGN,"
                color="#E50914"
                delayStart={0.25}
                trigger="view"
              />
            </h2>
          </div>
          {/* Second oversized statement: 3D character reveal, trigger: viewport, delay: 0.3s */}
          <div className="flex justify-end text-right">
            <h2 className="font-headline text-4xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-none">
              <AnimatedHeadline3D
                text="POWERED BY"
                color="#E50914"
                delayStart={0.3}
                trigger="view"
              />{' '}
              <AnimatedHeadline3D
                text="PURPOSE"
                color="#FFFFFF"
                delayStart={0.4}
                trigger="view"
              />
            </h2>
          </div>
        </div>

        {/* Centered Capsule Reel Thumbnail with "PLAY REEL": Standard fade-up, delay: 0.3s */}
        <FadeUp delay={0.3} trigger="view" className="flex flex-col items-center justify-center my-14 sm:my-20">
          <div
            onClick={() => setIsPlayingReel(true)}
            className="group relative w-64 sm:w-80 h-36 sm:h-44 rounded-full overflow-hidden border border-neutral-700 bg-neutral-900 cursor-pointer shadow-2xl hover:border-[#E50914] transition-all hover:scale-105"
          >
            <img
              src={PORTFOLIO_CONTENT.statement.reelThumbnail}
              alt="Play Showreel"
              className="w-full h-full object-cover filter brightness-75 group-hover:brightness-90 transition-all"
            />
            <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 group-hover:bg-black/25 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 ml-1 fill-white" />
              </div>
              <span className="font-headline text-xs sm:text-sm tracking-wider uppercase font-bold text-white">
                PLAY REEL
              </span>
            </div>
          </div>
        </FadeUp>

        {/* Three Statistics: Reveal with delays 0.4, 0.5, 0.6 seconds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto py-12 border-y border-neutral-800 text-center">
          {PORTFOLIO_CONTENT.statement.stats.map((stat, idx) => (
            <FadeUp
              key={idx}
              trigger="view"
              delay={0.4 + idx * 0.1}
              className="space-y-2"
            >
              <div className="font-headline text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter tabular-nums">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-headline tracking-widest text-[#E50914] uppercase font-bold">
                {stat.label}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Short Centered Biography: Standard fade-up, delay: 0.7s */}
        <FadeUp delay={0.7} trigger="view" className="max-w-3xl mx-auto mt-14 text-center space-y-4">
          <ScrollRotateMark targetAngle={270} size={22} color="#E50914" />
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            {PORTFOLIO_CONTENT.statement.bio}
          </p>
        </FadeUp>
      </div>

      {/* Reel Video Modal */}
      {isPlayingReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="max-w-4xl w-full bg-black p-4 border border-neutral-800 shadow-2xl relative">
            <button
              onClick={() => setIsPlayingReel(false)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#E50914] cursor-pointer flex items-center gap-1 font-headline text-xs uppercase"
            >
              <span>CLOSE</span>
              <X className="w-5 h-5" />
            </button>
            <div className="w-full aspect-[16/9] bg-neutral-900 overflow-hidden">
              <video
                src={PORTFOLIO_CONTENT.statement.reelVideoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
