"use client";

import { FormEvent, useState } from "react";

type ArtworkInquiryFormProps = {
  artwork: string;
};

export function ArtworkInquiryForm({ artwork }: ArtworkInquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      artwork,
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/artwork-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send artwork inquiry.");
      }

      setStatusMessage("Your inquiry was sent successfully.");
      form.reset();
    } catch (error) {
      console.error("Artwork inquiry error:", error);
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 space-y-8 rounded-[2rem] border border-border bg-background p-6 shadow-sm sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-foreground">
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
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
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
        <label htmlFor="artwork" className="text-sm font-semibold text-foreground">
          Artwork
        </label>
        <input
          id="artwork"
          name="artwork"
          type="text"
          value={artwork}
          readOnly
          className="mt-2 w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-muted-foreground outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-foreground">
          Message
        </label>
        <p className="mt-1 text-sm text-muted-foreground">
          Ask about availability, pricing, prints, or anything else you&apos;d like to know about this piece.
        </p>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="I'm interested in this piece and would like to know more about..."
          className="mt-3 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none transition placeholder:text-muted-foreground/60 focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-olive-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>

      {statusMessage && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          {statusMessage}
        </p>
      )}
    </form>
  );
}
