const icons = {
  linkedin: {
    fill: 'currentColor',
    stroke: 'none',
    node: (
      <path d="M5.2 8.6H1.7V20h3.5V8.6zm.2-3.5C5.4 3.9 4.4 3 3.5 3s-1.9.9-1.9 2.1S2.5 7.2 3.5 7.2c1 0 1.9-.9 1.9-2.1zM22 20h-3.5v-5.8c0-1.6-.8-2.6-2.1-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8V20H11V8.6h3.4v1.8c.4-.8 1.4-2 3.3-2 2.4 0 4.3 1.7 4.3 5.3V20z" />
    ),
  },
  instagram: {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    node: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  youtube: {
    fill: 'currentColor',
    stroke: 'none',
    node: (
      <path d="M21.6 8.2a2.8 2.8 0 0 0-2-2C17.8 5.7 12 5.7 12 5.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29.8 29.8 0 0 0 2 12a29.8 29.8 0 0 0 .4 3.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29.8 29.8 0 0 0 22 12a29.8 29.8 0 0 0-.4-3.8zM10 15.2V8.8l5.2 3.2L10 15.2z" />
    ),
  },
  facebook: {
    fill: 'currentColor',
    stroke: 'none',
    node: (
      <path d="M13.4 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.3-1.3 1.4-1.3h1.5V5.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v1.8H8v2.8h2.2v7h3.2z" />
    ),
  },
  whatsapp: {
    fill: 'currentColor',
    stroke: 'none',
    node: (
      <path d="M20.2 3.8A11.2 11.2 0 0 0 2.6 17.2L1 23l6-1.6a11.2 11.2 0 0 0 5 1.2h.1c6.2 0 11.2-5 11.2-11.2 0-3-1.2-5.8-3.3-7.8zm-8 16.9h-.1a9.2 9.2 0 0 1-4.7-1.3l-.3-.2-3.6 1 1-3.5-.2-.3a9.2 9.2 0 1 1 7.9 4.3zm5-6.8c-.3-.1-1.9-.9-2.2-1-.3-.1-.5-.1-.8.1l-.6.8c-.2.2-.3.2-.6.1-1.8-.9-3.2-3-3.3-3.2-.2-.3 0-.5.1-.6l.4-.5.2-.4a.6.6 0 0 0 0-.5l-1-2.4c-.2-.5-.5-.5-.7-.5h-.6c-.3 0-.7.2-.9.5a3.8 3.8 0 0 0-1.2 2.8c0 1.7 1.2 3.4 1.3 3.6.2.2 2.4 3.7 5.9 5.2a7 7 0 0 0 2 .7 5 5 0 0 0 2.2-.2c.7-.2 1.9-.9 2.2-1.8.3-.8.3-1.6.2-1.8 0-.1-.2-.2-.5-.4z" />
    ),
  },
};

export default function SocialIcon({ name }) {
  const icon = icons[name] ?? icons.linkedin;

  return (
    <svg
      viewBox="0 0 24 24"
      fill={icon.fill}
      stroke={icon.stroke}
      strokeWidth={icon.strokeWidth}
      aria-hidden="true"
    >
      {icon.node}
    </svg>
  );
}
