"use client";

import Link from "next/link";

const projectTypes = [
  "Residential Lighting",
  "Patio / Outdoor Living",
  "Pathway / Entry Lighting",
  "Winery / Hospitality",
  "Builder / Designer Project",
  "Smaller Lighting Upgrade",
  "Other",
];

export default function ConsultationClient() {
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
              The Consultation
            </p>

            <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
              Better lighting starts with a conversation.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Every project begins by understanding the people, property, and
              goals behind it.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              The consultation is an opportunity to explore ideas, discuss
              priorities, identify opportunities, and gather the information
              needed to make informed lighting decisions before installation
              begins.
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
              text: "We discuss the property, how the space is used, and what you hope to achieve.",
            },
            {
              title: "Lighting Opportunities",
              text: "Together, we explore areas where lighting may improve functionality, comfort, visibility, safety, and overall experience.",
            },
            {
              title: "Planning & Next Steps",
              text: "We review the information gathered and establish a clear path forward for the project.",
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
              Start the Conversation
            </p>

            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              Tell us about your project.
            </h2>

            <p className="mt-5 leading-7 text-white/60">
              Whether you're exploring ideas, planning a renovation, improving
              an outdoor living space, or simply looking for guidance, the
              consultation is an opportunity to better understand the property,
              goals, and opportunities before decisions are made.
            </p>

            <p className="mt-4 leading-7 text-white/60">
              Share a few details about your project and we'll review the
              information before reaching out to discuss potential next steps.
            </p>
          </div>

          <form
            className="grid gap-5"
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const formData = new FormData(form);

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

                form.reset();

                alert("Consultation request submitted successfully.");
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
              placeholder="Tell us about the property, goals, or areas you would like to improve with lighting."
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