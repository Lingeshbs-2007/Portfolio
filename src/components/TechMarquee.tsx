import React from 'react';
import { Blocks, Code2, Database, Layout, Server, Terminal, Wrench, Shield, Cpu, Sparkles } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  badge?: string;
}

export const TechMarquee: React.FC = () => {
  const techItems: TechItem[] = [
    { name: 'React.js', category: 'Frontend', icon: <Layout className="w-3.5 h-3.5 text-sky-400" /> },
    { name: 'Solidity', category: 'Smart Contracts', icon: <Blocks className="w-3.5 h-3.5 text-blue-400" /> },
    { name: 'Ethereum', category: 'Blockchain', icon: <Shield className="w-3.5 h-3.5 text-indigo-400" /> },
    { name: 'Java', category: 'Core Language', icon: <Code2 className="w-3.5 h-3.5 text-amber-400" /> },
    { name: 'Python', category: 'Automation & AI', icon: <Terminal className="w-3.5 h-3.5 text-emerald-400" /> },
    { name: 'JavaScript', category: 'Web', icon: <Code2 className="w-3.5 h-3.5 text-yellow-400" /> },
    { name: 'Node.js', category: 'Backend', icon: <Server className="w-3.5 h-3.5 text-emerald-400" /> },
    { name: 'SQL', category: 'Database', icon: <Database className="w-3.5 h-3.5 text-indigo-400" /> },
    { name: 'MongoDB', category: 'NoSQL', icon: <Database className="w-3.5 h-3.5 text-emerald-400" /> },
    { name: 'MetaMask', category: 'Web3 Wallet', icon: <Blocks className="w-3.5 h-3.5 text-orange-400" /> },
    { name: 'Ethers.js', category: 'Web3 Lib', icon: <Blocks className="w-3.5 h-3.5 text-purple-400" />, badge: 'Learning' },
    { name: 'Express.js', category: 'Backend', icon: <Server className="w-3.5 h-3.5 text-slate-300" />, badge: 'Learning' },
    { name: 'IPFS', category: 'Decentralized Storage', icon: <Shield className="w-3.5 h-3.5 text-teal-400" /> },
    { name: 'Git & GitHub', category: 'Version Control', icon: <Wrench className="w-3.5 h-3.5 text-slate-300" /> },
  ];

  // Repeat items for seamless infinite marquee loop
  const marqueeItems = [...techItems, ...techItems];

  return (
    <div className="relative w-full py-6 overflow-hidden border-y border-white/[0.08] bg-[#07090f]/60 backdrop-blur-md">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#06080e] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#06080e] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-4">
        {marqueeItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-blue-400/30 transition-all duration-200 shrink-0 cursor-default shadow-xs hover:scale-105 group"
          >
            <div className="p-1.5 rounded-lg bg-black/40 border border-white/10 group-hover:border-blue-400/40 transition-colors">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono-code">
                {item.category}
              </span>
            </div>
            {item.badge && (
              <span className="ml-1 text-[9px] font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-1.5 py-0.5 rounded-md">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
