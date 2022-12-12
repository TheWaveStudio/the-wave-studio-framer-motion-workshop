import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { removeItem } from 'src/utils';
import { Layout } from '../../components/molecules/layout/Layout';

const modalVariants = {
  hidden: {
    opacity: 0,
    y: '100%',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', duration: 0.9, bounce: 0.2 },
  },
  exit: {
    opacity: 0,
    y: '-100%',
  },
};

export default function TheBasics() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const count = useRef(0);
  const [items, setItems] = useState([0]);

  return (
    <Layout>
      <div className="default-grid h-screen content-center items-center">
        <div className="col-span-full mb-20">
          <button
            onClick={() => setIsAuthenticated(true)}
            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 mb-10"
          >
            Log In
          </button>
        </div>
        <div className="col-span-full mb-20">
          <AnimatePresence>
            {isAuthenticated && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="fixed inset-0 bg-primary-1200 w-full h-full z-10"
              >
                <div className="flex flex-col items-center content-center">
                  <h1 className="heading-h1">WELCOME USER</h1>
                  <button
                    onClick={() => setIsAuthenticated(false)}
                    className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 mb-10"
                  >
                    CLOSE
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="col-span-full">
          <button
            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 mb-10"
            onClick={() => {
              count.current++;
              setItems([...items, count.current]);
            }}
          >
            Add item
          </button>
          <ul className="flex flex-col gap-5">
            <AnimatePresence mode="sync">
              {items.map((id) => (
                <motion.li
                  // layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: 'spring' }}
                  key={id}
                  className="w-[18rem] h-[4rem] rounded-full bg-primary-500 cursor-pointer"
                  onClick={() => {
                    const newItems = [...items];
                    removeItem(newItems, id);
                    setItems(newItems);
                  }}
                />
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
