import React from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';

export const EditorialPanel: React.FC = () => {
  return (
    <section className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[82vh] overflow-hidden bg-black">
      <img
        src={PORTFOLIO_CONTENT.editorialBanner.image}
        alt="Editorial Motion Panel"
        className="w-full h-full object-cover object-center filter contrast-125 saturate-110"
        loading="lazy"
      />
      {/* Subtle vignette border matching reference */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
    </section>
  );
};
