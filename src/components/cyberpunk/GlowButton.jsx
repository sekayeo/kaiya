import React from 'react';
import { cn } from "@/lib/utils";

export default function GlowButton({ 
  children, 
  className, 
  variant = 'cyan',
  href,
  onClick,
  icon: Icon 
}) {
  const variants = {
    cyan: 'from-cyan-500 to-blue-500 shadow-cyan-500/50 hover:shadow-cyan-400/70',
    purple: 'from-purple-500 to-pink-500 shadow-purple-500/50 hover:shadow-purple-400/70',
    magenta: 'from-pink-500 to-rose-500 shadow-pink-500/50 hover:shadow-pink-400/70',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative w-full px-6 py-4 rounded-xl font-medium text-white",
        "bg-gradient-to-r transition-all duration-300",
        "shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        "border border-white/10 backdrop-blur-sm",
        "flex items-center justify-center gap-3",
        variants[variant],
        className
      )}
    >
      {/* Glow effect */}
      <div className={cn(
        "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10",
        `bg-gradient-to-r ${variants[variant]}`
      )} />
      
      {Icon && <Icon className="w-5 h-5" />}
      <span className="relative z-10">{children}</span>
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </Component>
  );
}