'use client';

import { motion } from 'framer-motion';

export default function MorphEffect({ children, className = '' }) {
  return (
    <motion.div
      className={`morph-effect ${className}`}
      animate={{
        borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%', '60% 40% 30% 70% / 60% 30% 70% 40%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}