import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-rose-dark">
          Art by Nati
        </p>

        <h1 className="text-5xl font-semibold md:text-7xl">
          Welcome to Rosa&apos;s world.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Artwork inspired by nature, beauty, and the human experience. 
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg">Request a Commission</Button>

          <Button size="lg" variant="secondary">
            View Artwork
          </Button>
        </div>
      </section>
    </main>
  );
}