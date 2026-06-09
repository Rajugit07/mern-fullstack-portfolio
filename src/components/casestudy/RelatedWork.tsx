import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer, imageZoom } from "../../lib/animations";
import type { Project } from "../../types";

interface RelatedWorkProps {
    projects: Project[];
}

/**
 * Related work section — Instrument-style pixel-perfect.
 *
 * Layout:
 * - "Related work" label at 25% offset
 * - Large serif heading at 50% offset
 * - 3-column grid of project cards below
 */
export const RelatedWork = ({ projects }: RelatedWorkProps) => {
    if (projects.length === 0) return null;

    return (
        <section
            className="mt-20 md:mt-36 pb-16 md:pb-24"
            aria-label="Related work"
        >
            <div className="container-wide">
                {/* Header: label at 25%, heading at 50% */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="md:flex mb-12 md:mb-20"
                >
                    <div className="md:w-1/4 mb-4 md:mb-0">
                        <p className="text-label text-tertiary">Related work</p>
                    </div>
                    <div className="md:w-3/4 md:pl-[10%]">
                        <h2 className="text-subtitle text-primary">
                            Check out other
                            <br className="hidden md:block" />
                            cool projects which will
                            <br className="hidden md:block" />
                            blow your mind
                        </h2>
                    </div>
                </motion.div>

                {/* Project Grid — 3 columns */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.slice(0, 3).map((project) => {
                        const card = (
                            <motion.div
                                className="relative overflow-hidden rounded-[var(--radius-card)] bg-surface-container"
                                initial="rest"
                                whileHover={
                                    project.comingSoon ? undefined : "hover"
                                }
                                animate="rest"
                            >
                                <div className="relative aspect-[16/10] w-full overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={`${project.title} project`}
                                        className={`absolute inset-0 h-full w-full object-cover object-top ${project.comingSoon ? "opacity-40 grayscale" : ""}`}
                                        variants={
                                            project.comingSoon
                                                ? undefined
                                                : imageZoom
                                        }
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <div className="absolute top-5 left-5 z-10">
                                    <h3 className="text-title text-primary">
                                        {project.title}
                                    </h3>
                                    <p className="text-body-sm text-secondary mt-0.5">
                                        {project.category}
                                    </p>
                                </div>
                                {project.comingSoon && (
                                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                                        <span className="text-label text-tertiary border border-outline-variant rounded-[var(--radius-nav)] px-5 py-2 bg-surface/80 backdrop-blur-sm">
                                            Coming Soon
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        );

                        return (
                            <motion.article
                                key={project.id}
                                variants={fadeInUp}
                                className={`group ${project.comingSoon ? "cursor-default" : "cursor-pointer"}`}
                            >
                                {project.comingSoon ? (
                                    <div>{card}</div>
                                ) : (
                                    <Link to={`/work/${project.slug}`}>
                                        {card}
                                    </Link>
                                )}
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
