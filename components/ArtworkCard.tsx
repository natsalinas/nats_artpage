import Image from "next/image";

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
  return (
    <article>
      {/* Artwork */}
      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt={imageAlt}
          width={1400}
          height={1800}
          sizes="(max-width: 640px) 72vw, (max-width: 1024px) 60vw, 32vw"
          className="h-auto max-h-[650px] w-auto max-w-full object-contain"
        />
      </div>

      {/* Artwork Information */}
      <div className="mt-5">
        <h2 className="font-heading text-2xl font-medium text-foreground">
          {title}
        </h2>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          {medium}
          {dimensions ? `, ${dimensions}` : ""}
          {year ? `, ${year}.` : ""}
        </p>
      </div>
    </article>
  );
}