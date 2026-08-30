import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MascotField } from "@/components/ui/MascotField";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { openPostings } from "@/data/volunteerPostings";

export function VolunteerPostingsPreview() {
  if (openPostings.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-sky/10 py-16 sm:py-20">
      <MascotField
        mascots={["/images/mascot/waving.png", "/images/mascot/donate.png"]}
      />
      <Container className="relative">
        <SectionHeader
          eyebrow="Volunteer"
          title="We're hiring volunteers"
          description="Join our student-led team and gain hands-on experience while helping bring clean water to communities in need."
          className="mb-10"
        />

        <div className="space-y-6">
          {openPostings.map((posting) => (
            <div
              key={posting.title}
              className="flex flex-col gap-4 rounded-2xl border border-navy/8 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-water-dark">
                  {posting.subtitle}
                </p>
                <h3 className="mt-1 text-xl font-bold text-navy">
                  {posting.title}
                </h3>
                <p className="mt-2 text-sm text-navy/60">{posting.deadline}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={posting.pdfHref} external>
                  View posting & apply
                </Button>
                <Button href="/volunteer" variant="outline">
                  See all opportunities
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
