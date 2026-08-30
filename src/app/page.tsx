import { CTA } from "@/components/sections/CTA";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { FundraisersPreview } from "@/components/sections/FundraisersPreview";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { MerchandiseSignup } from "@/components/sections/MerchandiseSignup";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { SocialFollow } from "@/components/sections/SocialFollow";
import { SponsorsStrip } from "@/components/sections/SponsorsStrip";
import { VideoFeature } from "@/components/sections/VideoFeature";
import { VolunteerPostingsPreview } from "@/components/sections/VolunteerPostingsPreview";
import { homeFinalCta } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <HowItWorks />
      <VideoFeature />
      <FeaturedProject />
      <FundraisersPreview />
      <MerchandiseSignup />
      <VolunteerPostingsPreview />
      <SocialFollow />
      <SponsorsStrip />
      <PhotoGallery />

      <CTA
        title={homeFinalCta.title}
        primaryCta={homeFinalCta.primaryCta}
        secondaryCta={homeFinalCta.secondaryCta}
        variant="gradient"
      />
    </>
  );
}
