import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { blogPosts, formatBlogDate } from '../data/blog';
import { pageMeta } from '../data/pages';
import { usePageMeta } from '../hooks/usePageMeta';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Blog.css';

export default function Blog() {
  const meta = pageMeta.blog;
  usePageMeta(meta);
  const ref = useScrollReveal({ threshold: 0.05 });
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.heading}
        description={meta.description}
        image={meta.image}
      />

      <section className="blog-page section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured"
            title="Editor's picks"
            description="High-impact reads for founders and marketing leaders scaling in competitive markets."
          />

          <div className="blog-featured">
            {featured.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card blog-card--featured">
                <div className="blog-card__image">
                  <img src={post.image} alt="" loading="lazy" />
                </div>
                <div className="blog-card__body">
                  <span className="blog-card__category">{post.category}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <footer>
                    <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                    <span>{post.readTime}</span>
                  </footer>
                </div>
              </Link>
            ))}
          </div>

          <SectionHeading
            eyebrow="All Articles"
            title="Latest from Prestigieux"
            className="blog-page__all-heading"
          />

          <div ref={ref} className="blog-grid reveal">
            {rest.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card__image">
                  <img src={post.image} alt="" loading="lazy" />
                </div>
                <div className="blog-card__body">
                  <span className="blog-card__category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <footer>
                    <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                    <span>{post.readTime}</span>
                  </footer>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
