const icons = {
  linkedin: (
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2M2 9h4v13H2V9zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  youtube: (
    <path d="M22 12c0 5-2 8-10 8S2 17 2 12s2-8 10-8 10 3 10 8zm-12 0l6 3.5v-7L10 12z" />
  ),
  whatsapp: (
    <path d="M17.5 14.5c-.5.8-1.2 1.5-2 2l1 3-3-1c-3 1.5-6.5-1-5.5-4.5 1-3.5 5-5 7.5-2.5s1 7-1 3z" />
  ),
};

export default function SocialIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}
