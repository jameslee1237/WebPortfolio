"use client";
import { TypeAnimation } from 'react-type-animation';

const Texteffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Programmer',
        1500, 
        'Full stack Developer',
        1500,
        'Coder',
        1500,
        'Software Engineer',
         1500
      ]}
  
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default Texteffect;