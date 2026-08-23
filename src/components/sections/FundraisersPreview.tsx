import Image from "next/image";
import { challengeHomePreview } from "@/data/fundraisers";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FundraisersPreview() {
  return (
    <section className="bg-water/5 py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Events"
          title="Current Fundraising Initiatives"
          className="mb-10"
        />
        <div className="grid items-center gap-10 rounded-2xl border border-navy/8 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-water/10 shadow-sm">
            <Image
              src="/images/246CANON/IMG_4608.JPG"
              alt={challengeHomePreview.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-water-dark">
              {challengeHomePreview.subtitle}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
              {challengeHomePreview.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              {challengeHomePreview.summary}
            </p>
            <p className="mt-4 font-medium text-navy">Participants can:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-navy/70">
              {challengeHomePreview.participantsCan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={challengeHomePreview.primaryCta.href} variant="primary">
                {challengeHomePreview.primaryCta.label}
              </Button>
              {challengeHomePreview.externalCtas.map((cta) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  variant="outline"
                  external={cta.external}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
