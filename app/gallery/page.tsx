import { ArtworkCard } from "@/components/ArtworkCard";

const artworks = [
  {
    title: "Rosa Española",
    image: "/images/artwork/spain.jpg",
    imageAlt: "Rose-headed dancer inspired by Spain and flamenco",
    medium: "Digital Illustration",
    dimensions: "8 × 10 in",
    year: "2026",
  },
  {
    title: "Rosa y el Espejo",
    image: "/images/artwork/el-espejo.jpg",
    imageAlt: "Rosa looking into a mirror",
    medium: "Acrylic on Canvas",
    dimensions: "11 × 14 in",
    year: "2026",
  },
  {
    title: "La DJ",
    image: "/images/artwork/la-dj.jpg",
    imageAlt: "Rose-headed DJ mixing music",
    medium: "Acrylic on Canvas",
    dimensions: "11 × 14 in",
    year: "2026",
  },
];

export default function GalleryPage() {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Gallery Introduction */}
        <div className="max-w-2xl">
          <h1 className="font-heading text-5xl font-semibold text-olive-dark sm:text-6xl">
            The Rosa Collection
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Every rose has her own story, emotions, and personality.
          </p>
        </div>

        {/* Horizontal Artwork Gallery */}
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 pr-6 md:mt-16 md:gap-10">
          {artworks.map((artwork) => (
            <div
              key={artwork.title}
              className="w-[72vw] shrink-0 snap-start sm:w-[58vw] md:w-[42vw] lg:w-[32vw]"
            >
              <ArtworkCard
                title={artwork.title}
                image={artwork.image}
                imageAlt={artwork.imageAlt}
                medium={artwork.medium}
                dimensions={artwork.dimensions}
                year={artwork.year}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}