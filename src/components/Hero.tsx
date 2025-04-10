import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <Image
        src="/portrait_cut_2.png"
        alt="Hero Image"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Hero;
