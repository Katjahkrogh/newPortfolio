import React from 'react';
import { ProjectCard } from './ProjectCard';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { BlurFade } from './magicui/blur-fade';

const Projects = () => {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">Projects</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <BlurFade delay={0.35} inView>
          <ProjectCard
            title="Volt"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt totam assumenda, quos atque laborum nostrum magni ipsam temporibus consequuntur quaerat numquam, ad ipsa nobis repellendus possimus voluptatum doloremque accusamus"
            tags={[
              'Python (Flask)',
              'MixHTML',
              'MojoCSS',
              'MySQL',
              'Docker',
              'Postman',
              'PhpMyAdmin',
            ]}
            image="/volt.webp"
            href="https://katjakrogh.pythonanywhere.com/"
            url="katjakrogh.pythonanywhere.com"
            links={[
              {
                icon: <FaGlobe />,
                type: 'Website',
                href: 'https://katjakrogh.pythonanywhere.com/',
              },
              {
                icon: <FaGithub />,
                type: 'Source',
                href: 'https://github.com/Katjahkrogh/wolt-exam',
              },
            ]}
          />
        </BlurFade>
        <BlurFade delay={0.35 * 2} inView>
          <ProjectCard
            title="Nails By Sasha Melina"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt totam assumenda, quos atque laborum nostrum magni ipsam temporibus consequuntur quaerat numquam, ad ipsa nobis repellendus possimus voluptatum doloremque accusamus"
            tags={[
              'Next.js',
              'Javascript',
              'Tailwind',
              'Framer motion',
              'CSS',
              'Supabase',
              'Figma',
              'Design',
            ]}
            image="/nbsm.webp"
            href="https://nbsm-website.vercel.app/"
            url="nbsm-website.vercel.app"
            links={[
              {
                icon: <FaGlobe />,
                type: 'Website',
                href: 'https://nbsm-website.vercel.app/',
              },
              {
                icon: <FaGlobe />,
                type: 'Booking Site',
                href: 'https://nbsm-booking.vercel.app/',
              },
              {
                icon: <FaGithub />,
                type: 'Source',
                href: 'https://github.com/Katjahkrogh/nbsm-booking',
              },
            ]}
          />
        </BlurFade>
        <BlurFade delay={0.35 * 2} inView>
          <ProjectCard
            title="Foo Festival"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt totam assumenda, quos atque laborum nostrum magni ipsam temporibus consequuntur quaerat numquam, ad ipsa nobis repellendus possimus voluptatum doloremque accusamus"
            tags={[
              'Next.js',
              'Javascript',
              'Tailwind',
              'CSS',
              'Supabase',
              'Antdesign',
              'Figma',
              'Design',
            ]}
            image="/foofest.webp"
            href="https://nbsm-website.vercel.app/"
            url="nbsm-website.vercel.app"
            links={[
              {
                icon: <FaGlobe />,
                type: 'Website',
                href: 'https://foo-festival.vercel.app/',
              },
              {
                icon: <FaGlobe />,
                type: 'Booking Site',
                href: 'https://foo-shop.vercel.app/',
              },
              {
                icon: <FaGithub />,
                type: 'Source',
                href: 'https://github.com/Katjahkrogh/foo-shop',
              },
            ]}
          />
        </BlurFade>
      </section>
    </section>
  );
};

export default Projects;
