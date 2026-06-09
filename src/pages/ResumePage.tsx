import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/animations";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { resumeData } from "../data/resume";

/**
 * Resume Page — Instrument-style with offset grid.
 *
 * Sections:
 * 1. Header: Name + contact links
 * 2. Summary: offset grid
 * 3. Skills (from skills data)
 * 4. Experience: offset grid with bullet points
 * 5. Projects: offset grid with highlights
 */
export const ResumePage = () => {
    return (
        <>
            <Navbar />

            <main id="main-content" className="pt-28 pb-24 md:pt-36 md:pb-32">
                <div className="container-wide">
                    {/* Header */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Name */}
                        <h1 className="text-headline text-primary">
                            Raju Pradhani
                        </h1>

                        {/* Contact links row */}
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <a
                                href={`mailto:${resumeData.contact.email}`}
                                className="inline-flex items-center gap-2 text-body-sm text-secondary transition-colors hover:text-primary"
                            >
                                <span className="material-symbols-outlined text-base">
                                    mail
                                </span>
                                {resumeData.contact.email}
                            </a>
                            <a
                                href={resumeData.contact.portfolio}
                                className="inline-flex items-center gap-1 text-body-sm text-secondary transition-colors hover:text-primary"
                            >
                                Portfolio
                                <span className="material-symbols-outlined text-base">
                                    arrow_outward
                                </span>
                            </a>
                            <a
                                href={resumeData.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-body-sm text-secondary transition-colors hover:text-primary"
                            >
                                LinkedIn
                                <span className="material-symbols-outlined text-base">
                                    arrow_outward
                                </span>
                            </a>
                            <a
                                href={resumeData.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-body-sm text-secondary transition-colors hover:text-primary"
                            >
                                GitHub
                                <span className="material-symbols-outlined text-base">
                                    arrow_outward
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Summary — offset grid */}
                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-16 md:mt-24"
                        aria-label="Summary"
                    >
                        <div className="md:flex">
                            <div className="md:w-1/4 mb-4 md:mb-0">
                                <p className="text-label text-tertiary">
                                    Summary
                                </p>
                            </div>
                            <div className="md:w-3/4 md:pl-[33.33%]">
                                <hr className="border-outline-variant mb-8" />
                                <p className="text-body-lg text-secondary leading-relaxed">
                                    {resumeData.summary}
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Experience — offset grid */}
                    <motion.section
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        className="mt-16 md:mt-24"
                        aria-label="Experience"
                    >
                        <div className="md:flex">
                            <div className="md:w-1/4 mb-4 md:mb-0">
                                <p className="text-label text-tertiary">
                                    Experience
                                </p>
                            </div>
                            <div className="md:w-3/4 md:pl-[33.33%]">
                                <hr className="border-outline-variant mb-8" />
                                {resumeData.experience.map((exp, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeInUp}
                                        className="mb-8 last:mb-0"
                                    >
                                        <h3 className="text-title text-primary mb-4">
                                            {exp.role}
                                        </h3>
                                        <ul className="space-y-3">
                                            {exp.bullets.map((bullet, j) => (
                                                <li
                                                    key={j}
                                                    className="text-body-sm text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-tertiary"
                                                >
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Projects — offset grid */}
                    <motion.section
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        className="mt-16 md:mt-24"
                        aria-label="Projects"
                    >
                        <div className="md:flex">
                            <div className="md:w-1/4 mb-4 md:mb-0">
                                <p className="text-label text-tertiary">
                                    Projects
                                </p>
                            </div>
                            <div className="md:w-3/4 md:pl-[33.33%]">
                                <hr className="border-outline-variant mb-8" />
                                <div className="space-y-12">
                                    {resumeData.projects.map((project, i) => (
                                        <motion.div key={i} variants={fadeInUp}>
                                            <h3 className="text-title text-primary mb-3">
                                                {project.title}
                                            </h3>
                                            <p className="text-body-sm text-secondary leading-relaxed mb-4">
                                                {project.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {project.highlights.map(
                                                    (h, j) => (
                                                        <li
                                                            key={j}
                                                            className="flex items-start gap-2 text-body-sm text-secondary"
                                                        >
                                                            <span className="material-symbols-outlined text-base text-tertiary mt-0.5">
                                                                check
                                                            </span>
                                                            {h}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </main>

            <Footer />
        </>
    );
};
