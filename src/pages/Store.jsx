import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Package } from 'lucide-react';
import { createPageUrl } from "@/lib/utils"
import CyberpunkBackground from '@/components/cyberpunk/CyberpunkBackground'
import StoreCard from '@/components/cyberpunk/StoreCard'

export default function Store() {
  const products = [
    {
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop',
      title: 'Cyber City Texture Pack - Ultra HD',
      tags: ['Texture', 'Java', 'Bedrock', 'New']
    },
    {
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=400&fit=crop',
      title: 'Neon Weapons Mod - PvP Edition',
      tags: ['Mod', 'Java']
    },
    {
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=400&fit=crop',
      title: 'Futuristic Shader Pack v2.0',
      tags: ['Shader', 'Java', 'New']
    },
    {
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      title: 'Cyberpunk Armor & Tools Mod',
      tags: ['Mod', 'Bedrock', 'Java']
    },
    {
      image: 'https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=600&h=400&fit=crop',
      title: 'Glowing Blocks Texture Pack',
      tags: ['Texture', 'Bedrock']
    },
    {
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
      title: 'Tech City Map + Mods Bundle',
      tags: ['Mod', 'Texture', 'Java']
    },
  ];



  return (
    <div className="min-h-screen relative">
      <CyberpunkBackground />
      
      <div className="relative z-10 px-4 py-8 max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Link 
            to={createPageUrl('Home')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
              <Package className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300 font-medium">156 Packs</span>
            </div>
          </div>
        </motion.header>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-violet-600">
              CYBER
            </span>
            <span className="text-white">CRAFT</span>
          </h1>
          
          <p className="text-gray-300 max-w-md mx-auto text-lg mb-8">
            Premium Minecraft mods, texture packs & shaders. Transform your world.
          </p>
          
          {/* Separator */}
          <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-purple-600/50" />
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500/50 to-purple-600/50" />
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product, index) => (
            <StoreCard
              key={product.title}
              {...product}
              delay={0.1 * index}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2024 CyberCraft. All Minecraft content belongs to Mojang Studios.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Installation Guide</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Support</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Discord</a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}