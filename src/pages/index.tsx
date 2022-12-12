import { Layout } from '../components/molecules/layout/Layout';
import { AnimatedIntroText } from '../components/atoms/animated-intro-text/AnimatedIntroText';
import { AnimatedBackground } from '../components/atoms/animated-background/AnimatedBackground';

export default function Home() {
  return (
    <Layout>
      <AnimatedBackground />
      <div className="default-grid h-screen content-center items-center">
        <div className="col-span-full mb-[20rem]">
          <AnimatedIntroText />
        </div>
      </div>
    </Layout>
  );
}
