import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { Layout } from '../../components/molecules/layout/Layout';

export default function Hooks() {
  const { scrollY, scrollYProgress } = useScroll();

  // Instead `scrollYProgress` directly, we can use the `useSpring` hook to make
  // the mouse scroll look more fluid!
  const mouseScroll = useSpring(scrollYProgress);

  // const x = useTransform(
  //   scrollYProgress,
  //   // Map x from these values:
  //   [0, 1],
  //   // Into these values:
  //   ['0', '50vw']
  // );

  // const y = useTransform(
  //   scrollYProgress,
  //   // Map x from these values:
  //   [0, 1],
  //   // Into these values:
  //   ['0', '10vw']
  // );
  const scale = useTransform(
    mouseScroll,
    // Map x from these values:
    [0, 1],
    // Into these values:
    [1, 5]
  );

  const rotate = useTransform(
    mouseScroll,
    // Map x from these values:
    [0, 1],
    // Into these values:
    [0, 45]
  );

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log('Page scroll: ', latest);
    });
  }, []);

  return (
    <Layout>
      <div className="default-grid content-center items-center h-[150vh]">
        <div className="col-span-full">
          <motion.div
            style={{ opacity: scrollYProgress, scale, rotate }}
            className="bg-primary-500 w-[10rem] h-[10rem] fixed top-[40%] left-[50%]"
          />
        </div>
      </div>
    </Layout>
  );
}
