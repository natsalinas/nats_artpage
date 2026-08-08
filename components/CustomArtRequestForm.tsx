"use client";

import { SubmitEvent, useState } from "react";

export function CustomArtRequestForm() {
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
      artType: formData.get("artType"),
      size: formData.get("size"),
      description: formData.get("description"),
    };

    try {
      const response = await fetch("/api/custom-art-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send custom art request."
        );
      }

      setMessage("Your custom art request was sent successfully.");
      form.reset();
    } catch (error) {
      console.error("Custom art request error:", error);

      setMessage(
        "Something went wrong. Please try again."
      );
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
          required
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
        >
          <option value="" disabled>
            Select an option
          </option>

          <option value="bw">Black and White Drawing</option>
          <option value="colored-pencil">Colored Pencil</option>
          <option value="canvas">Canvas</option>
          <option value="digital">Digital Illustration</option>
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
          required
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-rose-dark focus:ring-2 focus:ring-rose/20"
        >
          <option value="" disabled>
            Select a size
          </option>

          <option value="8x8">8 × 8 in</option>
          <option value="11x14">11 × 14 in</option>
          <option value="16x20">16 × 20 in</option>
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
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-olive-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Custom Art Request"}
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