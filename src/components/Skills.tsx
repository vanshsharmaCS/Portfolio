// Skills.js

import React from 'react';

const Skills = () => {
  return (
    <div className='my-8 flex flex-col justify-center'>
      <div className='text-5xl text-white text-center font-bold mb-4'>My Skills</div>
      <div className='flex flex-wrap gap-5 w-[50rem] justify-center md:ml-72'>
        <img src={'/c-program-icon.png'} alt="C" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/cpp.png'} alt="C++" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/j.png'} alt="Java" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/p.png'} alt="Python" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/html.png'} alt="HTML" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/css-icon.png'} alt="CSS" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/tw.png'} alt="Tailwind CSS" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/js.png'} alt="JavaScript" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/ts.png'} alt="TypeScript" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/rc.png'} alt="React" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/next.png'} alt="Next.js" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/nodejs.png'} alt="Node.js" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/ex.png'} alt="Express.js" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/md.png'} alt="Markdown" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
        <img src={'/f.png'} alt="Firebase" className='w-20 h-20 rounded-md  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg glowing' />
      </div>
    </div>
  );
}

export default Skills;
