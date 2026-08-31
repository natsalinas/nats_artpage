"use client";

import Script from "next/script";

export default function ShopifyStore() {
  return (
    <>
      <Script
        src="https://cdn.shopify.com/storefront/web-components.js"
        strategy="afterInteractive"
      />

      <shopify-store
        id="shopify-store"
        store-domain="https://natistudio.myshopify.com"
        public-access-token={process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN}
        country="US"
        language="en"
      ></shopify-store>
    </>
  );
}
