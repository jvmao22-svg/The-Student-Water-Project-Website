import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MascotField } from "@/components/ui/MascotField";

export function MerchandiseSignup() {
    return (
        <section className="relative overflow-hidden bg-sky/10 py-16 sm:py-20">
            <MascotField
                mascots={["/images/mascot/donate.png", "/images/mascot/mail.png"]}
            />
            <Container className="relative">
                <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px]">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky">
                            Merchandise
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                            Support TSWP in style
                        </h2>

                        <p className="mt-5 leading-7 text-navy/70">
                            We are working on new Student Water Project merchandise. Sign up
                            to hear about future releases and ways you can support our work.
                        </p>

                        <iframe
                            src="https://talented-practice-cd0.notion.site/ebd//564de2dbf7f7415a964db77e33e8a946"
                            width="100%"
                            height="600"
                            className="mt-7 rounded-2xl border border-navy/10"
                            allowFullScreen
                        />
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src="/images/mascot/shopping.png"
                            alt="Student Water Project droplet mascot carrying shopping bags"
                            width={360}
                            height={360}
                            className="h-auto max-h-[330px] w-auto max-w-full object-contain"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}