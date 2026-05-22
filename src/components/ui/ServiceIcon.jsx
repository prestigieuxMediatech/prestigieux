const paths = {
  globe: (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2c1.5 0 2.9.4 4.1 1.1M2 12h20M12 4v16M4.9 7.1A8 8 0 0 0 4 12m16 0a8 8 0 0 0-.9-4.9" />
  ),
  mobile: (
    <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
  ),
  chart: (
    <path d="M4 20V10m6 10V4m6 16v-8m6 8V8" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  film: (
    <path d="M4 6h16v12H4V6zm2 0v3m12-3v3M4 12h16" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" />
    </>
  ),
  diamond: (
    <path d="M12 2l8 8-8 12L4 10l8-8z" />
  ),
  layout: (
    <path d="M4 4h7v7H4V4zm9 0h7v4h-7V4zM4 13h4v7H4v-7zm5 0h11v7H9v-7z" />
  ),
  users: (
    <path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8 8v-1a3 3 0 0 0-2-2.8M16 4.2a4 4 0 0 1 0 7.6" />
  ),
};

export default function ServiceIcon({ name, className = '' }) {
  return (
    <svg
      className={`service-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.globe}
    </svg>
  );
}
