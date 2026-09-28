import Link from "next/link";
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
    title: "Lana Del Rey Hoodie",
    image: "/images/artwork/lana_fabric.jpg",
    imageAlt: "Hand-painted Lana Del Rey artwork on a hoodie",
    medium: "Hand-Painted Fabric",
    year: "2015",
  },
];

const murals = [
  {
    title: "Home Mural",
    image: "/images/artwork/home_mural.png",
    imageAlt: "Music-inspired mural painted in the artist's family home",
    medium: "Mural",
    year: "2015",
  },
  {
    title: "School Mural",
    image: "/images/artwork/charter_mural.jpg",
    imageAlt: "Beach scene mural painted at school",
    medium: "Mural",
    year: "2015",
  },
  {
    title: "Spider-Man Mural",
    image: "/images/artwork/spidey_mural_cropped.jpg",
    imageAlt: "Spider-Man mural",
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
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
            Gallery
          </p>
        </div>

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

          <ArtworkGrid artworks={rosaOriginals} />
        </section>

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

        <section className="mt-20 sm:mt-24 lg:mt-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
              Large-Scale Work
            </p>
            <h2 className="mt-3 font-heading text-4xl font-semibold text-olive-dark sm:text-5xl">
              Murals
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Hand-painted murals created for homes, schools, and creative spaces.
            </p>
            <Link
              href="/commissions"
              className="mt-5 inline-flex items-center font-semibold text-rose-dark transition-colors hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Interested in a mural?
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>

          <ArtworkGrid artworks={murals} />
        </section>

        <section className="mt-20 sm:mt-24 lg:mt-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-dark">
              Digital Art
            </p>
            <h2 className="mt-3 font-heading text-4xl font-semibold text-olive-dark sm:text-5xl">
              Digital Works
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Digital illustrations exploring Rosa&apos;s World.
            </p>
          </div>

          <ArtworkGrid artworks={rosaDigitalWorks} />
        </section>
      </div>
    </main>
  );
}
