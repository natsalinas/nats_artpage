import Link from "next/link";
import { ArtworkInquiryForm } from "@/components/ArtworkInquiryForm";

type ArtworkInquiryPageProps = {
  searchParams: Promise<{
    artwork?: string;
  }>;
};

export default async function ArtworkInquiryPage({
  searchParams,
}: ArtworkInquiryPageProps) {
  const { artwork } = await searchParams;
  const artworkTitle = artwork?.trim();

  if (!artworkTitle) {
    return (
      <main className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
            Artwork Inquiry
          </p>
          <h1 className="mt-4 font-heading text-5xl font-semibold text-olive-dark sm:text-6xl">
            Which piece caught your eye?
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose a piece from the gallery to send an inquiry about it.
          </p>
          <Link
            href="/gallery"
            className="mt-8 inline-flex items-center font-semibold text-rose-dark transition-colors hover:text-rose"
          >
            Return to the Gallery
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
          Artwork Inquiry
        </p>

        <h1 className="mt-4 font-heading text-5xl font-semibold text-olive-dark sm:text-6xl">
          Interested in this piece?
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Have a question about this piece? Send me a message below and I&apos;ll get back to you.
        </p>

        <ArtworkInquiryForm artwork={artworkTitle} />
      </div>
    </main>
  );
}
