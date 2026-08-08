type ProductRequestPageProps = {
  searchParams: Promise<{
    product?: string;
  }>;
};

export default async function ProductRequestPage({
  searchParams,
}: ProductRequestPageProps) {
  const { product } = await searchParams;

  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
          Purchase Request
        </p>

        <h1 className="mt-4 font-heading text-5xl font-semibold text-olive-dark sm:text-6xl">
          Request a piece.
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          I&apos;ll reach
          out with availability, payment details, and next steps.
        </p>

        <form className="mt-12 space-y-8 rounded-[2rem] border border-border bg-background p-6 shadow-sm sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-foreground"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-foreground"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="product"
              className="text-sm font-semibold text-foreground"
            >
              Product
            </label>

            <select
              id="product"
              name="product"
              required
              defaultValue={product ?? ""}
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
            >
              <option value="" disabled>
                Select a product
              </option>

              <option value="rosa-espanola-8x10-print">
                Rosa Española — 8 × 10 Art Print
              </option>

              <option value="la-dj-8x10-print">
                La DJ — 8 × 10 Art Print
              </option>

              <option value="la-dj-11x14-canvas">
                La DJ — 11 × 14 Canvas
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="text-sm font-semibold text-foreground"
            >
              Quantity
            </label>

            <input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              defaultValue={1}
              required
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
            />
          </div>

          <div>
            <label
              htmlFor="notes"
              className="text-sm font-semibold text-foreground"
            >
              Notes
            </label>

            <p className="mt-1 text-sm text-muted-foreground">
              Add any questions, shipping details, or other information
              you&apos;d like me to know.
            </p>

            <textarea
              id="notes"
              name="notes"
              rows={5}
              placeholder="Anything else you'd like me to know?"
              className="mt-3 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none transition placeholder:text-muted-foreground/60 focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-olive-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
          >
            Send Purchase Request
          </button>
        </form>
      </div>
    </main>
  );
}