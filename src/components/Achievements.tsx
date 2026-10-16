import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { Award, FileText, Timer, Sparkles, Users, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  const certifications = ACHIEVEMENTS.filter((item) => item.type === 'Certification');
  const activities = ACHIEVEMENTS.filter((item) => item.type !== 'Certification');

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Certification':
        return <Award className="w-5 h-5 text-blue-400" />;
      case 'Presentation':
        return <FileText className="w-5 h-5 text-emerald-400" />;
      case 'Hackathon':
        return <Timer className="w-5 h-5 text-amber-400" />;
      case 'Workshop':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Leadership':
        return <Users className="w-5 h-5 text-indigo-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <>
      {/* 1. Certifications Section */}
      <section id="certifications" className="py-24 border-t border-white/[0.08] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              Accreditations
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Certifications & Training
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Verified technical credentials in distributed systems, internet of things, and structured AI engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card3D key={cert.id} maxTilt={6}>
                <div className="h-full p-6 sm:p-8 rounded-3xl framer-card flex flex-col justify-between space-y-5 preserve-3d">
                  <div className="space-y-4">
                    <div
                      className="flex items-center justify-between"
                      style={{ transform: 'translateZ(18px)' }}
                    >
                      <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-md">
                        {getTypeIcon(cert.type)}
                      </div>
                      <span className="text-xs text-blue-400 font-bold px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 font-mono-code flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                        <span>Verified</span>
                      </span>
                    </div>

                    <div className="space-y-1.5" style={{ transform: 'translateZ(14px)' }}>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-semibold">
                        {cert.organization}
                      </p>
                    </div>

                    {cert.description && (
                      <p className="text-xs text-slate-400 leading-relaxed" style={{ transform: 'translateZ(10px)' }}>
                        {cert.description}
                      </p>
                    )}
                  </div>

                  <div
                    className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-500 font-mono-code"
                    style={{ transform: 'translateZ(12px)' }}
                  >
                    <span>OFFICIAL CURRICULUM</span>
                    <span className="text-emerald-400 font-semibold">COMPLETED</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Achievements & Activities Section */}
      <section id="achievements" className="py-24 border-t border-white/[0.08] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              Co-Curricular Engagements
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Achievements & Activities
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Hackathons, research presentations, technical workshops, and institutional leadership roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act) => (
              <Card3D key={act.id} maxTilt={6}>
                <div className="h-full p-6 sm:p-8 rounded-3xl framer-card flex flex-col justify-between space-y-5 preserve-3d">
                  <div className="space-y-4">
                    <div
                      className="flex items-center justify-between"
                      style={{ transform: 'translateZ(18px)' }}
                    >
                      <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 shadow-md">
                        {getTypeIcon(act.type)}
                      </div>
                      <span className="text-xs font-semibold text-slate-200 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                        {act.type}
                      </span>
                    </div>

                    <div className="space-y-1.5" style={{ transform: 'translateZ(14px)' }}>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {act.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-semibold">
                        {act.organization}
                      </p>
                    </div>

                    {act.description && (
                      <p className="text-xs text-slate-400 leading-relaxed" style={{ transform: 'translateZ(10px)' }}>
                        {act.description}
                      </p>
                    )}
                  </div>

                  <div
                    className="pt-4 border-t border-white/[0.08] text-xs text-slate-500 font-mono-code"
                    style={{ transform: 'translateZ(12px)' }}
                  >
                    <span>TECHNICAL ENGAGEMENT</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
