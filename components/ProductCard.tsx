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
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

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
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-olive-dark px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive hover:shadow-md"
        >
          Request to Purchase
        </Link>
      </div>
    </article>
  );
}