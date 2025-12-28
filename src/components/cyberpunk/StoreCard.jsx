import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function StoreCard({ 
  image, 
  title, 
  tags = [],
  delay = 0 
}) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative cursor-pointer"
    >
      {/* Card glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-violet-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-violet-600/20 rounded-2xl blur-xl transition-all duration-500" />
      
      <div className="relative bg-gradient-to-br from-blue-950/40 via-purple-950/40 to-violet-950/40 border border-blue-500/20 rounded-2xl overflow-hidden backdrop-blur-xl group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
        {/* Image container */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Download button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold flex items-center gap-2 shadow-lg shadow-purple-500/50 transform scale-90 group-hover:scale-100 transition-transform">
              <Download className="w-5 h-5" />
              Download
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-3">
            {title}
          </h3>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs font-medium border px-2 py-0.5 bg-purple-500/20 text-purple-300 border-purple-500/40"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}