import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { MascotField } from "@/components/ui/MascotField";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Have a question, partnership idea, or want to learn more about The Student Water Project? Get in touch with our team.",
};

export default function ContactPage() {
    return (
        <>
            <PageHero
                eyebrow="Contact"
                title="Get in touch"
                description="Have a question, partnership idea, or want to learn more about The Student Water Project? We'd love to hear from you."
                mascotSrc="/images/mascot/location.png"
                mascotAlt="Student Water Project droplet mascot standing beside a signpost"
            />

            <section className="relative overflow-hidden py-16 sm:py-20">
                <MascotField
                    mascots={["/images/mascot/waving.png", "/images/mascot/mail.png"]}
                />
                <Container className="relative">
                    <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold text-navy">
                                Start a conversation
                            </h2>

                            <p className="mt-5 leading-7 text-navy/70">
                                Whether you are interested in volunteering, collaborating,
                                supporting a project, or simply learning more about our work,
                                reach out to our team.
                            </p>

                            <a
                                href="mailto:thestudentwaterproject@gmail.com"
                                className="mt-6 inline-block font-semibold text-sky hover:underline"
                            >
                                thestudentwaterproject@gmail.com
                            </a>
                        </div>

                        <div className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm sm:p-8">
                            <h2 className="text-xl font-bold text-navy">
                                Send us a message
                            </h2>

                            <iframe
                                src="https://talented-practice-cd0.notion.site/ebd//6d3a6fd3e37f4c788aec15ecffcfb4c2"
                                width="100%"
                                height="600"
                                className="mt-5 rounded-2xl border border-navy/10"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}