"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ArtworkCardProps = {
  title: string;
  image: string;
  imageAlt: string;
  medium: string;
  dimensions?: string;
  year?: string;
  showInquiry?: boolean;
};

export function ArtworkCard({
  title,
  image,
  imageAlt,
  medium,
  dimensions,
  year,
  showInquiry = false,
}: ArtworkCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const inquiryHref = `/inquire?artwork=${encodeURIComponent(title)}`;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <article className="flex h-full flex-col">
        {/* Artwork */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`View ${title} larger`}
          className="group relative flex aspect-[4/5] w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-[1.75rem] bg-secondary/30 p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:p-5"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 45vw, 30vw"
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02] sm:p-5"
          />
        </button>

        {/* Artwork Information */}
        <div className="mt-5 flex flex-1 flex-col">
          <h3 className="font-heading text-2xl font-medium text-foreground">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {medium}
            {dimensions ? ` · ${dimensions}` : ""}
            {year ? ` · ${year}` : ""}
          </p>

          {showInquiry && (
            <div className="mt-4">
              <Link
                href={inquiryHref}
                className="inline-flex items-center text-sm font-semibold text-rose-dark transition-colors hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Inquire about this piece
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          )}
        </div>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} enlarged artwork`}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close enlarged artwork"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-2xl text-foreground shadow-lg transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-8 sm:top-8"
          >
            ×
          </button>

          <div
            className="relative h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="95vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
