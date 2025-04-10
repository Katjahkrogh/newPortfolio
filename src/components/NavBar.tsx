import React from 'react';
import { ModeToggle } from './ModeToggle';
import { Separator } from "@/components/ui/separator"

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background flex justify-between p-4 md:p-8">
      <section className="flex items-center">
        <span className=' text-xl'>KK</span>
      </section>
      <section className="flex items-center justify-between pt-1 gap-2">
        <Separator orientation="vertical" className="h-full"/>
        <ModeToggle />
      </section>
    </nav>
  );
};

export default NavBar;
