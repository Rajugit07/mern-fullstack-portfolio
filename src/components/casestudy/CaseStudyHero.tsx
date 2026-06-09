import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import type { CaseStudy } from "../../types";

interface CaseStudyHeroProps {
    title: string;
    category: string;
    caseStudy: CaseStudy;
    heroImage: string;
}

/**
 * Case study hero — Instrument-style pixel-perfect.
 *
 * Layout grid:
 * - Eyebrow "Case Study" at far-left margin
 * - Headline starts at ~25% offset
 * - Full-width hero image below
 */
export const CaseStudyHero = ({
    title,
    category,
    caseStudy,
    heroImage,
}: CaseStudyHeroProps) => {
    return (
        <section className="pt-28 md:pt-36" aria-label={`${title} case study`}>
            <div className="container-wide">
                {/* Eyebrow — far left */}

                {/* Headline — offset 25% from left */}
                <motion.h1
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-headline text-tertiary md:pl-[15%] -mb-4 max-w-[85%] sm:pt-32 text-justify"
                >
                    {caseStudy.headline}
                </motion.h1>
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-label text-tertiary mb-10 md:mb-10 pt-8"
                >
                    Case Study
                </motion.p>
            </div>

            {/* Full-width hero image */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="container-wide mt-12 md:mt-20"
            >
                <div className="overflow-hidden rounded-(--radius-button) bg-surface-container">
                    <img
                        src={heroImage}
                        alt={`${title} — ${category}`}
                        className="w-full h-auto block object-contain"
                        loading="eager"
                    />
                </div>
            </motion.div>
        </section>
    );
};
