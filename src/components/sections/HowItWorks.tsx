import Image from "next/image";
import { howItWorks, howItWorksSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <Image
        src="/images/246CANON/IMG_4691.JPG"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-white/80"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeader
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          description={howItWorks.description}
          align="center"
          className="mb-14"
        />
        <ol className="grid gap-6 sm:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-navy/8 bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-water to-water-dark text-sm font-bold text-white">
                {step.step}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
