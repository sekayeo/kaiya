import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Store } from 'lucide-react'
import { createPageUrl } from "@/lib/utils"
import CyberpunkBackground from '@/components/cyberpunk/CyberpunkBackground'
import ProfileCard from '@/components/cyberpunk/ProfileCard'
import SocialLink from '@/components/cyberpunk/SocialLink'
import GlowButton from '@/components/cyberpunk/GlowButton'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import DiscordIcon from '@/components/icons/DiscordIcon'
import TikTokIcon from '@/components/icons/TikTokIcon'

export default function Home() {
  const socialLinks = [
    { icon: WhatsAppIcon, label: 'WhatsApp Channel', href: 'https://whatsapp.com/channel', color: 'green' },
    { icon: Instagram, label: 'Follow on Instagram', href: 'https://instagram.com', color: 'pink' },
    { icon: DiscordIcon, label: 'Join our Discord', href: 'https://discord.com', color: 'purple' },
    { icon: Youtube, label: 'Subscribe on YouTube', href: 'https://youtube.com', color: 'red' },
    { icon: TikTokIcon, label: 'Follow on TikTok', href: 'https://tiktok.com', color: 'cyan' },
  ];

  return (
    <div className="min-h-screen relative">
      <CyberpunkBackground />
      
      <div className="relative z-10 px-4 py-12 max-w-md mx-auto">
        {/* Cyber decorative header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">Online Now</span>
          </div>
        </motion.div>

        {/* Profile Card */}
        <ProfileCard
          avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face"
          name="CyberNinja"
          username="cyberninja_gg"
          bio="Pro Gamer | Streamer | Content Creator. Join the cyber revolution. Let's game together! 🎮⚡"
          verified={true}
        />

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 space-y-3"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <SocialLink {...link} />
            </motion.div>
          ))}
        </motion.div>

        {/* Store CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <Link to={createPageUrl('Store')}>
            <GlowButton icon={Store} variant="purple">
              Visit My Store
            </GlowButton>
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-600 text-sm">
            <span className="font-mono">©</span>
            <span>2024 CyberNinja</span>
            <span className="text-cyan-500">|</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              LEVEL UP
            </span>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}