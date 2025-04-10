import React from 'react';
import Image from 'next/image';
import { TextAnimate } from '@/components/magicui/text-animate';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-black h-full w-full p-6 rounded-b-[90px] md:rounded-b-[180px] flex flex-col sm:flex-row justify-center items-center lg:justify-center gap-8 lg:gap-32 -mt-10 sm:-mt-24">
      <Image
        src="/portrait_cut.png"
        alt="Hero Image"
        className="h-64 w-auto sm:h-80 md:h-96 lg:h-[28rem]"
        width={800}
        height={800}
      />
      <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
        <p className="text-lg font-medium md:text-2xl pb-1">
          Hi, I'm Katja 👋
        </p>
        <TextAnimate
          animation="blurIn"
          as="h1"
          duration={2.2}
          className="text-3xl md:text-5xl lg:text-6xl font-medium text-primary text-pretty max-w-2xl lg:max-w-xl">
          Driven by Code, Creativity, and Growth – A Developer in the Making.
        </TextAnimate>
      </div>
    </section>
  );
};

export default Hero;
