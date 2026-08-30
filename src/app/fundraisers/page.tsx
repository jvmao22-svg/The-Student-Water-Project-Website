import type { Metadata } from "next";
import type { FundraiserInitiative } from "@/types";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";
import { fundraiserInitiatives, fundraisersPage } from "@/data/fundraisers";

export const metadata: Metadata = {
  title: "Fundraisers",
  description: fundraisersPage.description,
};

function InitiativeCard({ initiative }: { initiative: FundraiserInitiative }) {
  return (
    <article className="grid gap-8 overflow-hidden rounded-2xl border border-navy/8 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-water/10 shadow-sm">
                      <Image
                          src="/images/246CANON/IMG_4684.JPG"
                          alt={initiative.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                  </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-water-dark">
                  {initiative.subtitle}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
                  {initiative.title}
                </h2>
                <dl className="mt-4 grid gap-2 text-sm text-navy/65 sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-navy">Type</dt>
                    <dd>{initiative.type}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Date</dt>
                    <dd>{initiative.date}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Location</dt>
                    <dd>{initiative.location}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Status</dt>
                    <dd>{initiative.status}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm leading-relaxed text-navy/70">
                  Led by: {initiative.ledBy}
                </p>
                <p className="mt-4 text-base leading-relaxed text-navy/75">
                  {initiative.summary}
                </p>
                {initiative.details.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-navy/70">
                    {initiative.details.map((detail) => (
                      <li key={detail.slice(0, 40)}>{detail}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  {initiative.primaryCta && (
                    <Button
                      href={initiative.primaryCta.href}
                      variant="secondary"
                      external={initiative.primaryCta.external}
                    >
                      {initiative.primaryCta.label}
                    </Button>
                  )}
                  {initiative.secondaryCta && (
                    <Button
                      href={initiative.secondaryCta.href}
                      variant="outline"
                      external={initiative.secondaryCta.external}
                    >
                      {initiative.secondaryCta.label}
                    </Button>
                  )}
                  {initiative.tertiaryCta && (
                    <Button
                      href={initiative.tertiaryCta.href}
                      variant="outline"
                      external={initiative.tertiaryCta.external}
                    >
                      {initiative.tertiaryCta.label}
                    </Button>
                  )}
                </div>
              </div>
    </article>
  );
}

export default function FundraisersPage() {
  const currentInitiatives = fundraiserInitiatives.filter(
    (initiative) => initiative.status !== "Completed"
  );
  const completedInitiatives = fundraiserInitiatives.filter(
    (initiative) => initiative.status === "Completed"
  );

  return (
    <>
      <PageHero
        eyebrow={fundraisersPage.eyebrow}
        title={fundraisersPage.title}
        description={fundraisersPage.description}
      />

      <section className="pt-16 sm:pt-24">
        <Container className="space-y-10">
          <SectionHeader title="Current Initiatives" className="mb-6" />
          {currentInitiatives.length === 0 ? (
            <p className="text-base text-navy/70">None at the moment.</p>
          ) : (
            currentInitiatives.map((initiative) => (
              <InitiativeCard key={initiative.slug} initiative={initiative} />
            ))
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="space-y-10">
          <SectionHeader title="Completed Events" className="mb-6" />
          {completedInitiatives.map((initiative) => (
            <InitiativeCard key={initiative.slug} initiative={initiative} />
          ))}
        </Container>
      </section>

      <CTA
        title="Thank you for supporting our 12,000 KM Challenge"
        description="The challenge has wrapped up, but you can still see the student-designed challenge site or donate through our campaign page."
        primaryCta={{
          label: "See Challenge Site",
          href: "https://tswp12k.vercel.app/",
        }}
        secondaryCta={{
          label: "We're Still Accepting Donations!",
          href: "https://www.zeffy.com/en-CA/peer-to-peer/25-000-km-challenge",
        }}
        variant="gradient"
      />
    </>
  );
}
