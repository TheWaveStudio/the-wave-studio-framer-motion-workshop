import { motion } from 'framer-motion';
import { useState } from 'react';
import { Layout } from '../../components/molecules/layout/Layout';
import { Switch } from 'src/components/atoms/switch/Switch';
import { INGREDIENTS } from 'src/utils';

export default function LayoutId() {
  const [selectedTab, setSelectedTab] = useState(INGREDIENTS[0]);

  return (
    <Layout>
      <div className="default-grid h-screen content-center items-center">
        <div className="col-span-full flex flex-col items-center mb-20">
          <Switch />
        </div>
        <div className="col-span-full flex flex-col items-center">
          <nav className="max-w-[400px] w-full rounded-md">
            <ul className="flex gap-5 border-b-stone-200 border-b-2 justify-between">
              {INGREDIENTS.map((item) => (
                <li
                  key={item.label}
                  className="p-5 cursor-pointer relative"
                  onClick={() => setSelectedTab(item)}
                >
                  <span
                    className={`relative z-10 ${
                      item === selectedTab ? 'font-bold' : ''
                    }`}
                  >{`${item.icon} ${item.label}`}</span>
                  {item === selectedTab ? (
                    <motion.div
                      className="h-full w-full bg-gray-200 border-b-primary-400 border-b-2 absolute -bottom-1 left-0"
                      layoutId="underlined"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  );
}
