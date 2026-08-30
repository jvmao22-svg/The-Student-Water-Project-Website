import Image from "next/image";
import { currentSponsors } from "@/data/sponsors";
import { Container } from "@/components/ui/Container";
import { MascotField } from "@/components/ui/MascotField";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SponsorsStrip() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <MascotField
        mascots={["/images/mascot/science.png", "/images/mascot/location.png"]}
      />
      <Container className="relative">
        <SectionHeader
          title="Currently Supported By"
          description="Project partners named across The Student Water Project site."
          align="center"
          className="mb-10"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {currentSponsors.map((sponsor) => (
            <li
              key={sponsor.name}
              className="flex min-h-36 items-center justify-center rounded-2xl border border-navy/8 bg-water/5 px-6 py-5 text-center"
            >
              <div className="relative h-24 w-full">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
