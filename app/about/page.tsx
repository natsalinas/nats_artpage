import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* About Nati */}
      <section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
              About the Artist
            </p>

            <h1 className="mt-4 font-heading text-5xl font-semibold leading-tight text-olive-dark sm:text-6xl">
              Nati Salinas
            </h1>
          </div>

          <div className="relative mt-10 mx-auto max-w-2xl">
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-44 w-44 rounded-full bg-rose/20 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-6 h-52 w-52 rounded-full bg-olive/15 blur-3xl"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary shadow-lg">
              <Image
                src="/images/nati-about.jpg"
                alt="Nati Salinas dancing at an outdoor event"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 700px"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="mt-10 max-w-3xl">
            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                I&apos;m an Orlando-based artist who enjoys realism blended with
                abstract visuals and bold colors. I first started drawing as a child after reading through my favorite comic books and wanting to make my own. 
                In high school, I started creating portraits and found a passion for capturing subjects in acrylic and oil pastels. Some of my favorite artists include Picasso, Van Gogh, and Salvador Dali.  

              </p>

              <p>
                My artwork, espeically with the expression of Rosa, romanticizes the experiences in everyday life and the emotions that come with them.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full bg-olive-dark px-6 py-3 text-sm font-semibold text-background shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Explore the Gallery
              </Link>

              <Link
                href="/commissions"
                className="inline-flex items-center justify-center rounded-full border border-rose-dark px-6 py-3 text-sm font-semibold text-rose-dark transition-all hover:-translate-y-0.5 hover:bg-rose/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Request Custom Art
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Rosa */}
      <section className="bg-secondary/50 px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
              About Rosa
            </p>

            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-olive-dark sm:text-5xl">
              How the World of Rosa began.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                Rosa began with an image I discovered on Pinterest—a feminine
                figure with a rose in place of her head. I came across several
                variations of the image and was never able to identify the
                original artist, but the character stayed with me.
              </p>

              <p>
                I couldn&apos;t stop wondering who she was or what stories she
                had to tell. So I began painting my own interpretations and
                bringing Rosa into the experiences that shape my everyday
                life—dancing, traveling, creating, reflecting, and embracing the
                present moment.
              </p>

              <p>
                Over time, Rosa grew beyond a single figure and became an
                evolving world of characters, emotions, and stories. Every rose
                has her own personality and represents a different memory,
                feeling, or chapter of life.
              </p>

              <p>The World of Rosa is still growing, one story at a time.</p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <Link
                href="/gallery"
                className="inline-flex items-center font-semibold text-rose-dark transition-colors hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Explore the Gallery
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <a
                href="https://www.instagram.com/reel/DXzZWYsKDR-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-semibold text-olive transition-colors hover:text-olive-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Watch Rosa come to life
                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
                <span className="sr-only"> on Instagram</span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -right-6 -top-6 h-44 w-44 rounded-full bg-rose/20 blur-3xl"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-background shadow-lg">
              <Image
                src="/images/about-rosa.jpg"
                alt="Nati Salinas holding one of her Rosa paintings"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
