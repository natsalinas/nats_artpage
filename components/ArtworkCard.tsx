import Image from "next/image";
import Link from "next/link";

type ArtworkCardProps = {
  title: string;
  image: string;
  imageAlt: string;
  medium: string;
  dimensions?: string;
  year?: string;
};

export function ArtworkCard({
  title,
  image,
  imageAlt,
  medium,
  dimensions,
  year,
}: ArtworkCardProps) {
  const inquiryHref = `/inquire?artwork=${encodeURIComponent(title)}`;

  return (
    <article className="flex h-full flex-col">
      {/* Artwork */}
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.75rem] bg-secondary/30 p-4 sm:p-5">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 45vw, 30vw"
          className="object-contain p-4 sm:p-5"
        />
      </div>

      {/* Artwork Information */}
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="font-heading text-2xl font-medium text-foreground">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {medium}
          {dimensions ? ` · ${dimensions}` : ""}
          {year ? ` · ${year}` : ""}
        </p>

        <div className="mt-4">
          <Link
            href={inquiryHref}
            className="inline-flex items-center text-sm font-semibold text-rose-dark transition-colors hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Inquire about this piece
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
