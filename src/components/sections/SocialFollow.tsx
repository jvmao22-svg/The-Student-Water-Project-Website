import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MascotField } from "@/components/ui/MascotField";

export function SocialFollow() {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20">
            <MascotField
                mascots={["/images/mascot/friends.png", "/images/mascot/nerd-water.png"]}
            />
            <Container className="relative">
                <div className="grid items-center gap-10 rounded-3xl bg-navy px-8 py-10 text-white sm:px-12 lg:grid-cols-[1fr_320px] lg:py-12">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky">
                            Follow our journey
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Keep up with TSWP
                        </h2>

                        <p className="mt-5 leading-7 text-white/70">
                            Follow The Student Water Project for project updates, student
                            stories, events, research, and new ways to get involved.
                        </p>

                        <a
                            href="https://www.instagram.com/thestudentwaterproject/"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-bold text-navy transition hover:bg-sky hover:text-white"
                        >
                            Follow us on Instagram
                        </a>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src="/images/mascot/camera.png"
                            alt="Student Water Project droplet mascot holding a camera"
                            width={320}
                            height={320}
                            className="h-auto max-h-[290px] w-auto max-w-full object-contain"
                        />
                    </div>

                    <div
                        className="min-h-[560px] overflow-hidden rounded-2xl bg-white lg:col-span-2 [&_iframe]:min-h-[560px] [&_iframe]:w-full [&_iframe]:border-0"
                        dangerouslySetInnerHTML={{
                            __html: `<script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="https://cdn.lightwidget.com/widgets/d1dd5d408b42550ba6ba6ac4632437f9.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>`,
                        }}
                    />
                </div>
            </Container>
        </section>
    );
}