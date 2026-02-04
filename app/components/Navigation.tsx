'use client';

import { LEGAL_AREAS } from '@/lib/constants';

export default function Navigation() {
  const handleAreaClick = (area: string) => {
    const element = document.getElementById(area.replace(/\s+/g, '-').toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-light-bg border-b border-border py-4">
      <div className="container-custom">
        <div className="flex flex-wrap gap-2">
          {LEGAL_AREAS.map((area) => (
            <button
              key={area}
              onClick={() => handleAreaClick(area)}
              className="px-4 py-2 bg-white border border-border rounded-lg text-primary font-semibold hover:border-accent hover:text-accent transition-all"
            >
              {area}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
