import { CTA } from "@/components/sections/CTA";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { FundraisersPreview } from "@/components/sections/FundraisersPreview";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { MerchandiseSignup } from "@/components/sections/MerchandiseSignup";
import { SocialFollow } from "@/components/sections/SocialFollow";
import { SponsorsStrip } from "@/components/sections/SponsorsStrip";
import { VideoFeature } from "@/components/sections/VideoFeature";
import { FloatingCircle } from "@/components/ui/FloatingCircle";
import { homeFinalCta } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <HowItWorks />

      <div className="relative">
        <FloatingCircle
          src="/images/246CANON/IMG_4676.JPG"
          size={320}
          className="right-[1%] top-1/4 hidden lg:block"
          speed={0.12}
        />
        <VideoFeature />
      </div>

      <FeaturedProject />

      <div className="relative">
        <FloatingCircle
          src="/images/246CANON/IMG_4644.JPG"
          size={300}
          className="left-[1%] top-1/3 hidden lg:block"
          speed={0.16}
          delay={1}
        />
        <FundraisersPreview />
      </div>

      <div className="relative">
        <FloatingCircle
          src="/images/246CANON/IMG_4625.JPG"
          size={280}
          className="right-[1%] top-1/3 hidden lg:block"
          speed={0.14}
          delay={2}
        />
        <MerchandiseSignup />
      </div>

      <SocialFollow />

      <div className="relative">
        <FloatingCircle
          src="/images/246CANON/IMG_4638.JPG"
          size={300}
          className="left-[1%] top-1/4 hidden lg:block"
          speed={0.18}
          delay={0.5}
        />
        <SponsorsStrip />
      </div>

      <CTA
        title={homeFinalCta.title}
        primaryCta={homeFinalCta.primaryCta}
        secondaryCta={homeFinalCta.secondaryCta}
        variant="gradient"
      />
    </>
  );
}
