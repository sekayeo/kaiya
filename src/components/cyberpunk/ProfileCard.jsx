import React from 'react';
import { motion } from 'framer-motion';
import { Verified } from 'lucide-react';

export default function ProfileCard({ 
  avatar, 
  name, 
  username, 
  bio, 
  verified = false 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Card glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50" />
      
      <div className="relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/50 rounded-br-3xl" />
        
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-60 animate-pulse" />
            <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full rounded-full object-cover border-2 border-black"
              />
            </div>
            
            {/* Online indicator */}
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black animate-pulse" />
          </div>
          
          {/* Name & Username */}
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-white">{name}</h1>
            {verified && (
              <Verified className="w-5 h-5 text-cyan-400" />
            )}
          </div>
          
          <p className="text-cyan-400/80 font-mono text-sm mb-4">@{username}</p>
          
          {/* Bio */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            {bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}