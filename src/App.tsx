import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { EditorialPanel } from './components/EditorialPanel';
import { Projects } from './components/Projects';
import { StatementAbout } from './components/StatementAbout';
import { Education } from './components/Education';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { MenuOverlay } from './components/MenuOverlay';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-black relative selection:bg-[#E50914] selection:text-white">
      {/* 1. Hero Section (3-part Swiss composition, capsule portrait, stacked typography) */}
      <Hero
        onOpenMenu={() => setMenuOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* 2. Full-Width Motion-Blurred Photographic Panel */}
      <EditorialPanel />

      {/* 3. Selected Projects (3-column grid, 5 verified projects) */}
      <Projects />

      {/* 4. Statement & About (DRIVEN BY DESIGN, POWERED BY PURPOSE, capsule reel, stats, bio) */}
      <StatementAbout />

      {/* 5. Education & Credentials (Degrees, Techvolt Internship, Certifications, LeetCode, Skills) */}
      <Education />

      {/* 6. Technical Interests & Skills */}
      <Services />

      {/* 6. Process & Brand Logos (FROM IDEA to LAUNCH, 4 cards, brand logos) */}
      <Process />

      {/* 7. Testimonials (Conversational message UI, dark photographic overlay) */}
      <Testimonials />

      {/* 8. Pricing (3-part layout, tall capsule image, monthly/project switch, dark card) */}
      <Pricing />

      {/* 9. Contact & Newsletter (Blue-gray textured photo, diagonal composition) */}
      <Contact />

      {/* 10. Footer (Oversized stacked name red/white, red capsule BOOK A CALL) */}
      <Footer />

      {/* Floating Near-Black Bottom Navigation Bar with Asterisk Logo & Red Menu Button */}
      <BottomNav
        onOpenMenu={() => setMenuOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Full-Screen Cinematic Overlay Menu */}
      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </div>
  );
}
