import React from 'react';
import Image from 'next/image';
import { TextAnimate } from '@/components/magicui/text-animate';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-black h-screen w-full p-6 flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-8 lg:gap-16 -mt-2">
      <Image
        src="/portrait_cut.png"
        alt="Hero Image"
        className="h-64 w-auto sm:h-80 md:h-96 lg:h-[32rem] lg:ml-16"
        width={800}
        height={800}
      />
      <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left lg:max-w-3xl">
        <p className="text-xl md:text-3xl pb-1">Hi, I'm Katja 👋</p>
        <TextAnimate
          animation="blurIn"
          as="h1"
          duration={2.2}
          className="text-4xl md:text-5xl font-medium lg:text-6xl text-primary text-pretty max-w-2xl lg:max-w-full">
          Driven by Code, Creativity and Growth – A Developer in the Making.
        </TextAnimate>
      </div>
    </section>
  );
};

export default Hero;
