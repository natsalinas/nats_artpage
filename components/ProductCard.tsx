import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  title: string;
  productType: string;
  size: string;
  image: string;
  alt: string;
};

export function ProductCard({
  id,
  title,
  productType,
  size,
  image,
  alt,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Product Image */}
      <div className="flex min-h-[420px] items-center justify-center bg-background p-4 sm:min-h-[460px] lg:min-h-[500px]">
        <Image
          src={image}
          alt={alt}
          width={1200}
          height={1500}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-auto max-h-[520px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Product Details */}
      <div className="p-6">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-olive">
          {productType}
        </p>

        <h2 className="mt-2 font-heading text-2xl font-semibold text-olive-dark">
          {title}
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">{size}</p>

        <Link
          href={`/products/request?product=${id}`}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-olive-dark px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Request to Purchase
        </Link>
      </div>
    </article>
  );
}