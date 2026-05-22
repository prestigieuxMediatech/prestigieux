import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { blogPosts } from '../../data/blog';
import { formatBlogDate } from '../../data/blog';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './BlogPreview.css';

const latest = blogPosts.slice(0, 3);

export default function BlogPreview() {
  const ref = useScrollReveal();

  return (
    <section className="blog-preview section section--ivory">
      <div className="container">
        <div className="blog-preview__header">
          <SectionHeading
            eyebrow="Insights"
            title="From our growth desk"
            description="Practical playbooks on ads, web, and brand — written for founders and marketing leaders."
          />
          <Link to="/blog" className="blog-preview__all">
            View all articles →
          </Link>
        </div>
        <div ref={ref} className="blog-preview__grid reveal">
          {latest.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-preview__card">
              <div className="blog-preview__image">
                <img src={post.image} alt="" loading="lazy" />
              </div>
              <div className="blog-preview__body">
                <span>{post.category}</span>
                <h3>{post.title}</h3>
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
  );
}
