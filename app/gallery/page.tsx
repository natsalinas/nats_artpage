import { ArtworkCard } from "@/components/ArtworkCard";

const artworks = [
  {
    title: "Rosa Española",
    image: "/images/artwork/spain.jpg",
    imageAlt: "Rose-headed dancer inspired by Spain and flamenco",
    medium: "Digital illustration",
    year: "2026",
    status: "Prints available",
    price: "Starting at $15",
    href: "/contact",
  },
  {
    title: "Rosa y el Espejo",
    image: "/images/artwork/el-espejo.jpg",
    imageAlt: "Rosa looking into a mirrior",
    medium: "Acrylic painting",
    year: "2026",
    status: "Coming soon",
    href: "/contact",
  },
  {
    title: "La DJ",
    image: "/images/artwork/la-dj.jpg",
    imageAlt: "DJ Rosa mixing music",
    medium: "Acrylic painting",
    year: "2026",
    status: "Coming soon",
    href: "/contact",
  },

];

export default function GalleryPage() {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
            Gallery
          </p>

          <h1 className="mt-4 font-heading text-5xl font-semibold text-olive-dark sm:text-6xl">
            The Rosa Collection
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every rose has her own story, emotions, and personality.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork.title}
              title={artwork.title}
              image={artwork.image}
              imageAlt={artwork.imageAlt}
              medium={artwork.medium}
              year={artwork.year}
              status={artwork.status}
              price={artwork.price}
              href={artwork.href}
            />
          ))}
        </div>
      </div>
    </main>
  );
}