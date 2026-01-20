import { SoftwareApplication, WithContext } from 'schema-dts';
import { JsonLd } from '@/components/seo/JsonLd';
import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { TemplatePreviews } from "@/components/sections/TemplatePreviews";
import { HubPreviews } from "@/components/sections/HubPreviews";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "DueBy — Invoice Generator App",
  description: "Create professional invoices in minutes with DueBy. Customize with your logo, send to clients, and track payments.",
};

export default function Home() {
  const schema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DueBy',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'iOS, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '120',
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <div className="container">
        <Hero />
      </div>
      <ValueProps />

      <TemplatePreviews />

      <HubPreviews />

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">FAQ</h2>
          <div className="faqGrid">
            <div className="faqItem">
              <h3>Is DueBy free?</h3>
              <p>You can create invoices with core features for free. Some advanced features may require a plan.</p>
            </div>
            <div className="faqItem">
              <h3>Can I add my logo and business details?</h3>
              <p>Yes—add branding, business info, and payment terms to every invoice.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
