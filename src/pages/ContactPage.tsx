import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animations";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { siteConfig } from "../data/siteConfig";

/**
 * Contact Page — Instrument-style with offset grid.
 *
 * Layout:
 * - Large serif "Let's collaborate." heading
 * - Description paragraph
 * - "Direct" section: email + location
 * - "Social" section: social link pills
 */
export const ContactPage = () => {
    return (
        <>
            <Navbar />

            <main id="main-content" className="pt-28 pb-24 md:pt-36 md:pb-32">
                <div className="container-wide">
                    {/* Hero heading */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-headline text-primary">
                            Let's collaborate.
                        </h1>
                        <p className="text-body-lg text-secondary mt-6 max-w-2xl leading-relaxed">
                            Whether you have a specific project in mind or just
                            want to explore possibilities, I'm ready to bring
                            your vision to life with precision and care.
                        </p>
                    </motion.div>

                    {/* Contact Details */}
                    <div className="mt-16 md:mt-24 space-y-16 md:space-y-20">
                        {/* Direct section */}
                        <motion.section
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="md:flex">
                                <div className="md:w-1/4 mb-6 md:mb-0">
                                    <h2 className="text-label text-tertiary">
                                        Direct
                                    </h2>
                                </div>
                                <div className="md:w-3/4 md:pl-[33.33%]">
                                    {/* Email */}
                                    <div className="border-b border-outline-variant pb-5 mb-5">
                                        <a
                                            href={`mailto:${siteConfig.email}`}
                                            className="group flex items-center gap-3 text-body-lg text-primary transition-colors hover:text-secondary"
                                        >
                                            <span className="material-symbols-outlined text-tertiary text-xl">
                                                mail
                                            </span>
                                            {siteConfig.email}
                                        </a>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-tertiary text-xl mt-0.5">
                                            location_on
                                        </span>
                                        <div>
                                            <p className="text-body-sm text-primary">
                                                India
                                            </p>
                                            <p className="text-body-sm text-tertiary mt-0.5">
                                                Available Globally
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Social section */}
                        <motion.section
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="md:flex">
                                <div className="md:w-1/4 mb-6 md:mb-0">
                                    <h2 className="text-label text-tertiary">
                                        Social
                                    </h2>
                                </div>
                                <div className="md:w-3/4 md:pl-[33.33%]">
                                    <div className="flex flex-wrap gap-3">
                                        {siteConfig.socials.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-[var(--radius-nav)] border border-outline-variant px-5 py-2.5 text-body-sm text-primary transition-all duration-300 hover:bg-surface-container hover:border-tertiary"
                                            >
                                                {social.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};
