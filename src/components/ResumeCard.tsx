'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import React from 'react';

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="w-full group cursor-pointer"
      onClick={handleExpandClick} // Make the whole card clickable
    >
      <div className="flex items-start justify-between">
        {/* Left Section: Avatar, Title, Subtitle */}
        <div className="flex items-start gap-4 flex-grow">
          <Avatar className="w-12 h-12">
            <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
              {description && (
                <ChevronRightIcon
                  className={`w-4 h-4 text-gray-400 dark:text-gray-500 transform transition-transform duration-300 ${
                    isExpanded ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              )}
            </div>
            {subtitle && <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>}
          </div>
        </div>

        {/* Right Section: Period */}
        <div className="flex-shrink-0 text-sm text-gray-500 dark:text-gray-400">{period}</div>
      </div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? 'auto' : 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mt-2 text-sm text-gray-700 dark:text-gray-300"
      >
        {description}
      </motion.div>
    </div>
  );
};