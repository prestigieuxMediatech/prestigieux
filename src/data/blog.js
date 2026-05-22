export const blogPosts = [
  {
    slug: 'meta-ads-roas-playbook-2026',
    title: 'The Meta Ads ROAS Playbook for 2026',
    excerpt:
      'How we structure creative testing, audience layering, and budget pacing to scale profitably past 4× ROAS.',
    category: 'Performance Marketing',
    author: 'Prestigieux Team',
    date: '2026-04-12',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    featured: true,
  },
  {
    slug: 'website-conversion-checklist',
    title: '7 Fixes That Turn Visitors Into Leads',
    excerpt:
      'A practical conversion checklist for service businesses — from hero clarity to CTA placement and speed.',
    category: 'Web Development',
    author: 'Prestigieux Team',
    date: '2026-03-28',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80',
    featured: true,
  },
  {
    slug: 'linkedin-b2b-lead-gen',
    title: 'LinkedIn Lead Gen for B2B: What Actually Works',
    excerpt:
      'Offer architecture, targeting, and follow-up sequences that generated 450+ qualified leads in month one.',
    category: 'Lead Generation',
    author: 'Prestigieux Team',
    date: '2026-03-15',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80',
    featured: false,
  },
  {
    slug: 'brand-identity-premium-positioning',
    title: 'Brand Identity That Commands Premium Pricing',
    excerpt:
      'Why typography, color discipline, and narrative consistency matter more than a logo alone.',
    category: 'Brand Identity',
    author: 'Prestigieux Team',
    date: '2026-02-20',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80',
    featured: false,
  },
  {
    slug: 'seo-content-clusters',
    title: 'SEO Content Clusters That Compound Traffic',
    excerpt:
      'Building topical authority with pillar pages, supporting articles, and internal linking systems.',
    category: 'SEO',
    author: 'Prestigieux Team',
    date: '2026-02-08',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&q=80',
    featured: false,
  },
  {
    slug: 'content-reels-that-convert',
    title: 'Reels & Short-Form Content That Drive Conversions',
    excerpt:
      'Hooks, pacing, and CTAs for Instagram and YouTube Shorts — without sacrificing brand elegance.',
    category: 'Content Creation',
    author: 'Prestigieux Team',
    date: '2026-01-22',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7a162?w=900&q=80',
    featured: false,
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
