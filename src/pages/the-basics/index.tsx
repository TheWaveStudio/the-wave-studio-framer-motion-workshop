import { motion } from 'framer-motion';
import { useState } from 'react';
import { Layout } from '../../components/molecules/layout/Layout';

export default function TheBasics() {
  const [animationState, setAnimationState] = useState('');

  return (
    <Layout>
      <div className="default-grid h-screen content-center items-center">
        <div className="col-span-full">
          <h3 className="heading-hhttps://meet.google.com/nyj-qapd-cms3">
            {animationState}
          </h3>
        </div>

        {/* FRAMER MOTION */}
        <motion.div
          initial={{ opacity: 0, width: '0vw' }}
          animate={{ width: '50vw', opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          // transition={{ type: 'spring', duration: 1, bounce: 0.6 }}
          // transition={{
          //   type: 'spring',
          //   damping: 2, // smorzamento
          //   stiffness: 60, // rigidità
          //   mass: 4, // massa
          //   // velocity: 2, // velocità
          // }}
          // drag
          // whileDrag={{ scale: 1.2 }}
          // whileTap={{ scale: 1.2 }}
          onAnimationStart={() => setAnimationState('STARTED')}
          onAnimationComplete={() => setAnimationState('COMPLETED')}
          className="h-[25rem] bg-primary-400"
        />
        {/* END FRAMER MOTION */}
      </div>
    </Layout>
  );
}
