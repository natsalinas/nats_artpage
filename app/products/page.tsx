import ShopifyProduct from "@/components/ShopifyProduct";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
          Shop
        </p>

        <h1 className="mt-3 text-4xl font-semibold">Wear the World of Rosa</h1>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Original artwork transformed into pieces you can wear and carry with
          you.
        </p>
      </div>

      <div
        className="
          grid grid-cols-1 gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        <ShopifyProduct handle="rosa-t-shirt" />

        <ShopifyProduct handle="la-dj-t-shirt" />
      </div>
    </main>
  );
}
