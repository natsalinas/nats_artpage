"use client";

import { useEffect, useRef } from "react";

type ShopifyProductProps = {
  handle: string;
};

export default function ShopifyProduct({ handle }: ShopifyProductProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = `
      <shopify-context
        type="product"
        handle="${handle}"
      >
        <template>
          <article
            class="
              mx-auto w-full max-w-[380px]
              overflow-hidden rounded-3xl
              border border-black/10
              bg-white
            "
          >

            <!-- PRODUCT IMAGE -->
            <div
              class="
                flex aspect-square
                items-center justify-center
                overflow-hidden
                bg-white p-4
              "
            >
              <shopify-media
                query="product.selectedOrFirstAvailableVariant.image"
                width="600"
                height="600"
              ></shopify-media>
            </div>


            <!-- PRODUCT INFO -->
            <div class="space-y-4 p-5">

              <div>
                <h2 class="text-xl font-semibold">
                  <shopify-data query="product.title"></shopify-data>
                </h2>

                <p class="mt-1 text-lg">
                  <shopify-money
                    query="product.selectedOrFirstAvailableVariant.price"
                  ></shopify-money>
                </p>
              </div>


              <!-- COLOR / SIZE -->
              <shopify-variant-selector></shopify-variant-selector>


              <!-- BUTTON -->
              <button
                type="button"
                onclick="document.getElementById('shopify-store').buyNow(event)"
                class="
                  w-full rounded-full
                  bg-black px-6 py-3
                  text-white
                  transition-opacity
                  hover:opacity-80
                "
              >
                Buy Now
              </button>

            </div>

          </article>
        </template>

        <div shopify-loading-placeholder class="p-6">
          Loading product...
        </div>

      </shopify-context>
    `;
  }, [handle]);

  return <div ref={containerRef} />;
}
