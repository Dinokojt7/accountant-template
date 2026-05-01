import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import Link from "next/link";
import siteData from "@/lib/data/site-data.json";

export const metadata = {
  title: "Testimonials | Krol Finance",
  description: "See what our clients say about working with Krol Finance.",
};

export default function TestimonialsPage() {
  const { testimonials, business } = siteData;

  return (
    <>
      <PageHero
        eyebrow="Client Stories"
        title={
          <>
            What our clients
            <br />
            <em>say about us.</em>
          </>
        }
        subtitle="Real results from real businesses who trusted Krol Finance with their financial future."
      />

      <section
        className="w-full py-20 px-6 sm:px-10 lg:px-16"
        style={{ backgroundColor: "var(--bg-warm)" }}
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Logo panel */}
              <div className="flex items-center justify-center bg-white px-10 pt-10 pb-6">
                <div className="relative w-full h-48">
                  <Image
                    src={t.image}
                    alt={t.company}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-5">
                  <p
                    className="text-xs font-bold tracking-[0.25em] uppercase mb-1"
                    style={{ color: "#A09060" }}
                  >
                    {t.companyType}
                  </p>
                  <p
                    className="text-lg font-black uppercase leading-tight"
                    style={{ color: "var(--primary)" }}
                  >
                    {t.headline}
                  </p>
                  <p
                    className="text-xs tracking-wide mt-0.5"
                    style={{ color: "#9CA3AF" }}
                  >
                    {t.subheadline}
                  </p>
                </div>
                <div
                  className="w-8 h-px mb-5"
                  style={{ backgroundColor: "var(--primary)" }}
                />
                <p
                  className="text-sm leading-relaxed italic flex-1"
                  style={{ color: "#5A5A5A" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                  <div
                    className="w-6 h-px"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--primary)" }}
                    >
                      {t.author}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="mb-3"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 40px)",
              color: "var(--primary)",
            }}
          >
            Ready to be our next success story?
          </h2>
          <p className="text-sm mb-6" style={{ color: "#5A5A5A" }}>
            Book a free consultation and let&apos;s get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-white rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Get in touch
            </Link>
            <Link
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 border-2 border-gray-300 text-sm font-medium rounded-full hover:border-gray-900 transition-colors"
              style={{ color: "var(--primary)" }}
            >
              WhatsApp us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
