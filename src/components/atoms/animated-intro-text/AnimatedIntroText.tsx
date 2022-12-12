import React from 'react';
import { motion } from 'framer-motion';
import { INTRO_SUBTITLE, INTRO_TEXT } from 'src/utils';

const colors = [
  '#1B2B4B',
  '#20345A',
  '#2A4679',
  '#304F88',
  '#355797',
  '#3A60A6',
  '',
  '#4069B5',
  '#4A73BF',
  '#597FC5',
  '#688ACA',
  '#7796CF',
  '#86A2D5',
];

const titleVariants = {
  hidden: {
    y: -50,
    opacity: 0,
    color: '#1B2B4B',
  },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    color: colors[i],
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
      delay: i * 0.06,
      color: {
        type: 'easeInOut',
        delay: i * 0.085,
      },
    },
  }),
};

const subtitleVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: i % 2 === 0 ? -15 : 15,
  }),
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
      delay: i * 0.06,
    },
  }),
};

export const AnimatedIntroText = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="heading-h1 text-center">
        {Array.from(INTRO_TEXT).map((char, index) => {
          return (
            <motion.span
              custom={index}
              variants={titleVariants}
              initial="hidden"
              animate="show"
              key={`${char}${index}`}
              className={`inline-block ${char === ' ' ? 'mx-4' : ''}`}
            >
              {char}
            </motion.span>
          );
        })}
      </h1>

      <motion.h2 className="heading-h2 text-primary-400 -mt-5">
        {Array.from(INTRO_SUBTITLE).map((char, index) => {
          return (
            <motion.span
              custom={index}
              variants={subtitleVariants}
              initial="hidden"
              animate="show"
              key={`${char}${index}`}
              className={`inline-block ${char === ' ' ? 'mx-2' : ''}`}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h2>
    </div>
  );
};
