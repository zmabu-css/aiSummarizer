import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>

      </nav>

      <h1 className='head_text'>
        AI Article Summarizer<br className='max-md:hidden' />
        <span className=''></span>
      </h1>
      <h2 className='desc'>
        If you're feeling a little too lazy to be reading an 800 word article, just paste it here, and AI will do it for you!
      </h2>
    </header>
  );
};

export default Hero;
