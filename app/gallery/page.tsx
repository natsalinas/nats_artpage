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
    image: "/images/artwork/La_DJ.PNG",
    imageAlt: "Rose-headed DJ mixing music",
    medium: "Acrylic on Canvas",
    dimensions: "11 × 14 in",
    year: "2026",
  },
];

export default function GalleryPage() {
  return (
    <main className="overflow-hidden px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Gallery Introduction */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
            Gallery
          </p>

          <h1 className="mt-4 font-heading text-5xl font-semibold text-olive-dark sm:text-6xl">
            The Collection
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Every rose has her own story, emotions, and personality.
          </p>
        </div>

        {/* Swipe cue for mobile + tablet */}
        <p className="mt-8 text-sm text-muted-foreground">Swipe to explore →</p>

        {/* Horizontal Artwork Gallery */}
        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 pr-6 md:gap-8 lg:mt-14 lg:gap-10">
          {artworks.map((artwork) => (
            <div
              key={artwork.title}
              className="w-[72vw] shrink-0 snap-start sm:w-[62vw] md:w-[60vw] lg:w-[30vw] xl:w-[28vw]"
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
