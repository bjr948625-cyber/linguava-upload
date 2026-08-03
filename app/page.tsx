import dynamic from 'next/dynamic';
import { Navbar } from '@/components/site/Navbar';
import { Hero } from '@/components/site/Hero';
import { Services } from '@/components/site/Services';
import { HowItWorks } from '@/components/site/HowItWorks';
import { Footer } from '@/components/site/Footer';
import { FaqJsonLd } from '@/components/site/FaqJsonLd';
import { SectionFallback } from '@/components/site/SectionFallback';

const WhyChooseUs = dynamic(
  () => import('@/components/site/WhyChooseUs').then((mod) => mod.WhyChooseUs),
  { loading: () => <SectionFallback /> },
);
const Testimonials = dynamic(
  () => import('@/components/site/Testimonials').then((mod) => mod.Testimonials),
  { loading: () => <SectionFallback /> },
);
const FAQ = dynamic(() => import('@/components/site/FAQ').then((mod) => mod.FAQ), {
  loading: () => <SectionFallback />,
});
const Contact = dynamic(
  () => import('@/components/site/Contact').then((mod) => mod.Contact),
  { loading: () => <SectionFallback /> },
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <FaqJsonLd />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
