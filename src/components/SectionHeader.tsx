import React from 'react';

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center mb-16 ${className}`}>
      {/* Custom 3D Logo Icon (Small) */}
      <div className="relative w-8 h-8 flex items-center justify-center transform -rotate-12 mb-6">
         <div className="absolute top-0 right-0 w-4 h-4 bg-primary-500 skew-y-30 origin-bottom-right" />
         <div className="absolute bottom-0 left-0 w-4 h-6 bg-secondary-500 skew-y-[-30deg] origin-top-left" />
         <div className="absolute bottom-0 right-0 w-4 h-6 bg-black skew-y-30 origin-top-right" />
      </div>
      <h2 className="text-5xl md:text-[3.5rem] font-bold tracking-tight text-black leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
