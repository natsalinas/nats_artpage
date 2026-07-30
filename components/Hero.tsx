import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-16 px-6 py-16 md:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-olive">
            Orlando-Based Artist
          </p>

          <h1 className="font-heading text-5xl font-semibold leading-tight text-olive-dark sm:text-6xl lg:text-7xl">
            The World of Rosa
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I&apos;m Nati Salinas. Through the world of Rosa, I explore growth, the divine feminine, and the beauty of embracing each moment. Every rose tells a different story.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md bg-olive-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore the Gallery
            </Link>

            <Link
              href="/commissions"
              className="inline-flex items-center justify-center rounded-md border border-rose-dark px-6 py-3 text-sm font-semibold text-rose-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Commission a Piece
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <Image
            src="/images/hero-rosa.jpg"
            alt="Rosa dancing through Spain"
            width={650}
            height={900}
            priority
            sizes="(max-width: 768px) 80vw, 40vw"
            className="h-auto w-4/5 max-w-xs object-contain transition-transform duration-500 hover:scale-[1.02] sm:max-w-sm md:w-full md:max-w-md"
          />

          {/* Decorative background glow */}
          <div
            aria-hidden="true"
            className="absolute -bottom-10 -left-8 -z-10 h-56 w-56 rounded-full bg-rose/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 -z-10 h-56 w-56 rounded-full bg-olive/20 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}