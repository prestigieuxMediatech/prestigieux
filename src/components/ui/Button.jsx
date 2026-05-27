import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    const isInternalRoute = href.startsWith('/');
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('//') ||
      href.startsWith('tel') ||
      href.startsWith('mailto');

    if (isInternalRoute) {
      return (
        <Link to={href} className={classes} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
