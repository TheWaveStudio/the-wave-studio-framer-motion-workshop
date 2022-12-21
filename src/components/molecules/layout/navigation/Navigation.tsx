import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useContext } from 'react';
import { AnimatedIntroLogo } from 'src/components/atoms/animated-intro-logo/AnimatedIntroLogo';
import { AppContext } from 'src/pages/_app';
import { NAV_ITEMS } from 'src/utils';

export const Navigation = () => {
  const { selectedNavItem, setSelectedNavItem } = useContext(AppContext);

  return (
    <nav className="w-screen  fixed bottom-0 left-0 bg-primary-400 flex content-center justify-center">
      <AnimatedIntroLogo
        className="flex justify-center items-center gap-10  ml-10 py-5"
        setSelectedNavItem={setSelectedNavItem}
      />

      <ul className="flex gap-10 mx-auto">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.label}
            onClick={() => setSelectedNavItem?.(item)}
            className="relative cursor-pointer"
          >
            <Link href={item.href || '#1'} className="h-full flex items-center">
              <motion.span
                className="relative z-10 block px-5 font-bold"
                initial={{ color: 'var(--color-ghost-white)' }}
                animate={{
                  color:
                    item === selectedNavItem
                      ? 'var(--color-primary-400)'
                      : 'var(--color-ghost-white)',
                }}
                transition={{ type: 'tween', duration: 0.6 }}
              >
                {item.label}
              </motion.span>
              {item === selectedNavItem ? (
                <motion.div
                  className="bg-ghost-white absolute inset-0 z-0"
                  layoutId="background"
                  transition={{ type: 'tween', duration: 0.3 }}
                />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
