import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function VideoFeature() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="See it in action"
          title="Watch our story"
          align="center"
          className="mb-10"
        />
        <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-navy/5 shadow-sm">
          <iframe
            src="https://www.youtube-nocookie.com/embed/um8pDHKjFS0"
            title="The Student Water Project"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  );
}
