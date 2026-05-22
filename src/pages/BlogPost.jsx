import { Link, useParams, Navigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { getPostBySlug, formatBlogDate } from '../data/blog';
import { pageMeta } from '../data/pages';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

const articleBodies = {
  'meta-ads-roas-playbook-2026': [
    'Scaling Meta campaigns in 2026 requires disciplined creative testing — not endless ad sets. We run structured hooks-first tests, then scale winners with audience layering rather than broad targeting resets.',
    'Budget pacing matters: we allocate 60% to proven performers, 30% to structured tests, and 10% to experimental angles. This protects ROAS while still finding breakout creatives.',
    'Reporting is weekly, with creative fatigue flags and CPL/ROAS thresholds agreed upfront so decisions stay objective.',
  ],
  'website-conversion-checklist': [
    'Your hero must answer three questions in five seconds: what you do, who it is for, and what to do next. One primary CTA — not five equal buttons fighting for attention.',
    'Speed is conversion: sub-3s load on mobile, compressed images, and minimal third-party scripts. Trust signals (logos, testimonials, certifications) belong above the fold for service businesses.',
    'Forms should ask for the minimum to start a conversation. Every extra field costs leads.',
  ],
  'linkedin-b2b-lead-gen': [
    'B2B offers need specificity: "Free audit" beats "Contact us." We pair lead magnets with job-title targeting and company size filters before scaling spend.',
    'Follow-up sequences within 24 hours — email plus LinkedIn touch — dramatically improve qualified meeting rates.',
    'Creative that looks editorial, not salesy, performs better for professional audiences.',
  ],
  'brand-identity-premium-positioning': [
    'Premium brands restrict palette and type scale. Two fonts, three colours, and consistent spacing beat visual variety.',
    'Your logo is an entry point — the system (photography, tone, layout) carries positioning.',
    'Brand guidelines should be usable by your team in under 30 minutes, not a 80-page PDF nobody opens.',
  ],
  'seo-content-clusters': [
    'Pick one pillar topic aligned to revenue (e.g. "performance marketing agency Mumbai"), build 8–12 supporting articles, and interlink aggressively.',
    'Technical SEO (Core Web Vitals, schema, internal links) unlocks content that would otherwise stall on page 2.',
    'Publish consistently — monthly beats sporadic bursts for compounding authority.',
  ],
  'content-reels-that-convert': [
    'Hook in 1.5 seconds: problem, bold claim, or visual pattern interrupt. No slow intros.',
    'One message per reel. CTA in caption and final frame — book, DM, or link in bio.',
    'Repurpose winning reels into ad creatives; the data from organic informs paid.',
  ],
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  usePageMeta(
    post
      ? { title: `${post.title} | Prestigieux Mediatech`, description: post.excerpt }
      : pageMeta.blog
  );

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const paragraphs = articleBodies[slug] || [post.excerpt];

  return (
    <article className="blog-post">
      <header className="blog-post__hero">
        <div className="blog-post__hero-bg">
          <img src={post.image} alt="" />
          <div className="blog-post__hero-overlay" />
        </div>
        <div className="container blog-post__hero-content">
          <Link to="/blog" className="blog-post__back">
            ← Back to Blog
          </Link>
          <span className="blog-post__category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="blog-post__meta">
            <span>{post.author}</span>
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <div className="container container--narrow blog-post__body">
        <p className="blog-post__lead">{post.excerpt}</p>
        {paragraphs.map((para) => (
          <p key={para.slice(0, 40)}>{para}</p>
        ))}
        <div className="blog-post__cta">
          <h2>Ready to apply this to your brand?</h2>
          <p>Book a free strategy session — no commitment required.</p>
          <Button href="/contact" variant="primary" size="lg">
            Get Free Strategy
          </Button>
        </div>
      </div>
    </article>
  );
}
