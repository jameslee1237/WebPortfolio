"use client";
import { TypeAnimation } from 'react-type-animation';

const Texteffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Frontend Engineer',
        1800,
        'AI Automation Specialist',
        1800,
        'Software Engineer',
        1800,
      ]}
      speed={50}
      className="text-[1.5rem] md:text-[2rem] text-indigo-400 font-semibold tracking-tight"
      repeat={Infinity}
    />
  );
};

export default Texteffect;
