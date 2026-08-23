import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ZeffyEmbedScript } from "@/components/ui/ZeffyEmbedScript";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support The Student Water Project.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Donation"
        description="Support our pilot project by making a donation! Every dollar counts!"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div
            dangerouslySetInnerHTML={{
              __html: `<div style="position:relative;overflow:hidden;width:100%;padding-top:120px;"><iframe title='Donation form powered by Zeffy' style='position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:120px' src='https://www.zeffy.com/embed/thermometer/tswp-general-donations'  allowTransparency="true"></iframe></div>
  <div data-zeffy-embed data-form-url="/embed/donation-form/tswp-general-donations"></div>
  <div data-zeffy-embed-fallback style="display:none;">
    <div style="position:relative;overflow:hidden;height:450px;width:100%;"><iframe title='Donation form powered by Zeffy' style='position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%' data-zeffy-embed-src='https://www.zeffy.com/embed/donation-form/tswp-general-donations' allowpaymentrequest allowTransparency="true"></iframe></div>
  </div>`,
            }}
          />
        </Container>
      </section>

      <ZeffyEmbedScript />
    </>
  );
}
