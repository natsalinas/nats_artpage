import Image from "next/image";
import Link from "next/link";

type ArtworkCardProps = {
  title: string;
  image: string;
  imageAlt: string;
  medium: string;
  year?: string;
  status?: string;
  price?: string;
  href?: string;
};

export function ArtworkCard({
  title,
  image,
  imageAlt,
  medium,
  year,
  status,
  price,
  href = "/contact",
}: ArtworkCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <h2 className="font-heading text-3xl font-semibold text-olive-dark">
          {title}
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {medium}
          {year ? ` · ${year}` : ""}
        </p>

        {status && (
          <p className="mt-4 text-sm font-medium text-olive">{status}</p>
        )}

        {price && (
          <p className="mt-1 text-lg font-semibold text-foreground">{price}</p>
        )}

        <Link
          href={href}
          className="mt-5 inline-flex text-sm font-semibold text-rose-dark transition-colors hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Inquire About This Piece
        </Link>
      </div>
    </article>
  );
}