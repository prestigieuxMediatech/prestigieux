import { useEffect } from 'react';

export function usePageMeta({ title, description, canonical, og, twitter }) {
  useEffect(() => {

    if (title) document.title = title;

    const setMeta = (selector, attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]',         'name',     'description',         description);
    setMeta('meta[property="og:title"]',         'property', 'og:title',            og?.title);
    setMeta('meta[property="og:description"]',   'property', 'og:description',      og?.description);
    setMeta('meta[property="og:image"]',         'property', 'og:image',            og?.image);
    setMeta('meta[property="og:url"]',           'property', 'og:url',              og?.url);
    setMeta('meta[property="og:type"]',          'property', 'og:type',             og?.type);
    setMeta('meta[name="twitter:card"]',         'name',     'twitter:card',        twitter?.card);
    setMeta('meta[name="twitter:title"]',        'name',     'twitter:title',       twitter?.title);
    setMeta('meta[name="twitter:description"]',  'name',     'twitter:description', twitter?.description);
    setMeta('meta[name="twitter:image"]',        'name',     'twitter:image',       twitter?.image);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

  }, [title, description, canonical, og, twitter]);
}