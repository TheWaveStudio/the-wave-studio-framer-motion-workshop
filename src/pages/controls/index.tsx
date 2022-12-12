import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/molecules/layout/Layout';

/* DEMO 1 - SQUARE  */
const squareVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { type: 'tween', duration: 1.5, ease: 'easeInOut' },
  },
  move: {
    x: '200%',
    transition: { type: 'spring', duration: 1.5 },
  },
  scaleAndRotate: {
    scale: 1.5,
    rotate: 45,
    transition: { type: 'spring', bounce: 0.3, duration: 1.5 },
  },
};

export default function Controls() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!isAuthenticated) {
      const interval = setInterval(() => setIsAuthenticated(true), 2000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      // ANONYMOUS SELF INVOKED FUNCTION
      (async () => {
        await controls.start('show');
        await controls.start('move');
        await controls.start('scaleAndRotate');
      })();

      return () => controls.stop();
    }
  }, [isAuthenticated]);

  return (
    <Layout>
      <div className="default-grid h-screen content-center items-center">
        <div className="col-span-full mb-10">
          <h2 className="heading-h2">
            {isAuthenticated
              ? 'User is authenticated'
              : 'User is not authenticated'}
          </h2>
        </div>
        <div className="col-span-full mb-10">
          {/* FRAMER MOTION */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={squareVariants}
            className="h-[25rem] w-[25rem] bg-primary-400 rounded-xl"
          />
          {/* END FRAMER MOTION */}
        </div>
      </div>
    </Layout>
  );
}
