import React from 'react';
import { ScrollRotateMark } from './MotionPrimitives';

interface BottomNavProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onOpenMenu, onOpenContact }) => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-xl flex items-center justify-between bg-[#0A0A0A] border border-neutral-800 text-white shadow-2xl px-4 py-2.5 sm:px-6 sm:py-3 transition-transform duration-200">
      {/* Graphic Logo Mark on Left */}
      <div className="flex items-center gap-3">
        <ScrollRotateMark targetAngle={135} size={22} color="#E50914" />
        <span className="hidden sm:inline font-headline text-xs tracking-widest text-neutral-300 uppercase">
          LINGESH B
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenContact}
          className="text-xs font-headline tracking-wider text-neutral-300 hover:text-white transition-colors uppercase px-2 py-1 cursor-pointer"
        >
          CONTACT
        </button>

        <button
          onClick={onOpenMenu}
          className="bg-[#E50914] hover:bg-[#c90711] text-white font-headline text-xs sm:text-sm tracking-wider uppercase px-5 sm:px-6 py-2 transition-all cursor-pointer font-bold shadow-md hover:scale-105 active:scale-95"
        >
          MENU
        </button>
      </div>
    </div>
  );
};
