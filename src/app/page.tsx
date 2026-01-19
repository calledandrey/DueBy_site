import { SoftwareApplication, WithContext } from 'schema-dts';
import { JsonLd } from '@/components/seo/JsonLd';
import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { HubPreviews } from "@/components/sections/HubPreviews";
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "DueBy — Invoice Generator & Free Invoice Templates",
  description: "Create professional invoices in minutes with DueBy. Customize with your logo, send to clients, and track payments. Free invoice templates included.",
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

      {/* Who it's for Section */}
      <section className="section bg-muted">
        <div className="container">
          <h2 className="sectionTitle">Built for solo pros and small teams</h2>
          <p className="sectionSubtitle">Simple invoicing for your trade.</p>
          <div className="hubGrid">
            <Link href="/industries/contractor" className="hubCard">
              <h3>Contractors & trades</h3>
            </Link>
            <Link href="/industries/freelancer" className="hubCard">
              <h3>Freelancers</h3>
            </Link>
            <Link href="/industries/lawn-care" className="hubCard">
              <h3>Home services</h3>
            </Link>
            <Link href="/industries/cleaning" className="hubCard">
              <h3>Cleaning services</h3>
            </Link>
          </div>
        </div>
      </section>

      <HubPreviews />

      {/* How it works Section */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">How it works</h2>
          <div className="stepsGrid">
            <div className="stepItem">
              <span className="stepNumber">1</span>
              <h3>Choose a template or start blank</h3>
            </div>
            <div className="stepItem">
              <span className="stepNumber">2</span>
              <h3>Add client + items + taxes/discount</h3>
            </div>
            <div className="stepItem">
              <span className="stepNumber">3</span>
              <h3>Export PDF and send</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">FAQ</h2>
          <div className="faqGrid">
            <div className="faqItem">
              <h3>Is DueBy free?</h3>
              <p>You can use free templates and create invoices with core features. Some advanced features may require a plan.</p>
            </div>
            <div className="faqItem">
              <h3>Can I add my logo and business details?</h3>
              <p>Yes—add branding, business info, and payment terms to every invoice.</p>
            </div>
            <div className="faqItem">
              <h3>Can clients pay online?</h3>
              <p>Depending on your setup, you can include payment instructions or links (availability may vary by region).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Block */}
      <section className="section bg-muted">
        <div className="container">
          <div className="flex-center gap-2">

            <Link href="/invoice-templates">Templates</Link>
            <span>•</span>
            <Link href="/industries">Industries</Link>
          </div>
        </div>
      </section>
    </>
  );
}
