import { PurchaseRequestForm } from "@/components/PurchaseRequestForm";

type ProductRequestPageProps = {
  searchParams: Promise<{
    product?: string;
  }>;
};

export default async function ProductRequestPage({
  searchParams,
}: ProductRequestPageProps) {
  const { product } = await searchParams;

  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
          Purchase Request
        </p>

        <h1 className="mt-4 font-heading text-5xl font-semibold text-olive-dark sm:text-6xl">
          Request a piece.
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Tell me which product you&apos;re interested in and I&apos;ll reach
          out with availability and next steps.
        </p>

        <PurchaseRequestForm selectedProduct={product} />
      </div>
    </main>
  );
}