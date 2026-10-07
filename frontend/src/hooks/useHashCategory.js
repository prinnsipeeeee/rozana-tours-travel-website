import { useEffect, useState } from 'react';

// Syncs a section's selected category with the URL hash:
// #<sectionSlug> selects "all", #<sectionSlug>/<categorySlug> selects that category.
// Returns [selectedCategory, setSelectedCategory].
export function useHashCategory(sectionSlug) {
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const applyHash = () => {
      const match = window.location.hash.match(/^#([\w-]+)(?:\/([\w-]+))?$/);
      if (!match || match[1] !== sectionSlug) return;
      setCategory(match[2] || 'all');
      document
        .getElementById(sectionSlug)
        ?.scrollIntoView({ behavior: 'smooth' });
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, [sectionSlug]);

  return [category, setCategory];
}
