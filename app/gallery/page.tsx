import { ArtworkCard } from "@/components/ArtworkCard";

const rosaOriginals = [
  {
    title: "Strawberry Fields",
    image: "/images/artwork/strawberry_fields.png",
    imageAlt: "Rosa in the Strawberry Fields",
    medium: "Acrylic on Canvas",
    dimensions: "11 × 14 in",
    year: "2026",
    price: "$100",
  },
];

const rosaDigitalWorks = [
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
];

const otherArtworks = [
  {
    title: "Freddie Mercury",
    image: "/images/artwork/freddie_trippy.png",
    imageAlt: "Freddie Mercury",
    medium: "Acrylic on Canvas",
    dimensions: "12 × 12 in",
    year: "2017",
    price: "$50",
  },
  {
    title: "Abbey Road",
    image: "/images/artwork/abbey_road.png",
    imageAlt: "The Beatles walking down Abbey Road",
    medium: "Acrylic on Canvas",
    dimensions: "30 × 15 in",
    year: "2026",
    price: "$200",
  },
  {
    title: "Home Mural",
    image: "/images/artwork/home_mural.png",
    imageAlt: "Music-inspired mural painted in the artist's family home",
    medium: "Mural",
    year: "2015",
  },
];

type GalleryArtwork = {
  title: string;
  image: string;
  imageAlt: string;
  medium: string;
  dimensions?: string;
  year?: string;
  price?: string;
};

function ArtworkGrid({ artworks }: { artworks: GalleryArtwork[] }) {
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
          price={artwork.price}
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
              An evolving collection where each rose captures a different story.
            </p>
          </div>

          <div className="mt-12 sm:mt-14">
            <h3 className="font-heading text-2xl font-semibold text-olive-dark sm:text-3xl">
              Original Artwork
            </h3>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              Original, hand-painted works from the World of Rosa.
            </p>
            <ArtworkGrid artworks={rosaOriginals} />
          </div>

          <div className="mt-16 sm:mt-20">
            <h3 className="font-heading text-2xl font-semibold text-olive-dark sm:text-3xl">
              Digital Works
            </h3>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              Digital illustrations exploring Rosa&apos;s World.
            </p>
            <ArtworkGrid artworks={rosaDigitalWorks} />
          </div>
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
              A collection of creative work beyond the World of Rosa.
            </p>
          </div>

          <ArtworkGrid artworks={otherArtworks} />
        </section>
      </div>
    </main>
  );
}
