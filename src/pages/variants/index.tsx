import { motion } from 'framer-motion';
import { useState } from 'react';
import { Layout } from '../../components/molecules/layout/Layout';

/* DEMO 1 - RECTANGLE  */
const rectangleVariants = {
  hidden: {
    opacity: 0,
    width: 0,
    transition: { type: 'tween', duration: 0.4, ease: 'easeInOut' },
  },
  visible: {
    width: '50vw',
    opacity: 1,
    transition: { type: 'tween', duration: 3, ease: 'easeInOut' },
  },
};

/* DEMO 2 - RECTANGLES  */
const rectanglesContainerVariants = {
  hidden: {
    background: '#fff',
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
  visible: {
    background: '#F4F4',
    transition: {
      staggerChildren: 0.25,
      when: 'beforeChildren',
    },
  },
};
const rectanglesVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  // hidden: (i: number) => ({
  //   opacity: 0,
  //   x: -20,
  //   transition: {
  //     delay: i * 0.3,
  //     type: 'tween',
  //     ease: 'easeInOut',
  //   },
  // }),
  // visible: (i: number) => ({
  //   opacity: 1,
  //   x: 0,
  //   transition: {
  //     delay: i * 0.3,
  //     type: 'tween',
  //     ease: 'easeInOut',
  //   },
  // }),
};

export default function Variants() {
  const [animateRectangle, setAnimateRectangle] = useState(false);
  const [animateRectangles, setAnimateRectangles] = useState(false);

  return (
    <Layout>
      <div className="default-grid h-screen content-center items-center">
        <div className="col-span-full mb-10">
          <button
            onClick={() => setAnimateRectangle(!animateRectangle)}
            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 mb-10"
          >
            Animate rectangle
          </button>
          <motion.div
            initial="hidden"
            animate={animateRectangle ? 'visible' : 'hidden'}
            variants={rectangleVariants}
            className="h-[25rem] bg-primary-400"
          />
        </div>
        <div className="col-span-full">
          <button
            onClick={() => setAnimateRectangles(!animateRectangles)}
            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 mb-10"
          >
            Animate rectangles
          </button>

          <motion.ul
            initial="hidden"
            animate={animateRectangles ? 'visible' : 'hidden'}
            variants={rectanglesContainerVariants}
            className="flex gap-5 p-5"
          >
            {Array.from(Array(11)).map((_, index) => (
              <motion.li
                variants={rectanglesVariants}
                // custom={index}
                key={index}
                className={`w-[10rem] h-[10rem] bg-primary-${
                  (index + 1) * 100
                }`}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </Layout>
  );
}
