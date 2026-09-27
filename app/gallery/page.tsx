import { ArtworkCard } from "@/components/ArtworkCard";

const rosaArtworks = [
  {
    title: "Strawberry Fields",
    image: "/images/artwork/strawberry_fields.png",
    imageAlt: "Rosa in the Strawberry Fields",
    medium: "Acrylic on Canvas",
    dimensions: "11 × 14 in",
    year: "2026",
  },
  {
    title: "Rosa Española",
    image: "/images/artwork/spain.jpg",
    imageAlt: "Rose-headed dancer inspired by Spain and flamenco",
    medium: "Digital Illustration",
    year: "2026",
  },
  {
    title: "La DJ",
    image: "/images/artwork/la-dj.PNG",
    imageAlt: "Rose-headed DJ mixing music",
    medium: "Digital Illustration",
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
];

const otherArtworks = [
  {
    title: "Home Mural",
    image: "/images/artwork/home_mural.png",
    imageAlt: "Music-inspired mural painted in the artist's family home",
    medium: "Mural",
    year: "2015",
  },
];

function ArtworkGrid({ artworks }: { artworks: typeof rosaArtworks }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-10 sm:mt-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
      {artworks.map((artwork) => (
        <ArtworkCard
          key={artwork.title}
          title={artwork.title}
          image={artwork.image}
          imageAlt={artwork.imageAlt}
          medium={artwork.medium}
          dimensions={artwork.dimensions}
          year={artwork.year}
        />
      ))}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Gallery Introduction */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
            Gallery
          </p>

          <h1 className="mt-4 font-heading text-5xl font-semibold text-olive-dark sm:text-6xl">
            Stories told through color.
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A collection of paintings and illustrations inspired by memories,
            music, movement, and the moments that stay with me.
          </p>
        </div>

        {/* The World of Rosa */}
        <section className="mt-16 sm:mt-20 lg:mt-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-dark">
              Signature Collection
            </p>
            <h2 className="mt-3 font-heading text-4xl font-semibold text-olive-dark sm:text-5xl">
              The World of Rosa
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              An evolving collection where each Rosa captures a different
              memory, feeling, or chapter of life.
            </p>
          </div>

          <ArtworkGrid artworks={rosaArtworks} />
        </section>

        {/* Other Works */}
        <section className="mt-20 sm:mt-24 lg:mt-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
              Beyond Rosa
            </p>
            <h2 className="mt-3 font-heading text-4xl font-semibold text-olive-dark sm:text-5xl">
              Other Works
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              A collection of paintings, portraits, murals, and creative work
              beyond the World of Rosa.
            </p>
          </div>

          <ArtworkGrid artworks={otherArtworks} />
        </section>
      </div>
    </main>
  );
}
