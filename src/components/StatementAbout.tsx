import React, { useState } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { CrosshairMark } from './CrosshairMark';
import { Play, X } from 'lucide-react';

export const StatementAbout: React.FC = () => {
  const [isPlayingReel, setIsPlayingReel] = useState(false);

  return (
    <section id="about" className="relative w-full bg-[#0A0A0A] text-white pt-24 pb-28 sm:py-36 overflow-hidden">
      {/* Top Photographic Ambient Background Header */}
      <div className="absolute top-0 inset-x-0 h-96 opacity-25 pointer-events-none overflow-hidden">
        <img
          src={PORTFOLIO_CONTENT.statement.reelThumbnail}
          alt="Cinematic Blurred Light Background"
          className="w-full h-full object-cover filter blur-2xl contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/70 to-[#0A0A0A]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Asymmetric Enormous Statement Across Opposite Sides */}
        <div className="space-y-4 mb-20 sm:mb-28">
          <div className="flex justify-start">
            <h2 className="font-headline text-4xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-none text-white">
              <span>DRIVEN BY </span>
              <span className="text-[#E50914]">DESIGN,</span>
            </h2>
          </div>
          <div className="flex justify-end text-right">
            <h2 className="font-headline text-4xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-none">
              <span className="text-[#E50914]">POWERED BY </span>
              <span className="text-white">PURPOSE</span>
            </h2>
          </div>
        </div>

        {/* Centered Capsule Reel Thumbnail with "PLAY REEL" */}
        <div className="flex flex-col items-center justify-center my-14 sm:my-20">
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
        </div>

        {/* Three Statistics: Large White Numbers and Smaller Red Captions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto py-12 border-y border-neutral-800 text-center">
          {PORTFOLIO_CONTENT.statement.stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="font-headline text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter tabular-nums">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-headline tracking-widest text-[#E50914] uppercase font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Short Centered Biography */}
        <div className="max-w-3xl mx-auto mt-14 text-center space-y-4">
          <CrosshairMark size={22} color="default" spin={true} />
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            {PORTFOLIO_CONTENT.statement.bio}
          </p>
        </div>
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
