import { usePageMeta } from '../hooks/usePageMeta';
import { pageMeta } from '../data/pages';
import Hero from '../components/home/Hero';
import AgencyStatement from '../components/home/AgencyStatement';
import TrustPillars from '../components/home/TrustPillars';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CaseStudies from '../components/home/CaseStudies';
import BlogPreview from '../components/home/BlogPreview';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  usePageMeta(pageMeta.home);

  return (
    <>
      <Hero />
      <AgencyStatement />
      <TrustPillars />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CaseStudies />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
