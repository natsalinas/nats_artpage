import { CustomArtRequestForm } from "@/components/CustomArtRequestForm";

export default function CommissionsPage() {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
            Custom Art
          </p>

          <h1 className="mt-4 font-heading text-5xl font-semibold text-olive-dark sm:text-6xl">
            Let&apos;s create something personal.
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have an idea you&apos;d like turned into art? Tell me what
            you&apos;re thinking and I&apos;ll reach out so we can discuss the
            details together.
          </p>
        </div>

        <CustomArtRequestForm />
      </div>
    </main>
  );
}