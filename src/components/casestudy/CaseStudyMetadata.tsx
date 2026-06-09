import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import type { CaseStudy } from "../../types";

interface CaseStudyMetadataProps {
    caseStudy: CaseStudy;
}

/**
 * Case study metadata — Instrument-style.
 *
 * Layout:
 * - "Details" label at 25% offset
 * - Metadata table at 50% offset
 * - Each row: label (muted) | value (dark)
 * - Subtle dividers between rows
 */
export const CaseStudyMetadata = ({ caseStudy }: CaseStudyMetadataProps) => {
    const rows = [
        { label: "Client", value: caseStudy.client },
        { label: "Year", value: caseStudy.year },
        { label: "Service", value: caseStudy.service },
    ];

    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="container-wide mt-16 md:mt-24"
            aria-label="Project details"
        >
            <div className="md:flex">
                {/* Label column — 25% */}
                <div className="md:w-1/4 mb-6 md:mb-0">
                    <p className="text-label text-tertiary">Details</p>
                </div>

                {/* Content column — 75% (starts at 25%, table at ~50%) */}
                <div className="md:w-3/4 md:pl-[33.33%]">
                    {/* Metadata rows */}
                    {rows.map((row, i) => (
                        <div
                            key={row.label}
                            className={`flex items-baseline justify-between py-4 ${
                                i < rows.length - 1
                                    ? "border-b border-outline-variant"
                                    : ""
                            }`}
                        >
                            <p className="text-body-sm text-tertiary w-1/3">
                                {row.label}
                            </p>
                            <p className="text-body-sm text-primary w-2/3 text-right md:text-left">
                                {row.value}
                            </p>
                        </div>
                    ))}

                    {/* Brief — below the table */}
                    <div className="mt-6 border-t border-outline-variant pt-4">
                        <div className="flex flex-col md:flex-row md:items-baseline">
                            <p className="text-body-sm text-tertiary md:w-1/3 mb-2 md:mb-0">
                                Brief
                            </p>
                            <p className="text-body-sm text-secondary leading-relaxed md:w-2/3 text-justify">
                                {caseStudy.brief}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
