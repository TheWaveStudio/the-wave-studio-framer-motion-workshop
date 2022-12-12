import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Layout } from '../../components/molecules/layout/Layout';

const shapeVariants = {
  hidden: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    width: '100%',
    transition: {
      type: 'tween',
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export default function InView() {
  const shapeRef = useRef<HTMLDivElement | null>(null);
  // const isInView = useInView(shapeRef);

  const [shapeHeight, setShapeHeight] = useState<number>(0);
  const isInView = useInView(shapeRef, {
    margin: `0px 0px -${shapeHeight + 85}px 0px`,
  });

  useEffect(
    () =>
      setShapeHeight(shapeRef?.current?.getBoundingClientRect().height || 0),
    []
  );

  return (
    <Layout>
      <div className="default-grid h-screen">
        <div className="col-span-full sticky top-20">
          <h3 className="heading-h3">
            The shape is: {isInView ? 'VISIBLE' : 'NOT VISIBLE'}
          </h3>
        </div>
        <div className="col-span-full pb-[10rem]">
          <motion.div
            ref={shapeRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={shapeVariants}
            className="h-[25rem] w-[25rem] bg-primary-400 mt-[100vh]"
          />
        </div>
      </div>
    </Layout>
  );
}
