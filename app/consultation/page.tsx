"use client";

import Link from "next/link";

const projectTypes = [
  "Residential Landscape Lighting",
  "Patio / Outdoor Living",
  "Pathway / Entry Lighting",
  "Winery / Hospitality",
  "Builder / Designer Project",
  "Other",
];

export default function ConsultationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08090A] text-white">
      <section className="relative overflow-hidden px-5 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,149,82,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-10 inline-block text-sm text-white/60 transition hover:text-white"
          >
            ← Back to Home
          </Link>

          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C29552]">
              Consultation
            </p>

            <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
              Thoughtful lighting begins with a clear conversation.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Share a few details about your property, goals, and timeline.
              We’ll review your project and guide you toward the right lighting
              approach for the space.
            </p>

            <a
              href="#consultation-form"
              className="mt-10 inline-flex rounded-full bg-[#C29552] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#d8ae6b]"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
          {[
            {
              title: "Project Discovery",
              text: "We learn about the property, how the space is used, and what atmosphere you want to create.",
            },
            {
              title: "Lighting Direction",
              text: "We consider focal points, pathways, architecture, safety, visibility, and overall mood.",
            },
            {
              title: "Proposal Planning",
              text: "From there, we prepare a clear path forward with scope, fixture direction, and next steps.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h2 className="text-xl font-light">{item.title}</h2>
              <p className="mt-4 leading-7 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="consultation-form"
        className="px-5 pb-20 sm:px-10 sm:pb-24 lg:px-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:gap-12 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#C29552]">
              Start Here
            </p>

            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              Tell us about your lighting project.
            </h2>

            <p className="mt-5 leading-7 text-white/60">
              This form will send your consultation request directly to the
              Okanagan Lighting team for review.
            </p>
          </div>

          <form
            className="grid gap-5"
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = new FormData(e.currentTarget);

              const payload = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                location: formData.get("location"),
                projectType: formData.get("projectType"),
                timeline: formData.get("timeline"),
                message: formData.get("message"),
              };

              try {
                const response = await fetch("/api/consultation", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(payload),
                });

                if (!response.ok) {
                  throw new Error("Failed to submit consultation request");
                }

                alert("Consultation request submitted successfully.");
                e.currentTarget.reset();
              } catch (error) {
                console.error(error);
                alert("Something went wrong. Please try again.");
              }
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-white/40 focus:border-[#C29552]"
                placeholder="Name"
                required
              />

              <input
                name="email"
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-white/40 focus:border-[#C29552]"
                placeholder="Email"
                required
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="phone"
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-white/40 focus:border-[#C29552]"
                placeholder="Phone"
              />

              <input
                name="location"
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-white/40 focus:border-[#C29552]"
                placeholder="Project location"
              />
            </div>

            <select
              name="projectType"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-[#C29552]"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Project type
              </option>

              {projectTypes.map((type) => (
                <option key={type} value={type} className="text-black">
                  {type}
                </option>
              ))}
            </select>

            <select
              name="timeline"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-[#C29552]"
              defaultValue=""
            >
              <option value="" disabled>
                Estimated timeline
              </option>
              <option className="text-black">As soon as possible</option>
              <option className="text-black">Within 1–3 months</option>
              <option className="text-black">Within 3–6 months</option>
              <option className="text-black">Planning ahead</option>
            </select>

            <textarea
              name="message"
              className="min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-white/40 focus:border-[#C29552]"
              placeholder="Tell us about the property, goals, or areas you would like illuminated."
              required
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#C29552] px-7 py-4 text-sm font-medium text-black transition hover:bg-[#d8ae6b] sm:w-auto"
            >
              Submit Consultation Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
