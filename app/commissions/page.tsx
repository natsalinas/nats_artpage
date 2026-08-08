export default function CommissionsPage() {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
            Custom Art
          </p>

          <h1 className="mt-4 font-heading text-5xl font-semibold text-olive-dark sm:text-6xl">
            Let&apos;s create something personal.
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have an idea you&apos;d like turned
            into art? Tell me what you&apos;re thinking and I&apos;ll reach
            out so we can discuss the details together.
          </p>
        </div>

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
              htmlFor="artType"
              className="text-sm font-semibold text-foreground"
            >
              What kind of piece are you looking for?
            </label>

            <select
              id="artType"
              name="artType"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="bw">Black and White Drawing</option>
              <option value="sketch">Colored Pencil</option>
              <option value="canvas">Canvas</option>
              <option value="digital">Digital illustration</option>
              <option value="mural">Mural</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="size"
              className="text-sm font-semibold text-foreground"
            >
              Size
            </label>

            <select
              id="size"
              name="size"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
              defaultValue=""
            >
              <option value="" disabled>
                Select a size
              </option>
              <option value="8x8">8x8</option>
              <option value="11x14">11x14</option>
              <option value="16x20">16x20</option>
              <option value="custom">Custom Size</option>
              <option value="not-sure">Not Sure Yet</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="text-sm font-semibold text-foreground"
            >
              Tell me about your idea
            </label>

            <p className="mt-1 text-sm text-muted-foreground">
              Share the story, colors, mood, people, places, or references you
              have in mind.
            </p>

            <textarea
              id="description"
              name="description"
              required
              rows={8}
              placeholder="I would love a piece inspired by..."
              className="mt-3 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none transition placeholder:text-muted-foreground/60 focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-olive-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
          >
            Send Custom Art Request
          </button>
        </form>
      </div>
    </main>
  );
}