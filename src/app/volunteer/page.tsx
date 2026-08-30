import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { openPostings } from "@/data/volunteerPostings";

export const metadata: Metadata = {
    title: "Volunteer",
    description:
        "Join The Student Water Project as a volunteer. Browse current openings and find out how to get involved.",
};

export default function VolunteerPage() {
    return (
        <>
            <PageHero
                eyebrow="Volunteer"
                title="Make an impact with us"
                description="The Student Water Project is powered by students and volunteers who care about water, education, and creating meaningful change."
                mascotSrc="/images/mascot/waving.png"
                mascotAlt="Student Water Project droplet mascot waving beside a signpost"
            >
                <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/5csXRHYqDMc6sr2Fx8eNqw?utm_source=generator&si=580a0a7782f3406c"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </PageHero>

            <section className="relative overflow-hidden py-16 sm:py-20">
                <Image
                    src="/images/246CANON/IMG_4628.JPG"
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
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold text-navy">
                            Current Opportunities
                        </h2>

                        <p className="mt-4 leading-7 text-navy/70">
                            We post open volunteer roles here as they become available. Each
                            posting includes a summary of the position below — open the full
                            listing to see role details, requirements, and the application
                            link.
                        </p>
                    </div>

                    <div className="mt-8 space-y-6">
                        {openPostings.map((posting) => (
                            <article
                                key={posting.title}
                                className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm sm:p-9"
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-water-dark">
                                            {posting.subtitle}
                                        </p>
                                        <h3 className="mt-1 text-xl font-bold text-navy">
                                            {posting.title}
                                        </h3>
                                    </div>

                                    <span className="rounded-full bg-sky/10 px-4 py-1.5 text-xs font-semibold text-navy">
                                        {posting.deadline}
                                    </span>
                                </div>

                                <p className="mt-4 leading-7 text-navy/70">
                                    {posting.summary}
                                </p>

                                <ul className="mt-4 space-y-1.5 text-sm text-navy/60">
                                    {posting.details.map((detail) => (
                                        <li key={detail} className="flex gap-2">
                                            <span aria-hidden="true">•</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6">
                                    <Button href={posting.pdfHref} external>
                                        View posting & apply
                                    </Button>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 rounded-3xl bg-sky/10 p-8 text-center sm:p-12">
                        <h2 className="text-3xl font-bold text-navy">
                            Interested in getting involved?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-navy/70">
                            Reach out to the team and tell us a little about yourself and how
                            you would like to contribute.
                        </p>

                        <div className="mt-7 flex justify-center">
                            <Button href="/contact">
                                Contact our team
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}