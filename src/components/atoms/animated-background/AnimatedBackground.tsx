import { motion } from 'framer-motion';
import React from 'react';

export const AnimatedBackground = () => {
  return (
    <svg className="fixed inset-0 z-[-1] w-full h-full">
      <motion.linearGradient
        id="gradient"
        initial={{ gradientTransform: 'rotate(0)' }}
        animate={{
          gradientTransform: 'rotate(360)',
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <stop offset="5%" stopColor="#f3e7e9" />
        <stop offset="95%" stopColor="#e3eeff" />
      </motion.linearGradient>

      <motion.rect className="w-full h-full" fill="url(#gradient)" />
    </svg>
  );
};
