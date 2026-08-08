"use client";

import { SubmitEvent, useState } from "react";

type PurchaseRequestFormProps = {
  selectedProduct?: string;
};

const products = [
  {
    id: "rosa-espanola-8x10-print",
    label: "Rosa Española — 8 × 10 Art Print",
  },
  {
    id: "la-dj-8x10-print",
    label: "La DJ — 8 × 10 Art Print",
  },
  {
    id: "la-dj-11x14-canvas",
    label: "La DJ — 11 × 14 Canvas",
  },
];

export function PurchaseRequestForm({
  selectedProduct,
}: PurchaseRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(
    event: SubmitEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSubmitting(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      products: formData.getAll("products"),
      notes: formData.get("notes"),
    };

    try {
      const response = await fetch("/api/purchase-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send purchase request."
        );
      }

      setMessage("Your purchase request was sent successfully.");

      form.reset();
    } catch (error) {
      console.error("Purchase request error:", error);

      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 space-y-8 rounded-[2rem] border border-border bg-background p-6 shadow-sm sm:p-10"
    >
      {/* Name and Email */}
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

      {/* Products */}
      <fieldset>
        <legend className="text-sm font-semibold text-foreground">
          Which pieces are you interested in?
        </legend>

        <p className="mt-1 text-sm text-muted-foreground">
          Select all that apply.
        </p>

        <div className="mt-4 space-y-3">
          {products.map((product) => (
            <label
              key={product.id}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-4 transition hover:border-rose-dark"
            >
              <input
                type="checkbox"
                name="products"
                value={product.id}
                defaultChecked={product.id === selectedProduct}
                className="h-4 w-4 accent-olive-dark"
              />

              <span className="text-sm text-foreground">
                {product.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Notes */}
      <div>
        <label
          htmlFor="notes"
          className="text-sm font-semibold text-foreground"
        >
          Notes
        </label>

        <p className="mt-1 text-sm text-muted-foreground">
          Add any questions or other information you&apos;d like me to know.
        </p>

        <textarea
          id="notes"
          name="notes"
          rows={5}
          placeholder="Anything else you'd like me to know?"
          className="mt-3 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none transition placeholder:text-muted-foreground/60 focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-olive-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Purchase Request"}
      </button>

      {message && (
        <p
          className="text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </form>
  );
}