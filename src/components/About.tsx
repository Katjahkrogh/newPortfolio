import React from 'react';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { ResumeCard } from './ResumeCard';

const About = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'Shopify Liquid',
    'React',
    'Vite',
    'Next.js',
    'Astro',
    'CSS',
    'Tailwind',
    'Docker',
    'Python (Flask)',
    'ArangoDB',
    'MySQL',
    'Supabase',
    'Git',
    'Postman',
    'Figma',
  ];

  return (
    <section>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6">About</h2>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="mt-4 max-w-xl">
          <p className='mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur porro recusandae
            quaerat quis fugit consectetur. Necessitatibus nam perspiciatis totam enim quam et sit
            ducimus ea nihil sequi? Nobis, corrupti officia. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dolorum laborum quia officia delectus similique ipsum explicabo eos
            accusantium assumenda distinctio voluptatibus, recusandae odit illum impedit doloribus
            eveniet, temporibus itaque aut.
          </p>
          <div className="mt-6 mb-8">
            <h3 className="text-lg sm:text-xl font-bold">Skills</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                <Badge key={index} className="text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        <section className="flex gap-10">
          <Separator className=" hidden lg:my-4 lg:block" orientation="vertical" />
          <section className='flex flex-col gap-8'>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Work Experience</h3>
              <div className="flex flex-col gap-4 mt-4">
                <ResumeCard
                  logoUrl="/black-lemon_logo.webp"
                  altText="Black Lemon logo"
                  title="Black Lemon"
                  subtitle="Intern Developer"
                  period="Jan. 2024 - Apr. 2024"
                  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quos totam libero incidunt repudiandae? Illo architecto consequatur corrupti culpa sed, nisi repellat praesentium eum cumque! Natus voluptatibus ea iusto maiores."
                />
                <ResumeCard
                  logoUrl="/norlys-logo.webp"
                  altText="Norlys logo"
                  title="Norlys"
                  subtitle="Backoffice Specialist"
                  period="May 2021 - Apr. 2024"
                  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quos totam libero incidunt repudiandae? Illo architecto consequatur corrupti culpa sed, nisi repellat praesentium eum cumque! Natus voluptatibus ea iusto maiores."
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Education</h3>
              <div className="flex flex-col gap-4 mt-4">
                <ResumeCard
                  logoUrl="/kea-logo.webp"
                  altText="Kea logo"
                  title="KEA"
                  subtitle="Bachelor in Web Development"
                  period="2024 - Present"
                  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quos totam libero incidunt repudiandae? Illo architecto consequatur corrupti culpa sed, nisi repellat praesentium eum cumque! Natus voluptatibus ea iusto maiores."
                />
                <ResumeCard
                  logoUrl="/kea-logo.webp"
                  altText="Norlys logo"
                  title="KEA"
                  subtitle="AP in Multimedia Design"
                  period="2022 - 2024"
                  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quos totam libero incidunt repudiandae? Illo architecto consequatur corrupti culpa sed, nisi repellat praesentium eum cumque! Natus voluptatibus ea iusto maiores."
                />
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
