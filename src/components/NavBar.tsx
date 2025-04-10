import React from 'react';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md flex justify-between p-4 md:px-6">
      <section className="flex items-center">
        <span className="text-lg font-medium">KATJA KROGH.</span>
      </section>
      <section className="flex items-center justify-between pt-1 gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://github.com/Katjahkrogh" rel="noopener noreferrer">
              <FaGithub className="h-[1.5rem] w-[1.5rem] text-neutral-800 dark:text-neutral-200" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>GitHub Profile</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://linkedin.com/in/katja-hvid-krogh-59329b207" rel="noopener noreferrer" className="pr-3 pl-2">
              <FaLinkedin className="h-[1.5rem] w-[1.5rem] text-neutral-800 dark:text-neutral-200" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn Profile</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="h-full" />
        <ModeToggle />
      </section>
    </nav>
  );
};

export default NavBar;