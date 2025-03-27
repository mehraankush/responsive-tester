export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Responsive Website Tester",
    description:
      "Free tool to test and check website responsiveness on mobile, tablet, desktop and custom screen sizes.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: "Test website responsiveness, Mobile view, Tablet view, Desktop view, Custom screen sizes",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

