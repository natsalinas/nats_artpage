import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    id: "rosa-espanola-8x10-print",
    title: "Rosa Española",
    productType: "Art Print",
    size: "8 × 10 in",
    image: "/images/artwork/spain.jpg",
    alt: "Rosa Española art print",
  },
  {
    id: "la-dj-8x10-print",
    title: "La DJ",
    productType: "Art Print",
    size: "8 × 10 in",
    image: "/images/artwork/la-dj.jpg",
    alt: "La DJ art print",
  },
  {
    id: "la-dj-11x14-canvas",
    title: "La DJ",
    productType: "Canvas",
    size: "11 × 14 in",
    image: "/images/artwork/la-dj.jpg",
    alt: "La DJ canvas",
  },
];

export default function ProductsPage() {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
            Shop
          </p>

          <h1 className="mt-4 font-heading text-5xl font-semibold text-olive-dark sm:text-6xl">
            Bring Rosa home.
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Shop prints and canvas pieces featuring artwork from the World of
            Rosa. Each piece is created from an original design and made to
            bring a little piece of Rosa&apos;s world into yours.
          </p>
        </div>

        {/* Products */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              productType={product.productType}
              size={product.size}
              image={product.image}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
    </main>
  );
}