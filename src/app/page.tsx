import { SoftwareApplication, WithContext } from 'schema-dts';
import { JsonLd } from '@/components/seo/JsonLd';
import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { HubPreviews } from "@/components/sections/HubPreviews";

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
      <HubPreviews />
    </>
  );
}
