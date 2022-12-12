import { motion } from 'framer-motion';
import React, { useState } from 'react';

import styles from './Switch.module.css';

export const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={styles['Switch']} data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div
        className={styles['handle']}
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      />
    </div>
  );
};
