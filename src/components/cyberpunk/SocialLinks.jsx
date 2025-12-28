import React from 'react';
import { cn } from "@/lib/utils";

export default function SocialLink({ 
  icon: Icon, 
  label, 
  href, 
  color = 'cyan' 
}) {
  const colors = {
    cyan: 'hover:border-cyan-400/60 hover:shadow-cyan-500/30 hover:bg-cyan-500/10',
    purple: 'hover:border-purple-400/60 hover:shadow-purple-500/30 hover:bg-purple-500/10',
    pink: 'hover:border-pink-400/60 hover:shadow-pink-500/30 hover:bg-pink-500/10',
    blue: 'hover:border-blue-400/60 hover:shadow-blue-500/30 hover:bg-blue-500/10',
    red: 'hover:border-red-400/60 hover:shadow-red-500/30 hover:bg-red-500/10',
    green: 'hover:border-green-400/60 hover:shadow-green-500/30 hover:bg-green-500/10',
  };

  const iconColors = {
    cyan: 'group-hover:text-cyan-400',
    purple: 'group-hover:text-purple-400',
    pink: 'group-hover:text-pink-400',
    blue: 'group-hover:text-blue-400',
    red: 'group-hover:text-red-400',
    green: 'group-hover:text-green-400',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex items-center gap-4 w-full px-5 py-4 rounded-xl",
        "bg-white/5 border border-white/10 backdrop-blur-md",
        "transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
        colors[color]
      )}
    >
      {/* Left accent line */}
      <div className={cn(
        "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 rounded-full",
        "group-hover:h-8 transition-all duration-300",
        color === 'cyan' && 'bg-cyan-400',
        color === 'purple' && 'bg-purple-400',
        color === 'pink' && 'bg-pink-400',
        color === 'blue' && 'bg-blue-400',
        color === 'red' && 'bg-red-400',
        color === 'green' && 'bg-green-400',
      )} />
      
      <div className={cn(
        "p-2 rounded-lg bg-white/5 border border-white/10",
        "transition-colors duration-300",
        iconColors[color]
      )}>
        <Icon className="w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-current" />
      </div>
      
      <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
        {label}
      </span>
      
      {/* Arrow */}
      <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}