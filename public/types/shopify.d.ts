import type { DetailedHTMLProps, HTMLAttributes } from "react";

type CustomElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "shopify-store": CustomElementProps & {
        id?: string;
        "store-domain"?: string;
        country?: string;
        language?: string;
        "public-access-token"?: string;
      };

      "shopify-context": CustomElementProps & {
        type?: string;
        handle?: string;
        gid?: string;
      };

      "shopify-data": CustomElementProps & {
        query?: string;
      };

      "shopify-money": CustomElementProps & {
        query?: string;
        format?: string;
      };

      "shopify-media": CustomElementProps & {
        query?: string;
        width?: string;
        height?: string;
      };

      "shopify-variant-selector": CustomElementProps;
    }
  }
}