import React from 'react';
import { Badge } from '@/components/ui/badge';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { Safari } from './magicui/safari';

interface Props {
  title: string;
  href: string;
  url: string;
  description: string;
  tags: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  image?: string;
}

export function ProjectCard({ title, href, url, description, tags, links, image }: Props) {
  return (
    <section className="flex flex-col overflow-hidden h-full">
      {image && (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
          <Safari
            url={url}
            className="size-full cursor-pointer transition-transform duration-300 hover:scale-105"
            imageSrc={image}
          />
        </Link>
      )}
      <section className="grid gap-4 py-4 px-2">
        <div>
          <h3 className="text-lg sm:text-2xl mb-4">{title}</h3>
          <div className="prose max-w-full text-sm text-muted-foreground dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>
        </div>
        <div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <Badge key={tag} className="px-2 py-1 text-xs" variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div>
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer">
                  <Badge className="flex items-center gap-2 px-2 py-1 text-sm transition-transform duration-300 hover:scale-105">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
