import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import type { CaseStudySection as SectionType } from "../../types";

interface CaseStudySectionsProps {
    sections: SectionType[];
}

/**
 * Case study content sections — Instrument-style pixel-perfect.
 *
 * Each section uses the offset grid:
 * - Label ("Details" / "Body") at 25% offset (left column)
 * - Heading or body text at 50% offset (right column)
 * - Full-width images between text blocks
 * - Horizontal divider at 50% offset before each section
 */
export const CaseStudySections = ({ sections }: CaseStudySectionsProps) => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="mt-16 md:mt-28 space-y-0"
        >
            {sections.map((section, index) => (
                <motion.section
                    key={index}
                    variants={fadeInUp}
                    aria-label={section.label}
                >
                    {/* Text content block with offset grid */}
                    {(section.heading || section.body) && (
                        <div className="container-wide py-8 md:py-4">
                            {/* Divider line at 50% offset */}
                            <div className="md:flex">
                                <div className="hidden md:block md:w-1/4" />
                                <div className="md:w-3/4 md:pl-[33.33%]">
                                    {/* <hr className="border-outline-variant mb-10 md:mb-14" /> */}
                                </div>
                            </div>

                            {/* Heading row: label at 25%, heading at 50% */}
                            {section.heading && (
                                <div className="md:flex mb-8 md:mb-12 text-justify">
                                    <div className="md:w-1/4 mb-4 md:mb-0">
                                        <p className="text-label text-tertiary">
                                            {section.label}
                                        </p>
                                    </div>
                                    <div className="md:w-3/4 md:pl-[33.33%]">
                                        <h2 className="text-title text-tertiary">
                                            {section.heading}
                                        </h2>
                                    </div>
                                </div>
                            )}

                            {/* Body row: label at 25%, body at 50% */}
                            {section.body && (
                                <div className="md:flex ">
                                    <div className="md:w-1/4 mb-4 md:mb-0">
                                        {!section.heading && (
                                            <p className="text-label text-tertiary">
                                                {section.label}
                                            </p>
                                        )}
                                        {section.heading && (
                                            <p className="text-label text-tertiary">
                                                Body
                                            </p>
                                        )}
                                    </div>
                                    <div className="md:w-3/4 md:pl-[33.33%]">
                                        <p className="text-body-lg text-secondary leading-relaxed text-justify ">
                                            {section.body}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Full-width image */}
                    {section.image && (
                        <div className="container-wide py-4">
                            <div className="overflow-hidden rounded-[var(--radius-button)] bg-surface-container">
                                <img
                                    src={section.image}
                                    alt={section.imageAlt ?? ""}
                                    className="w-full h-auto block object-contain"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    )}
                </motion.section>
            ))}
        </motion.div>
    );
};
