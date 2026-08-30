import Image from "next/image";
import { galleryPhotos } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PhotoGallery() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="In the field"
          title="Photo Gallery"
          description="Moments from our projects, fundraisers, and student teams at work."
          align="center"
          className="mb-10"
        />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryPhotos.map((photo) => (
            <li
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-2xl bg-water/10 shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
