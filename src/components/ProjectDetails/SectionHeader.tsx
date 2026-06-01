import React from 'react';

interface SectionHeaderProps {
  title: string;
}

function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="text-sm text-muted-foreground uppercase">{title}</h2>
    </div>
  );
}

export default SectionHeader;
